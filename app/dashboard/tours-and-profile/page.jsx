import React from "react";
import AnalyticsChart from "../components/AnalyticsChart";
import ToursTable from "../components/ToursTable";
 
export default function ToursAndProfilePage() {
  return (
    <div className="max-w-[1200px] mx-auto py-8 space-y-8">
      <AnalyticsChart />
      <ToursTable />
    </div>
  );
}
