"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { useGetTravelProposalsQuery } from "../../redux/features/siteSetiing/travelProposal/TravelProposalApi";
import DashboardTableShell from "../components/DashboardTableShell";

export default function ClientProposalsPage() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const { data, isLoading, isFetching, error } = useGetTravelProposalsQuery();

  const proposals = Array.isArray(data?.data) ? data.data : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(query.trim());
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const filtered = useMemo(() => {
    if (!search) return proposals;
    const searchText = search.toLowerCase();
    return proposals.filter((proposal) => {
      const fullName = `${proposal.firstName || ""} ${proposal.lastName || ""}`
        .trim()
        .toLowerCase();
      return (
        fullName.includes(searchText) ||
        String(proposal.email || "").toLowerCase().includes(searchText) ||
        String(proposal.phone || "").toLowerCase().includes(searchText) ||
        String(proposal.whatsapp || proposal.wattsapp || "").toLowerCase().includes(searchText) ||
        String(proposal.country || "").toLowerCase().includes(searchText) ||
        String(proposal.destination || "").toLowerCase().includes(searchText)
      );
    });
  }, [proposals, search]);

  const pagination = useMemo(() => {
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * limit;
    return {
      total,
      totalPages,
      currentPage,
      pageSize: limit,
      items: filtered.slice(start, start + limit),
    };
  }, [filtered, limit, page]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#f6efe3]">
      <DashboardTableShell
        title="Client Proposals"
        description="Requests submitted from the website travel proposal form."
        total={pagination.total}
        isLoading={isLoading}
        isFetching={isFetching}
        searchPlaceholder="Search by name, email, phone, country or destination"
        searchValue={query}
        onSearchChange={setQuery}
        onSearchSubmit={() => setSearch(query.trim())}
        emptyMessage="No client proposals found."
        showEmptyState={false}
        pagination={{
          currentPage: pagination.currentPage,
          totalPages: pagination.totalPages,
          total: pagination.total,
          pageSize: limit,
          onPageChange: setPage,
        }}
      >
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Failed to load client proposals. Please check admin login and try again.
          </div>
        )}

      
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#efe4d4]">
            <thead className="bg-[#fcf8f2]">
              <tr className="text-left text-xs uppercase tracking-wide text-[#7c6d5a]">
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3">Contact</th>
                <th className="px-6 py-3">Trip Details</th>
                <th className="px-6 py-3">Travelers</th>
                <th className="px-6 py-3">Submitted</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#f2e8da] bg-white text-sm text-slate-700">
              {pagination.items.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500">
                    No client proposals found.
                  </td>
                </tr>
              ) : (
                pagination.items.map((proposal, index) => {
                  const fullName = `${proposal.firstName || ""} ${proposal.lastName || ""}`.trim();
                  return (
                    <tr key={proposal._id || `${proposal.email}-${index}`} className={`${index % 2 === 0 ? "bg-white" : "bg-[#fffcf7]"} align-top hover:bg-[#f8f2e8] transition-colors`}>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#b29670] to-[#8B6F47] text-white">
                            <Users size={16} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">{fullName || "Unknown"}</div>
                            <div className="text-xs text-slate-500">{proposal.country || "Country not provided"}</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[#8B6F47]" />
                          <span>{proposal.email || "-"}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#8B6F47]" />
                          <span>{proposal.phone || "-"}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <FaWhatsapp className="h-4 w-4 text-[#8B6F47]" />
                          <span>{proposal.whatsapp || proposal.wattsapp || "-"}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div><span className="font-medium text-slate-900">Destination:</span> {proposal.destination || proposal.destinationKnowledge || "Not specified"}</div>
                        <div className="mt-1"><span className="font-medium text-slate-900">Travel with:</span> {proposal.travelWith || "-"}</div>
                        <div className="mt-1"><span className="font-medium text-slate-900">Duration:</span> {proposal.tripDuration || 0} days</div>
                        <div className="mt-1"><span className="font-medium text-slate-900">Budget:</span> ${Number(proposal.budget || 0).toLocaleString()}</div>
                        {Array.isArray(proposal.reasons) && proposal.reasons.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {proposal.reasons.slice(0, 3).map((reason) => (
                              <span key={reason} className="rounded-md bg-[#f7f2ea] px-2 py-0.5 text-xs text-[#5b4a36]">{reason}</span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <div>Adults: {proposal.adults ?? 0}</div>
                        <div>Children: {proposal.children ?? 0}</div>
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-[#8B6F47]" />
                          <span>{proposal.createdAt ? new Date(proposal.createdAt).toLocaleDateString() : "-"}</span>
                        </div>
                        <div className="mt-1 text-xs text-slate-500">Arrival: {proposal.arrivalDate || "-"}</div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </DashboardTableShell>
    </div>
    
  );
}
