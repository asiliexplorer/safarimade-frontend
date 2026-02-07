"use client";

import React, { useMemo, useState } from "react";
import { useGetCompaniesQuery } from "../../redux/features/admin/UserApi";

export default function CompaniesList({ status: initialStatus }) {
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(initialStatus || "");

  const { data, isLoading, isFetching, error } = useGetCompaniesQuery({
    status: status || undefined,
    page,
    limit,
  });

  // your API returns { success: true, data: { items: [...] } }
  const companies = data?.data?.items || [];

  // client-side quick search (by name or email)
  const filtered = useMemo(() => {
    if (!search) return companies;
    const q = search.trim().toLowerCase();
    return companies.filter(
      (c) =>
        (c.name || "").toLowerCase().includes(q) ||
        (c.email || "").toLowerCase().includes(q)
    );
  }, [companies, search]);

  if (isLoading)
    return (
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-4 bg-white rounded shadow">
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-3" />
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
                  <div className="h-8 bg-gray-200 rounded w-full mt-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="p-6 text-red-600">
        Error loading companies. Try refreshing the page.
      </div>
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Companies</h1>
            <p className="text-sm text-gray-500">
              {status
                ? `Showing ${status} companies`
                : "All registered companies"}
              {isFetching && (
                <span className="ml-2 text-xs text-gray-400">Updating…</span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email"
              className="px-3 py-2 border rounded-md w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />

            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setPage(1);
              }}
              className="px-3 py-2 border rounded-md bg-white"
            >
              <option value="">All status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length === 0 && (
            <div className="col-span-full p-6 bg-white rounded shadow text-gray-600">
              No companies found.
            </div>
          )}

          {filtered.map((c) => (
            <div
              key={c._id}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                  {(c.name || c.email || "C").charAt(0).toUpperCase()}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {c.name || "—"}
                      </div>
                      <div className="text-xs text-gray-500">{c.email}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-gray-400">
                        {new Date(c.createdAt).toLocaleDateString()}
                      </div>

                      {/* company status badge */}
                      <div className="mt-2">
                        {c.companyStatus ? (
                          <span
                            className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                              c.companyStatus === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : c.companyStatus === "approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {c.companyStatus}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400">N/A</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-gray-700 line-clamp-2">
                    {c.description || "No description provided."}
                  </p>

                  {/* actions */}
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      className="px-3 py-1 text-sm border rounded text-indigo-700 border-indigo-100 hover:bg-indigo-50"
                      onClick={() => {
                        // placeholder — open details modal or navigate
                        alert(`Open company: ${c.name || c.email}`);
                      }}
                    >
                      View
                    </button>

                    <button
                      className="px-3 py-1 text-sm border rounded text-gray-700 border-gray-100 hover:bg-gray-50"
                      onClick={() => {
                        // placeholder: you could navigate to company page or open modal
                        navigator.clipboard?.writeText(c._id || "");
                        alert("Company ID copied");
                      }}
                    >
                      Copy ID
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{filtered.length}</span> of{" "}
            <span className="font-medium">{companies.length}</span> on this page
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Prev
            </button>

            <div className="px-3 py-1 border rounded bg-white">{page}</div>

            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 rounded border"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
