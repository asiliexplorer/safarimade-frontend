"use client";
import React from "react";

/**
 * Simple compare table (You vs Avg top operators)
 */
export default function CompareTable() {
  return (
    <section className="mt-12">
      <h2 className="text-lg font-bold mb-4">
        Compare Your Results - Last 365 days
      </h2>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left"> </th>
              <th className="p-4 text-left">Quote Requests</th>
              <th className="p-4 text-left">Costs</th>
              <th className="p-4 text-left">Revenue</th>
              <th className="p-4 text-left">RPB</th>
              <th className="p-4 text-left">CPB</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4 font-semibold">You</td>
              <td className="p-4">30</td>
              <td className="p-4">$ 594</td>
              <td className="p-4">$ 8,406</td>
              <td className="p-4">6.8</td>
              <td className="p-4">7.1%</td>
            </tr>

            <tr className="border-t">
              <td className="p-4">Avg. top 100 operators</td>
              <td className="p-4">1,087</td>
              <td className="p-4">$ 61,936</td>
              <td className="p-4">$ 688,178</td>
              <td className="p-4">5.0</td>
              <td className="p-4">9.0%</td>
            </tr>

            <tr className="border-t">
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
