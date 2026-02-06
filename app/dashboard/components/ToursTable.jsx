"use client";
import React from "react";
import Link from "next/link";

const sample = [
  {
    id: "T-001",
    title: "1-Day Materuni Waterfalls",
    status: "On Hold",
    imps: 179,
    clicks: 1,
    requests: 0,
    booked: 0,
    rpb: "-",
    cpr: "-",
    cpb: "-",
  },
  {
    id: "T-002",
    title: "2-Day Lake Manyara & Tarangire",
    status: "On Hold",
    imps: 63,
    clicks: 5,
    requests: 0,
    booked: 0,
    rpb: "-",
    cpr: "-",
    cpb: "-",
  },
  {
    id: "T-003",
    title: "7-Day Classic Serengeti & Ngorongoro",
    status: "Live",
    imps: 458,
    clicks: 24,
    requests: 2,
    booked: 2,
    rpb: 6.8,
    cpr: "$26.32",
    cpb: "$158.22",
  },
];

export default function ToursTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="text-lg font-semibold">Tours & Profile</div>
        <div className="flex gap-2">
          <Link
            href="/dashboard/add-tour"
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            + Add a Tour
          </Link>
          <button className="border px-4 py-2 rounded">
            Tour Competition Checker
          </button>
        </div>
      </div>

      <div className="p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-3">Title</th>
              <th className="p-3">Impr.</th>
              <th className="p-3">Clicks</th>
              <th className="p-3">Requests</th>
              <th className="p-3">Still Open</th>
              <th className="p-3">Not Booked</th>
              <th className="p-3">Booked</th>
              <th className="p-3">RPB</th>
              <th className="p-3">CPR</th>
              <th className="p-3">CPB</th>
            </tr>
          </thead>

          <tbody>
            {sample.map((row) => (
              <tr key={row.id} className="border-t hover:bg-gray-50">
                <td className="p-3 align-top">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" />
                    <div>
                      <div className="text-sm font-medium">
                        <Link
                          href={`/tours/${row.id}`}
                          className="text-blue-600 underline"
                        >
                          {row.title}
                        </Link>
                      </div>
                      <div
                        className={`text-xs mt-1 ${
                          row.status === "Live"
                            ? "text-emerald-600"
                            : "text-red-500"
                        }`}
                      >
                        {row.status}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3 align-top">{row.imps}</td>
                <td className="p-3 align-top">{row.clicks}</td>
                <td className="p-3 align-top">{row.requests}</td>
                <td className="p-3 align-top">0</td>
                <td className="p-3 align-top">0</td>
                <td className="p-3 align-top">{row.booked}</td>
                <td className="p-3 align-top">{row.rpb}</td>
                <td className="p-3 align-top">{row.cpr}</td>
                <td className="p-3 align-top">{row.cpb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t text-sm text-gray-600">
        <strong>Total</strong> — Impressions: 10,035 · Clicks: 503 · Requests:
        30 · Booked: 4 · RPB: 6.8 · CPB: $158.22
      </div>
    </div>
  );
}
