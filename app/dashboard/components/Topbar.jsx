"use client";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Manage packages, bookings and customers
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-4">
          <div className="text-sm text-gray-600">15+ Years Exp</div>
          <div className="text-sm text-gray-600">2K+ Travelers</div>
          <div className="text-sm text-gray-600">4.9★ Rating</div>
        </div>

        {/* Single Link used correctly (no nested Link) */}
        <Link
          href="/dashboard/packages"
          className="bg-[#8a3f2c] hover:bg-[#7a3527] text-white px-4 py-2 rounded-md font-medium"
        >
          New Package
        </Link>
      </div>
    </header>
  );
}
