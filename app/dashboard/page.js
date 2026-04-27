import React from "react";
import StatsGrid from "./components/dashborad-stats/StatsGrid";
import StillOpen from "./components/dashborad-stats/StillOpen";
import CompareTable from "./components/dashborad-stats/CompareTable";
import { CalendarDays } from "lucide-react";
 
 
export default function DashboardPage() {
  return (
    <div>
      <div>
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-[#ece2d4] bg-gradient-to-r from-[#fffefb] to-[#f8f1e7] px-5 py-4 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-[#2b2218]">Your Results</h1>
            <p className="text-sm text-[#786a57]">Overview for the last 365 days</p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[#e7dccb] bg-white px-3 py-2 text-sm font-semibold text-[#5f523f] shadow-sm">
            <CalendarDays size={16} className="text-[#8B6F47]" />
            <span>Last 365 days</span>
          </div>
        </div>

        <StatsGrid />
        <StillOpen />
        <CompareTable />
      </div>
    </div>
  );
}
