"use client";
import React from "react";
import StatCard from "./StatCard";
import {
  BadgeDollarSign,
  Handshake,
  Mail,
  RefreshCw,
  Tags,
  TrendingUp,
} from "lucide-react";

export default function StatsGrid() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-bold text-[#2c2419]">Your Results - Last 365 days</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Revenue"
          value={<span className="text-4xl">$ 8,406</span>}
          subtitle="The revenue you generated from quote requests that resulted in a booking"
          icon={<Handshake size={20} />}
          tone="green"
        />

        <StatCard
          title="Costs"
          value={<span className="text-4xl">$ 594</span>}
          subtitle="The costs you paid for quote requests"
          icon={<Tags size={20} />}
          tone="amber"
        />

        <StatCard
          title="CPB"
          value={<div className="text-4xl">7.1%</div>}
          subtitle="Cost per booking"
          icon={<TrendingUp size={20} />}
          tone="green"
        />

        <StatCard
          title="Quote Requests"
          value={
            <div className="flex items-center gap-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#dfe7f2] bg-[#f4f8ff] text-3xl font-black text-[#2f6fcf] shadow-sm">
                27
              </div>
            </div>
          }
          subtitle="Requests that did or did not result in a booking"
          icon={<Mail size={20} />}
          tone="blue"
        />

        <StatCard
          title="Marketing Budget"
          value={<div className="text-3xl">$ 645</div>}
          subtitle="10% of estimated revenue"
          icon={<BadgeDollarSign size={20} />}
          tone="green"
        />

        <StatCard
          title="RPB"
          value={<div className="text-3xl">6.8</div>}
          subtitle="Requests per booking"
          icon={<RefreshCw size={20} />}
          tone="default"
        />
      </div>
    </section>
  );
}
