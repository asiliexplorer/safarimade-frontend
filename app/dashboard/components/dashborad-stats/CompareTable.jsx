"use client";
import React from "react";

/**
 * Simple compare table (You vs Avg top operators)
 */
export default function CompareTable() {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-lg font-bold text-[#2c2419]">
        Compare Your Results - Last 365 days
      </h2>

      <div className="overflow-hidden rounded-2xl border border-[#ebe2d4] bg-white shadow-[0_10px_30px_rgba(51,40,25,0.08)]">
        <table className="w-full text-sm">
          <thead className="bg-[#f8f2e8] text-[#4d4031]">
            <tr>
              <th className="p-4 text-left font-semibold"> </th>
              <th className="p-4 text-left font-semibold">Quote Requests</th>
              <th className="p-4 text-left font-semibold">Costs</th>
              <th className="p-4 text-left font-semibold">Revenue</th>
              <th className="p-4 text-left font-semibold">RPB</th>
              <th className="p-4 text-left font-semibold">CPB</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-[#eee4d6] bg-[#fffdf9] text-[#2f271c]">
              <td className="p-4 font-bold">You</td>
              <td className="p-4 font-semibold">30</td>
              <td className="p-4 font-semibold">$ 594</td>
              <td className="p-4 font-semibold">$ 8,406</td>
              <td className="p-4 font-semibold">6.8</td>
              <td className="p-4 font-semibold text-[#2f8f58]">7.1%</td>
            </tr>

            <tr className="border-t border-[#eee4d6] text-[#5b4d3c]">
              <td className="p-4">Avg. top 100 operators</td>
              <td className="p-4">1,087</td>
              <td className="p-4">$ 61,936</td>
              <td className="p-4">$ 688,178</td>
              <td className="p-4">5.0</td>
              <td className="p-4">9.0%</td>
            </tr>

            <tr className="border-t border-[#eee4d6] text-[#5b4d3c]">
              <td className="p-4">Avg. top 1000 operators</td>
              <td className="p-4">114</td>
              <td className="p-4">$ 5,507</td>
              <td className="p-4">$ 59,683</td>
              <td className="p-4">5.2</td>
              <td className="p-4">9.2%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
