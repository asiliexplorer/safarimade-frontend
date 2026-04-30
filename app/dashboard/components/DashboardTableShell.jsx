"use client";

import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function DashboardTableShell({
  title,
  description,
  total,
  isLoading,
  isFetching,
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  onSearchSubmit,
  filterSlot,
  actionSlot,
  children,
  emptyMessage = "No data found",
  emptyIcon,
  emptyAction,
  showSearch = true,
  showPagination = true,
  showEmptyState = false,
  pagination,
}) {
  const currentPage = pagination?.currentPage || 1;
  const totalPages = pagination?.totalPages || 1;
  const totalItems = pagination?.total || total || 0;

  const handlePrev = () => pagination?.onPageChange?.(Math.max(1, currentPage - 1));
  const handleNext = () => pagination?.onPageChange?.(Math.min(totalPages, currentPage + 1));

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[#e9decd] bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#3f3428]">{title}</h2>
            {description ? <p className="text-sm text-[#847563]">{description}</p> : null}
          </div>

          {actionSlot}
        </div>

        {showSearch && (
          <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              <div className="relative w-full min-w-[18rem] max-w-xl flex-1">
                <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7a67]" />
                <input
                  value={searchValue}
                  onChange={(event) => onSearchChange?.(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") onSearchSubmit?.();
                  }}
                  placeholder={searchPlaceholder}
                  className="w-full rounded-xl border border-[#d9c9b5] bg-white py-2.5 pl-9 pr-3 shadow-sm outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15"
                />
              </div>
              {filterSlot ? <div className="flex min-w-0 flex-wrap items-center gap-2">{filterSlot}</div> : null}
            </div>

            <div className="rounded-xl border border-[#e7dccb] bg-white px-4 py-2 text-sm font-semibold text-[#5f523f] shadow-sm">
              Total: {totalItems}
              {isFetching ? <span className="ml-2 text-xs text-[#8B6F47]">Refreshing...</span> : null}
            </div>
          </div>
        )}
      </div>

      {children}

      {showPagination && pagination ? (
        <div className="rounded-2xl border border-[#e8ddcf] bg-white px-4 py-3 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-[#7f715e]">
              Showing {Math.min((currentPage - 1) * (pagination.pageSize || 1) + 1, totalItems)} to {Math.min(currentPage * (pagination.pageSize || 1), totalItems)} of {totalItems} entries
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={handlePrev}
                className="inline-flex items-center gap-2 rounded-lg border border-[#d8cab8] px-3 py-1.5 text-[#5e513f] transition hover:bg-[#f8f2e8] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <span className="text-sm text-[#6e604d]">
                Page {currentPage} of {totalPages}
              </span>

              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-lg border border-[#d8cab8] px-3 py-1.5 text-[#5e513f] transition hover:bg-[#f8f2e8] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isLoading && !children ? (
        <div className="rounded-2xl border border-[#eadfcd] bg-white px-6 py-12 text-center text-sm text-[#887a69] shadow-sm">
          Loading...
        </div>
      ) : null}

      {showEmptyState && !isLoading && !isFetching && totalItems === 0 ? (
        <div className="rounded-2xl border border-[#eadfcd] bg-white px-6 py-12 text-center shadow-sm">
          {emptyIcon ? <div className="mx-auto mb-4 w-fit">{emptyIcon}</div> : null}
          <p className="text-sm text-[#887a69]">{emptyMessage}</p>
          {emptyAction ? <div className="mt-4">{emptyAction}</div> : null}
        </div>
      ) : null}
    </div>
  );
}