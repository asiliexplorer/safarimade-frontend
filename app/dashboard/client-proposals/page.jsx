"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Mail,
  Phone,
  Search,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { useGetTravelProposalsQuery } from "../../redux/features/siteSetiing/travelProposal/TravelProposalApi";

export default function ClientProposalsPage() {
  const [query, setQuery] = useState("");
  const { data, isLoading, isFetching, error } = useGetTravelProposalsQuery();

  const proposals = Array.isArray(data?.data) ? data.data : [];
console.log("Fetched client proposals:", proposals);
  const filtered = useMemo(() => {
    if (!query.trim()) return proposals;
    const search = query.trim().toLowerCase();
    return proposals.filter((proposal) => {
      const fullName = `${proposal.firstName || ""} ${proposal.lastName || ""}`
        .trim()
        .toLowerCase();
      return (
        fullName.includes(search) ||
        String(proposal.email || "").toLowerCase().includes(search) ||
        String(proposal.phone || "").toLowerCase().includes(search) ||
        String(proposal.whatsapp || proposal.wattsapp || "").toLowerCase().includes(search) ||
        String(proposal.country || "").toLowerCase().includes(search) ||
        String(proposal.destination || "").toLowerCase().includes(search)
      );
    });
  }, [proposals, query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffdf9] to-[#f6efe3]">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#ebdfce] bg-white/90 p-5 shadow-sm sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Client Proposals
          </h1>
          <p className="text-sm text-slate-500">
            Requests submitted from the website travel proposal form
          </p>
        </div>

        <div className="rounded-xl border border-[#e7dccb] bg-white px-4 py-2 text-sm font-semibold text-[#5f523f] shadow-sm">
          Total: {filtered.length}
          {isFetching && (
            <span className="ml-2 text-xs text-[#8B6F47]">Refreshing...</span>
          )}
        </div>
      </div>

      <div className="mb-6 flex w-full flex-col gap-3 sm:w-96">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#857764]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, email, phone, country or destination"
            className="w-full rounded-xl border border-[#ddcfbc] py-2.5 pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/20"
          />
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Failed to load client proposals. Please check admin login and try again.
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-[#eadfcd] bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#efe4d4]">
            <thead className="bg-gradient-to-r from-[#f8f1e5] to-[#fffaf3]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                  Trip Details
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                  Travelers
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#6b5d4a]">
                  Submitted
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#f2e8da] bg-white">
              {isLoading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    Loading client proposals...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    No client proposals found.
                  </td>
                </tr>
              ) : (
                filtered.map((proposal, index) => {
                  const fullName = `${proposal.firstName || ""} ${proposal.lastName || ""}`.trim();
                  return (
                    <tr
                      key={proposal._id || `${proposal.email}-${index}`}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-[#fffcf7]"} align-top hover:bg-[#f8f2e8]`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#b29670] to-[#8B6F47] text-white">
                            <Users size={16} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">
                              {fullName || "Unknown"}
                            </div>
                            <div className="text-xs text-slate-500">
                              {proposal.country || "Country not provided"}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-700">
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

                      <td className="px-6 py-4 text-sm text-slate-700">
                        <div>
                          <span className="font-medium text-slate-900">Destination:</span>{" "}
                          {proposal.destination || proposal.destinationKnowledge || "Not specified"}
                        </div>
                        <div className="mt-1">
                          <span className="font-medium text-slate-900">Travel with:</span>{" "}
                          {proposal.travelWith || "-"}
                        </div>
                        <div className="mt-1">
                          <span className="font-medium text-slate-900">Duration:</span>{" "}
                          {proposal.tripDuration || 0} days
                        </div>
                        <div className="mt-1">
                          <span className="font-medium text-slate-900">Budget:</span>{" "}
                          ${Number(proposal.budget || 0).toLocaleString()}
                        </div>
                        {Array.isArray(proposal.reasons) && proposal.reasons.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {proposal.reasons.slice(0, 3).map((reason) => (
                              <span
                                key={reason}
                                className="rounded-md bg-[#f7f2ea] px-2 py-0.5 text-xs text-[#5b4a36]"
                              >
                                {reason}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-700">
                        <div>Adults: {proposal.adults ?? 0}</div>
                        <div>Children: {proposal.children ?? 0}</div>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-[#8B6F47]" />
                          <span>
                            {proposal.createdAt
                              ? new Date(proposal.createdAt).toLocaleDateString()
                              : "-"}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          Arrival: {proposal.arrivalDate || "-"}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
