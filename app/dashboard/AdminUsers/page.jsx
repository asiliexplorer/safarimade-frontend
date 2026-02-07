"use client";

import { useGetUsersQuery } from "../../redux/features/admin/UserApi";
import React, { useMemo, useState } from "react";

function SearchIcon() {
  return (
    <svg
      className="w-4 h-4 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M12.293 16.293a1 1 0 0 1-1.414 0L5.586 11l5.293-5.293a1 1 0 1 1 1.414 1.414L8.414 11l3.879 3.879a1 1 0 0 1 0 1.414z" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        d="M7.707 3.707a1 1 0 0 1 0 1.414L4.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L2 8l4.293-4.293a1 1 0 0 1 1.414 0z"
        transform="rotate(180 6 8)"
      />
    </svg>
  );
}

export default function AdminUsers() {
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const limit = 10;

  const { data, error, isLoading, isFetching } = useGetUsersQuery({
    page,
    limit,
    role: roleFilter || undefined,
  });

  const items = data?.data?.items || [];

  // client-side search filter (fast)
  const users = useMemo(() => {
    if (!q) return items;
    const s = q.trim().toLowerCase();
    return items.filter(
      (u) =>
        (u.email || "").toLowerCase().includes(s) ||
        (u.name || "").toLowerCase().includes(s)
    );
  }, [items, q]);

  return (
    <div className="p-6 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Users</h1>
            <p className="text-sm text-slate-500">
              Manage registered users —{" "}
              <span className="font-medium text-slate-700">
                Total: {items.length}
              </span>
              {isFetching && (
                <span className="ml-2 text-xs text-indigo-500">Updating…</span>
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <div className="relative flex items-center w-full sm:w-80">
              <span className="absolute left-3">
                <SearchIcon />
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name or email"
                className="pl-11 pr-3 py-2 w-full border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  className="absolute right-2 text-xs text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>

            <select
              value={roleFilter}
              onChange={(e) => {
                setRoleFilter(e.target.value);
                setPage(1);
              }}
              className="px-3 py-2 border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <option value="">All roles</option>
              <option value="admin">Admin</option>
              <option value="company">Company</option>
              <option value="customer">Customer</option>
            </select>

            <button
              onClick={() => {
                setQ("");
                setRoleFilter("");
                setPage(1);
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Card container with table */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-indigo-50 to-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-slate-600">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-8 text-center text-sm text-gray-500"
                    >
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((u, idx) => (
                    <tr
                      key={u._id}
                      className={`${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-400 flex items-center justify-center text-white font-bold">
                            {(u.name || u.email || "U").charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">
                              {u.name || "—"}
                            </div>
                            <div className="text-xs text-slate-500">
                              {u._id}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-700">
                        {u.email}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            u.role === "admin"
                              ? "bg-purple-600 text-white"
                              : u.role === "company"
                              ? "bg-blue-600 text-white"
                              : "bg-green-600 text-white"
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {u.companyStatus ? (
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold
                            ${
                              u.companyStatus === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : u.companyStatus === "approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {u.companyStatus}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400">—</span>
                        )}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {u.createdAt
                          ? new Date(u.createdAt).toLocaleDateString()
                          : "—"}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          <button
                            className="px-3 py-1 rounded-md bg-white border border-gray-200 text-sm text-slate-700 hover:bg-gray-50"
                            onClick={() => alert(`View ${u.email}`)}
                          >
                            View
                          </button>

                          <button
                            className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700"
                            onClick={() => alert(`Message ${u.email}`)}
                          >
                            Message
                          </button>

                          <button
                            title="Delete user"
                            className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-red-50 text-red-600 hover:bg-red-100"
                            onClick={() =>
                              confirm(`Delete ${u.email}?`) && alert("Deleted")
                            }
                          >
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 7h12M10 11v6m4-6v6M9 7l1-3h4l1 3"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer: summary + pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t bg-white">
            <div className="text-sm text-slate-600">
              Showing{" "}
              <span className="font-medium text-slate-800">
                {Math.min(users.length, limit)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-800">{items.length}</span>{" "}
              on this page
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md border bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                <ChevronLeft /> Prev
              </button>

              <div className="px-3 py-1 border rounded-md bg-gray-50">
                Page <span className="font-medium mx-1">{page}</span>
              </div>

              <button
                onClick={() => setPage((p) => p + 1)}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md border bg-white hover:bg-gray-50"
              >
                Next <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
