"use client";
import React from "react";
import StatCard from "./StatCard";
import { Tags, Telescope } from "lucide-react";

/**
 * A horizontal 3-card section (Still Open) with donut + cost + forecast
 */
export default function StillOpen() {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-bold text-[#2c2419]">Still Open - Last 365 days</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[#ebe2d4] bg-white p-6 shadow-[0_10px_30px_rgba(51,40,25,0.08)]">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7a65]">'Still Open' Requests</div>
            <div className="mt-4 flex items-center justify-center">
              {/* simple donut placeholder */}
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-tr from-[#8B6F47] to-[#bf9462] text-4xl font-black text-white shadow-lg">
                2
              </div>
            </div>
            <div className="mt-3 text-sm text-[#756754]">
              The quote requests you received that are still open
            </div>
          </div>
        </div>

        <StatCard
          title="Costs"
          value={<span className="text-3xl">$ 33</span>}
          subtitle="The costs you paid for the quote requests that are still open"
          icon={<Tags size={20} />}
          tone="amber"
        />

        <StatCard
          title="Revenue Forecast"
          value={<span className="text-3xl">$ 404</span>}
          subtitle="A forecast based on value of 'Still Open' requests"
          icon={<Telescope size={20} />}
          tone="blue"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 text-sm text-[#6f634f] md:grid-cols-2">
        <div className="rounded-xl border border-[#ebe2d4] bg-white/80 p-4">
          <div className="mb-1 font-semibold text-[#3a3024]">
            New quote requests (0-3 months old)
          </div>
          <p>
            If quote requests are still open and younger than 3 months, keep
            status as 'Still Open'.
          </p>
        </div>

        <div className="rounded-xl border border-[#ebe2d4] bg-white/80 p-4">
          <div className="mb-1 font-semibold text-[#3a3024]">
            Old quote requests (3+ months old)
          </div>
          <p>
            Please check your quote requests that are still open and older than
            3 months — consider marking as 'Not Booked'.
          </p>
        </div>
      </div>
    </section>
  );
}
