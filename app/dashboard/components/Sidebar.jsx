"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { baseApi } from "../../redux/features/api/BaseApi"; // adjust path
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Overview", icon: "🏠" },
  { href: "/dashboard/packages", label: "Packages", icon: "🧭" },
  { href: "/dashboard/add-tour", label: "Add Tour", icon: "🧾" },
  {
    href: "/dashboard/tours-and-profile",
    label: "Tours & Profile",
    icon: "👥",
  },
  { href: "/dashboard/reports", label: "Reports", icon: "📊" },
  // we'll show Settings with nested items below
  { href: "/dashboard/AdminUsers", label: "AdminUsers", icon: "👤" },
  { href: "/dashboard/CompaniesList", label: "CompaniesList", icon: "🏢" },
];

export default function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
    }
    dispatch(baseApi.util.resetApiState());
    router.push("/login");
  };

  return (
    <aside className="w-72 hidden min-h-screen md:flex flex-col gap-6 bg-white p-6 border-r border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 overflow-hidden rounded-md bg-white flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Safari Trip Booking"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-[#8a3f2c]">
          Safari Trip Booking
          </div>
          <div className="text-xs text-gray-500">Safaris Dashboard</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-auto">
        <ul className="flex flex-col gap-1">
          {nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
              >
                <span className="text-lg opacity-80">{n.icon}</span>
                <span className="font-medium">{n.label}</span>
              </Link>
            </li>
          ))}

          {/* Settings parent */}
          <li>
            <button
              onClick={() => setSettingsOpen((s) => !s)}
              className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg opacity-80">⚙️</span>
                <span className="font-medium">Settings</span>
              </div>
              <span className="opacity-70">
                {settingsOpen ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </span>
            </button>

            {/* Settings submenu */}
            {settingsOpen && (
              <ul className="mt-1 ml-6 flex flex-col gap-1">
                <li>
                  <Link
                    href="/dashboard/settings/profile"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    <span className="text-sm">Profile</span>
                  </Link>
                </li>

                {/* Reviews multi-dropdown inside Settings */}
                <li>
                  <button
                    onClick={() => setReviewsOpen((r) => !r)}
                    className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm">Reviews</span>
                      <span className="text-xs text-gray-400">
                        manage & APIs
                      </span>
                    </div>
                    <span className="opacity-70">
                      {reviewsOpen ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      )}
                    </span>
                  </button>

                  {reviewsOpen && (
                    <ul className="mt-1 ml-6 flex flex-col gap-1">
                      <li>
                        <Link
                          href="/dashboard/settings/reviews/list"
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
                        >
                          Review Manage
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/settings/reviews/create"
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
                        >
                      Create  Review
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/settings/reviews/api"
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
                        >
                          Review API Endpoints
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    href="/dashboard/settings/notifications"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    <span className="text-sm">Notifications</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mt-3 px-3">
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </li>

          <li className="px-3">
            <button className="w-full bg-emerald-700 text-white py-2 rounded-md hover:bg-emerald-800">
              Make a Request
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
