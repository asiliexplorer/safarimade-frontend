"use client";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="flex  bg-[#8B6F47] p-6 items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Dashboard</h1>
        <p className="text-sm text-gray-300">
          Manage packages, bookings and customers
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-4">
          <div className="text-sm text-white">15+ Years Exp</div>
          <div className="text-sm text-white">2K+ Travelers</div>
          <div className="text-sm text-white">4.9★ Rating</div>
        </div>

        
        {/* <Link
          href="/dashboard/packages"
          className="bg-white hover:bg-[#7a3527] text-[#8B6F47] px-4 py-2 rounded-md font-medium"
        >
          New Package
        </Link> */}
      </div>
    </header>
  );
}
