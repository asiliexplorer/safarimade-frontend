"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, PencilLine, Trash2, Plus } from "lucide-react";
import { toast } from "react-hot-toast";
import {
  useDeletePackageMutation,
  useGetPackagesQuery,
} from "../../redux/features/admin/PackageApi";

const CATEGORY_OPTIONS = ["ALL", "SAFARIS", "WILDEBEEST", "KILIMANJARO", "ZANZIBAR"];

export default function ViewPacges({ onCreate, onEdit }) {
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput.trim());
      setPage(1);
    }, 350);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const params = useMemo(() => {
    const query = { page, limit };

    if (search) {
      query.search = search;
    }

    if (category !== "ALL") {
      query.category = category;
    }

    if (status !== "ALL") {
      query.isActive = status === "ACTIVE" ? "true" : "false";
    }

    return query;
  }, [category, limit, page, search, status]);

  const { data, isLoading, isFetching } = useGetPackagesQuery(params);
  const [deletePackage, { isLoading: deleting }] = useDeletePackageMutation();

  const items = data?.data?.items || [];
  const pagination = data?.data?.pagination || { page: 1, totalPages: 1, total: 0 };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete package "${name}"?`)) return;

    try {
      await deletePackage(id).unwrap();
      toast.success("Package deleted");
    } catch (error) {
      const message = error?.data?.message || error?.error || "Failed to delete package";
      toast.error(message);
    }
  };

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-[#e9decd] bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#3f3428]">Packages</h2>
            <p className="text-sm text-[#847563]">Manage your safari, wildebeest, kilimanjaro and zanzibar packages.</p>
          </div>

          <button
            type="button"
            onClick={onCreate}
            className="inline-flex items-center gap-2 rounded-lg bg-[#8B6F47] px-4 py-2 font-semibold text-white hover:bg-[#6f5737]"
          >
            <Plus size={16} />
            Add package
          </button>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <label className="relative">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7a67]" />
            <input
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search by name, description, destination"
              className="w-full rounded-lg border border-[#d9c9b5] py-2 pl-9 pr-3"
            />
          </label>

          <select
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              setPage(1);
            }}
            className="rounded-lg border border-[#d9c9b5] px-3 py-2"
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
              setPage(1);
            }}
            className="rounded-lg border border-[#d9c9b5] px-3 py-2"
          >
            <option value="ALL">All status</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#e8ddcf] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#f0e7da]">
            <thead className="bg-[#fcf8f2]">
              <tr className="text-left text-xs uppercase tracking-wide text-[#7c6d5a]">
                <th className="px-4 py-3">Package</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f6eee3] text-sm text-[#4d4133]">
              {isLoading || isFetching ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-[#887a69]">
                    Loading packages...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-[#887a69]">
                    No packages found for the current filters.
                  </td>
                </tr>
              ) : (
                items.map((pkg) => (
                  <tr key={pkg._id}>
                    <td className="px-4 py-3">
                      <div className="font-semibold">{pkg.name}</div>
                      <div className="line-clamp-1 text-xs text-[#8a7a67]">{pkg.shortDescription || "No description"}</div>
                    </td>
                    <td className="px-4 py-3">{pkg.category || "-"}</td>
                    <td className="px-4 py-3">{pkg.duration ? `${pkg.duration} days` : "-"}</td>
                    <td className="px-4 py-3">{pkg.price ? `$${pkg.price}` : "-"}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${
                          pkg.isActive ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {pkg.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => onEdit(pkg)}
                          className="inline-flex items-center gap-1 rounded-md border border-[#d8cab8] px-2 py-1 text-xs font-semibold text-[#5d4f3f] hover:bg-[#f8f1e8]"
                        >
                          <PencilLine size={14} />
                          Edit
                        </button>

                        <button
                          type="button"
                          disabled={deleting}
                          onClick={() => handleDelete(pkg._id, pkg.name)}
                          className="inline-flex items-center gap-1 rounded-md border border-red-200 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-[#f0e7da] px-4 py-3 text-sm">
          <div className="text-[#7f715e]">Total: {pagination.total || 0}</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={pagination.page <= 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              className="rounded-md border border-[#d8cab8] px-3 py-1.5 text-[#5e513f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-[#6e604d]">
              Page {pagination.page || 1} of {pagination.totalPages || 1}
            </span>
            <button
              type="button"
              disabled={(pagination.page || 1) >= (pagination.totalPages || 1)}
              onClick={() => setPage((prev) => prev + 1)}
              className="rounded-md border border-[#d8cab8] px-3 py-1.5 text-[#5e513f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
