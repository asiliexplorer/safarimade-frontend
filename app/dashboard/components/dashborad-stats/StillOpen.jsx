"use client";
import React from "react";
import StatCard from "./StatCard";

/**
 * A horizontal 3-card section (Still Open) with donut + cost + forecast
 */
export default function StillOpen() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold mb-4">Still Open - Last 365 days</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <div className="text-sm text-gray-400">'Still Open' Requests</div>
            <div className="mt-4 flex items-center justify-center">
              {/* simple donut placeholder */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-400 to-green-400 flex items-center justify-center text-white font-bold shadow">
                2
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-500">
              The quote requests you received that are still open
            </div>
          </div>
        </div>

        <StatCard
          title="Costs"
          value={<span className="text-3xl">$ 33</span>}
          subtitle="The costs you paid for the quote requests that are still open"
          icon={<span className="text-orange-500">🏷️</span>}
        />

        <StatCard
          title="Revenue Forecast"
          value={<span className="text-3xl">$ 404</span>}
          subtitle="A forecast based on value of 'Still Open' requests"
          icon={<span className="text-blue-500">🔭</span>}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
        <div>
          <div className="font-semibold mb-1">
            New quote requests (0-3 months old)
          </div>
          <p>
            If quote requests are still open and younger than 3 months, keep
            status as 'Still Open'.
          </p>
        </div>

        <div>
          <div className="font-semibold mb-1">
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
