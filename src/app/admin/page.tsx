"use client";

import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const AdminDashboard: React.FC = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [signOutError, setSignOutError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
      setSignOutError("An error occurred while signing out. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      <h1 className="text-white text-3xl mb-6">Admin Dashboard</h1>
      <button
        onClick={handleSignOut}
        className="mb-6 p-3 bg-red-600 rounded text-white hover:bg-red-500"
      >
        Sign Out
      </button>
      {signOutError && <p className="text-red-500 mt-4">{signOutError}</p>}
    </div>
  );
};

export default AdminDashboard;
