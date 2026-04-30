"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PencilLine, Trash2, Plus, Eye } from "lucide-react";
import { toast } from "react-hot-toast";
import {
  useDeletePackageMutation,
  useGetPackagesQuery,
} from "../../redux/features/admin/PackageApi";
import { slugifyPackageName } from "../../../lib/packageSlug";
import DashboardTableShell from "./DashboardTableShell";

const CATEGORY_OPTIONS = ["ALL", "SAFARI", "WILDEBEEST", "KILIMANJARO", "ZANZIBAR"];

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

  const filterSlot = (
    <>
      <select
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
          setPage(1);
        }}
        className="rounded-xl border border-[#d9c9b5] bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15"
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
        className="rounded-xl border border-[#d9c9b5] bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15"
      >
        <option value="ALL">All status</option>
        <option value="ACTIVE">Active</option>
        <option value="INACTIVE">Inactive</option>
      </select>
    </>
  );

  return (
    <DashboardTableShell
      title="Packages"
      description="Manage your safari, wildebeest, kilimanjaro and zanzibar packages."
      total={pagination.total || 0}
      isLoading={isLoading}
      isFetching={isFetching}
      searchPlaceholder="Search by name, description, destination"
      searchValue={searchInput}
      onSearchChange={setSearchInput}
      onSearchSubmit={() => {
        setSearch(searchInput.trim());
        setPage(1);
      }}
      filterSlot={filterSlot}
      actionSlot={(
        <button
          type="button"
          onClick={onCreate}
          className="inline-flex items-center gap-2 rounded-xl bg-[#8B6F47] px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-[#6f5737]"
        >
          <Plus size={16} />
          Add package
        </button>
      )}
      emptyMessage="No packages found for the current filters."
      showEmptyState={false}
      pagination={{
        currentPage: pagination.page || 1,
        totalPages: pagination.totalPages || 1,
        total: pagination.total || 0,
        pageSize: limit,
        onPageChange: setPage,
      }}
    >
      <div className="overflow-hidden rounded-2xl border border-[#e8ddcf] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#f0e7da]">
            <thead className="bg-[#fcf8f2]">
              <tr className="text-left text-xs uppercase tracking-wide text-[#7c6d5a]">
                <th className="px-4 py-3">Package</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Journey</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f6eee3] text-sm text-[#4d4133]">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-[#887a69]">
                    No packages found for the current filters.
                  </td>
                </tr>
              ) : (
                items.map((pkg) => (
                  <tr key={pkg._id} className="align-top hover:bg-[#f8f2e8] transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-[#3f3428]">{pkg.name}</div>
                      <div className="line-clamp-1 text-xs text-[#8a7a67]">
                        {pkg.travelStyle || pkg.experienceSummary || pkg.shortDescription || "No description"}
                      </div>
                    </td>
                    <td className="px-4 py-3">{pkg.category || "-"}</td>
                    <td className="px-4 py-3">
                      <div>{pkg.duration ? `${pkg.duration} days` : "-"}</div>
                      <div className="text-xs text-[#8a7a67]">{pkg.nights ? `${pkg.nights} nights` : null}</div>
                    </td>
                    <td className="px-4 py-3">
                      {pkg.priceType === "CUSTOM"
                        ? "Custom"
                        : pkg.priceFrom
                        ? `${pkg.currency || "$"}${pkg.priceFrom}`
                        : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${pkg.isActive ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                        {pkg.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/affordable-safari-tour-packages/${pkg.slug || slugifyPackageName(pkg.name)}`}
                          target="_blank"
                          className="inline-flex items-center gap-1 rounded-md border border-[#d8cab8] px-2 py-1 text-xs font-semibold text-[#5d4f3f] hover:bg-[#f8f1e8]"
                        >
                          <Eye size={14} />
                          View
                        </Link>

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
      </div>
    </DashboardTableShell>
  );
}
