"use client";
import React from "react";
import StatsGrid from "../dashboard/components/dashborad-stats/StatsGrid";
import StillOpen from "../dashboard/components/dashborad-stats/StillOpen";
import CompareTable from "../dashboard/components/dashborad-stats/CompareTable";
 
export default function DashboardPage() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto py-8">
        {/* header area (title + small controls if needed) */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Your Results</h1>
            <p className="text-sm text-gray-500">Overview for the last 365 days</p>
          </div>

          <div className="flex items-center gap-3">
            {/* date picker placeholder */}
            <div className="text-sm text-gray-600 bg-white px-3 py-2 rounded border">Last 365 days</div>
          </div>
        </div>

        {/* big metrics */}
        <StatsGrid />

        {/* still open */}
        <StillOpen />

        {/* comparison table */}
        <CompareTable />
      </div>
    </>
  );
}
