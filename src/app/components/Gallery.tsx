"use client";

import { useState, useEffect, useRef } from "react";
import { Gallery as GridGallery } from "react-grid-gallery";
import { storage } from "@/app/firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CustomImage {
  src: string;
  original: string;
  width: number;
  height: number;
  caption?: string;
}

const Gallery: React.FC<GalleryProps> = ({ isOpen, onClose }) => {
  const [images, setImages] = useState<CustomImage[]>([]);
  const [index, setIndex] = useState(-1);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesListRef = ref(storage, "images/");
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
    };

    if (isOpen) {
      fetchImages();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIndex(-1);
    onClose();
  };

  const handleClick = (index: number) => setIndex(index);
  const handleMovePrev = () =>
    setIndex((index + images.length - 1) % images.length);
  const handleMoveNext = () => setIndex((index + 1) % images.length);

  if (!isOpen) return null;

  const currentImage = images[index];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-4 w-[90vw] h-[90vh] overflow-auto relative scrollbar-hide"
      >
        <div className="w-full h-[calc(100%-4rem)]">
          <GridGallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
            rowHeight={250}
            margin={4}
          />
        </div>
        {!!currentImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <button
              onClick={handleClose}
              className="absolute top-4 right-8 text-white text-6xl"
            >
              &times;
            </button>
            <button
              onClick={handleMovePrev}
              className="absolute left-4 text-white text-8xl"
            >
              &#8249;
            </button>
            <button
              onClick={handleMoveNext}
              className="absolute right-4 text-white text-8xl"
            >
              &#8250;
            </button>
            <img
              src={currentImage.original}
              alt={currentImage.caption}
              className="max-w-[80vw] max-h-[80vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
