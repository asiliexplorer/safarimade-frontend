"use client"; // must be at the very top

import React from "react";
import CompanySidebar from "./components/CompanySidebar";
import Topbar from "../dashboard/components/Topbar";
import CompanyRouteGuard from "./components/CompanyRouteGuard";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <CompanyRouteGuard>
        <CompanySidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-[1200px] mx-auto">
            <Topbar />
            <div className="mt-6">{children}</div>
          </div>
        </main>
      </CompanyRouteGuard>
    </div>
  );
}
