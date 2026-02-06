"use client";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { useGetProfileQuery } from "../redux/features/auth/authApi"; // <-- adjust path if needed
import { useRouter } from "next/navigation";
import { useEffect } from "react";

 
export default function DashboardLayout({ children }) {
  const router = useRouter();

  // fetch current user profile (client-side)
  const {
    data: profileRes,
    isLoading,
    isError,
  } = useGetProfileQuery(undefined);

  // profileRes expected: { success: true, data: { id, email, role, ... } }
  const user = profileRes?.data ?? null;

  useEffect(() => {
    // while loading, do nothing
    if (isLoading) return;

    // if error (401) or no user, force to login
    if (isError || !user) {
      router.replace("/login");
      return;
    }

    // if user exists but not admin, send to unauthorized
    if (String(user.role).toLowerCase() !== "admin") {
      router.replace("/unauthorized");
      return;
    }
  }, [isLoading, isError, user, router]);

  // show loader while checking
  if (isLoading || (!profileRes && !isError)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  // if we get here, user exists and is admin
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          <Topbar />
          <div className="mt-6">{children}</div>
        </div>
      </main>
    </div>
  );
}
