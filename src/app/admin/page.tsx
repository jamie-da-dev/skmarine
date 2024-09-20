"use client";

import { useEffect, useState, useRef } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import { Gallery } from "react-grid-gallery";

interface CustomImage {
  src: string;
  original: string;
  width: number;
  height: number;
  caption?: string;
}

const ALLOWED_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

const AdminDashboard: React.FC = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [signOutError, setSignOutError] = useState<string | null>(null);
  const [imageUploads, setImageUploads] = useState<File[]>([]);
  const [images, setImages] = useState<CustomImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imagesListRef = ref(storage, "images/");

  useEffect(() => {
    if (!loading) {
      if (!user || user.email !== ALLOWED_EMAIL) {
        router.push("/login");
      }
    }
  }, [loading, user, router]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!user) return;
      try {
        const response = await listAll(imagesListRef);
        const urls = await Promise.all(
          response.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return new Promise<CustomImage>((resolve) => {
              const img = new Image();
              img.onload = () => {
                resolve({
                  src: url,
                  original: url,
                  width: img.width,
                  height: img.height,
                  caption: item.name,
                });
              };
              img.src = url;
            });
          })
        );
        setImages(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (user && user.email === ALLOWED_EMAIL) {
      fetchImages();
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
      setSignOutError("An error occurred while signing out. Please try again.");
    }
  };

  const uploadFiles = async () => {
    if (imageUploads.length === 0 || !user || user.email !== ALLOWED_EMAIL)
      return;

    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    setUploading(true);

    for (const file of imageUploads) {
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 5MB.`);
        continue;
      }

      if (!allowedTypes.includes(file.type)) {
        alert(
          `File ${file.name} has an invalid type. Only JPEG, PNG, and GIF are allowed.`
        );
        continue;
      }

      const imageRef = ref(storage, `images/${file.name + v4()}`);
      try {
        const snapshot = await uploadBytes(imageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        const img = new Image();
        img.onload = () => {
          setImages((prev) => [
            ...prev,
            {
              src: url,
              original: url,
              width: img.width,
              height: img.height,
              caption: file.name,
            },
          ]);
        };
        img.src = url;
      } catch (error) {
        console.error(`Error uploading image ${file.name}:`, error);
      }
    }

    setUploading(false);
    setImageUploads([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageClick = async (index: number, image: CustomImage) => {
    const confirmDelete = window.confirm("Do you want to remove this image?");
    if (confirmDelete) {
      try {
        const imageRef = ref(storage, image.src);
        await deleteObject(imageRef);
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
        alert("Image removed successfully");
      } catch (error) {
        console.error("Error removing image:", error);
        alert("Failed to remove image. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!user || user.email !== ALLOWED_EMAIL) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Sign Out
        </button>
      </header>

      <main className="container mx-auto px-4 py-8">
        {signOutError && <p className="text-red-500 mb-4">{signOutError}</p>}

        <section className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Upload New Images</h2>
          <div className="flex items-center space-x-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/gif"
              multiple
              onChange={(event) => {
                const files = event.target.files;
                if (files) setImageUploads(Array.from(files));
              }}
              className="flex-grow"
            />
            <button
              onClick={uploadFiles}
              disabled={uploading || imageUploads.length === 0}
              className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ${
                (uploading || imageUploads.length === 0) &&
                "opacity-50 cursor-not-allowed"
              }`}
            >
              {uploading ? "Uploading..." : "Upload Images"}
            </button>
          </div>
          {imageUploads.length > 0 && (
            <p className="mt-2 text-sm">
              {imageUploads.length} file(s) selected
            </p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Image Gallery</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Gallery
              images={images}
              onClick={handleImageClick}
              enableImageSelection={false}
              rowHeight={250}
              margin={4}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
