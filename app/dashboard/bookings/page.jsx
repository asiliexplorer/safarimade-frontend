import React from "react";

export default function BookingsPage() {
  return (
    <>
      <h2 className="text-2xl font-bold">Bookings</h2>
      <p className="text-sm text-gray-500 mt-1">Manage all bookings</p>

      <div className="mt-6 bg-white p-4 rounded-2xl shadow-sm">
        <table className="w-full text-sm">
          <thead className="text-left text-xs text-gray-500">
            <tr>
              <th className="pb-2">Booking ID</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Package</th>
              <th className="pb-2">Start</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t">
              <td className="py-3">BKG-00123</td>
              <td className="py-3">John Doe</td>
              <td className="py-3">7-Day Classic Serengeti</td>
              <td className="py-3">2025-01-20</td>
              <td className="py-3">Confirmed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
