"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { baseApi } from "../../redux/features/api/BaseApi";
import {
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Package,
  Users,
} from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/packages", label: "Packages", icon: Package },
  {
    href: "/dashboard/client-proposals",
    label: "Client Proposals",
    icon: ClipboardList,
  },
  { href: "/dashboard/AdminUsers", label: "Admin Users", icon: Users },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
    }
    dispatch(baseApi.util.resetApiState());
    router.push("/login");
  };

  return (
    <aside className="hidden w-72 shrink-0 border-r border-[#e9e2d8] bg-gradient-to-b from-[#fffdf9] via-[#fffaf3] to-[#f8f1e6] p-6 md:sticky md:top-0 md:flex md:h-screen md:flex-col">
      <div className="mb-8 flex items-center gap-3 rounded-2xl border border-[#eadfce] bg-white/80 p-3 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-[#e6dac8]">
          <img
            src="/logo.png"
            alt="Safari Trip Booking"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <div className="text-sm font-bold tracking-wide text-[#8B6F47]">
            Safari Trip Booking
          </div>
          <div className="text-xs text-[#7f7365]">Admin Dashboard</div>
        </div>
      </div>

      <nav className="flex-1 overflow-auto">
        <ul className="flex flex-col gap-2">
          {nav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
              <Link
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#8B6F47] text-white shadow-md"
                    : "text-[#4e4336] hover:bg-[#f4ecdf]"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    isActive
                      ? "bg-white/20"
                      : "bg-[#f8f2e8] text-[#8B6F47] group-hover:bg-[#efe3d3]"
                  }`}
                >
                  <Icon size={17} />
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
            );
          })}

          <li className="mt-5 pt-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 font-semibold text-red-600 transition-colors hover:bg-red-50"
            >
              <LogOut size={16} />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
