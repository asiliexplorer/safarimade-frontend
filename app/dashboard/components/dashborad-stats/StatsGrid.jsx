"use client";
import React from "react";
import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <section>
      <h2 className="text-lg font-bold mb-4">Your Results - Last 365 days</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Revenue"
          value={<span className="text-4xl">$ 8,406</span>}
          subtitle="The revenue you generated from quote requests that resulted in a booking"
          icon={<span className="text-green-600">🤝</span>}
        />

        <StatCard
          title="Costs"
          value={<span className="text-4xl">$ 594</span>}
          subtitle="The costs you paid for quote requests"
          icon={<span className="text-orange-500">🏷️</span>}
        />

        <StatCard
          title="CPB"
          value={<div className="text-4xl">7.1%</div>}
          subtitle="Cost per booking"
          icon={<div className="text-green-600">📈</div>}
        />

        <StatCard
          title="Quote Requests"
          value={
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-sm">
                27
              </div>
            </div>
          }
          subtitle="Requests that did or did not result in a booking"
          icon={<div className="text-blue-500">📩</div>}
        />

        <StatCard
          title="Marketing Budget"
          value={<div className="text-3xl">$ 645</div>}
          subtitle="10% of estimated revenue"
          icon={<div className="text-green-600">💸</div>}
        />

        <StatCard
          title="RPB"
          value={<div className="text-3xl">6.8</div>}
          subtitle="Requests per booking"
          icon={<div className="text-green-600">🔁</div>}
        />
      </div>
    </section>
  );
}
