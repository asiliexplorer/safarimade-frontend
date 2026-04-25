"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PackagesPageRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/affordable-safari-tour-packages");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#8B6F47] border-t-transparent" />
        <p className="text-base font-medium text-gray-700">Loading packages...</p>
      </div>
    </div>
  );
}