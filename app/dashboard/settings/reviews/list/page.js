// app/dashboard/settings/reviews/list/ReviewsList.jsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
  useDeleteReviewMutation,
  useGetReviewsQuery,
  useToggleEnabledMutation,
} from "../../../../redux/features/siteSetiing/review/ReviewApi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Trash2, Edit2, Star, Loader2 } from "lucide-react";

console.log("use client: ReviewsList loaded");

function RatingStars({ value }) {
  const v = Math.round(value ?? 0);
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < v ? "text-amber-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function Avatar({ src, name }) {
  const initials = useMemo(() => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }, [name]);

  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name || "avatar"}
      className="w-12 h-12 rounded-md object-cover border"
    />
  ) : (
    <div className="w-12 h-12 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center font-semibold border">
      {initials}
    </div>
  );
}

export default function ReviewsList() {
  // getReviews returns server shape { success, data } per your API
  const { data: reviews = {}, isLoading, isFetching, error, refetch } =
    useGetReviewsQuery();
  const items = reviews?.data ?? [];

  const [deleteReview, { isLoading: deleteLoading }] =
    useDeleteReviewMutation();

  const [toggleEnabled, { isLoading: toggleGlobalLoading }] =
    useToggleEnabledMutation();

  // optimistic map for quick UI updates: { [id]: boolean }
  const [optimisticEnabled, setOptimisticEnabled] = useState({});

  // toggling id to show spinner per-row
  const [togglingId, setTogglingId] = useState(null);

  const [confirmDelete, setConfirmDelete] = useState(null);
  const router = useRouter();

  // keep optimistic map in sync if items change (populate defaults)
  useEffect(() => {
    if (!items || items.length === 0) return;
    const map = {};
    items.forEach((r) => {
      const id = r._id ?? r.id;
      if (id) map[id] = Boolean(r.enabled);
    });
    setOptimisticEnabled((prev) => ({ ...map, ...prev }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const onDeleteConfirm = async () => {
    if (!confirmDelete) return;
    const idToDelete = confirmDelete.id;
    try {
      const res = await deleteReview(idToDelete).unwrap();
      toast.success("Review deleted");
      setConfirmDelete(null);
      // refetch or rely on RTK invalidation
      refetch();
    } catch (err) {
      console.error("Delete error:", err);
      const message = err?.data?.message || err?.error || "Failed to delete";
      toast.error(message);
    }
  };

  const handleToggleEnabled = async (id, currentEnabled) => {
    if (!id) return toast.error("Missing id");
    // optimistic flip
    setOptimisticEnabled((s) => ({ ...s, [id]: !currentEnabled }));
    setTogglingId(id);
    try {
      await toggleEnabled({ id, enabled: !currentEnabled }).unwrap();
      toast.success(!currentEnabled ? "Review enabled" : "Review disabled");
      // either refetch or let RTK invalidation update cache
      refetch();
    } catch (err) {
      console.error("Toggle enabled error:", err);
      const message = err?.data?.message || err?.error || "Failed to update";
      toast.error(message);
      // revert optimistic change on error
      setOptimisticEnabled((s) => ({ ...s, [id]: currentEnabled }));
    } finally {
      setTogglingId(null);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Reviews</h1>
          <p className="text-sm text-gray-500">Manage guest reviews and feedback</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="px-3 py-1 rounded-md bg-slate-100 text-sm hover:bg-slate-200"
            aria-label="Refresh reviews"
          >
            Refresh
          </button>
          <button
            onClick={() => router.push("/dashboard/settings/reviews/full")}
            className="px-3 py-1 rounded-md bg-emerald-700 text-white text-sm hover:bg-emerald-800"
          >
            View All
          </button>
        </div>
      </div>

      {/* Content */}
      {isLoading || isFetching ? (
        <ul className="space-y-4" aria-busy="true">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="p-4 border rounded-lg animate-pulse bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-gray-200" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
                <div className="w-24 h-8 bg-gray-200 rounded" />
              </div>
            </li>
          ))}
        </ul>
      ) : error ? (
        <div className="p-6 rounded bg-red-50 text-red-700">Failed to load reviews.</div>
      ) : items.length === 0 ? (
        <div className="p-8 rounded-lg border border-dashed border-gray-200 text-center">
          <div className="mx-auto max-w-lg">
            <h3 className="text-lg font-semibold">No reviews yet</h3>
            <p className="text-sm text-gray-500 mt-2">
              When your guests leave reviews they’ll appear here.
            </p>
          </div>
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((r) => {
            const reviewId = r._id ?? r.id; // robust id resolution
            const serverEnabled = Boolean(r.enabled);
            const enabled =
              reviewId in optimisticEnabled ? optimisticEnabled[reviewId] : serverEnabled;
            const isToggling = togglingId === reviewId;

            return (
              <li
                key={reviewId ?? Math.random()}
                className="p-4 md:p-5 border rounded-lg bg-white flex flex-col md:flex-row md:items-start md:justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <Avatar src={r.avatarUrl} name={r.author} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-sm font-semibold truncate">{r.title || "No title"}</h3>
                      <span className="text-xs text-gray-400">{r.date ? new Date(r.date).toLocaleDateString() : ""}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">{r.content || "—"}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <RatingStars value={r.rating} />
                      <span className="text-xs text-gray-400">By {r.author || "Unknown"}</span>
                      {r.source && <span className="text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-600">{r.source}</span>}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-2 self-end md:self-auto">
                  {/* Enable/Disable toggle */}
                  <div className="flex items-center gap-2 mr-2">
                    <label className="text-xs text-gray-600">Status</label>

                    <button
                      onClick={() => handleToggleEnabled(reviewId, enabled)}
                      disabled={isToggling}
                      className={`relative inline-flex items-center h-7 w-14 rounded-full p-1 transition-colors focus:outline-none ${
                        enabled ? "bg-emerald-600" : "bg-gray-300"
                      }`}
                      aria-pressed={enabled}
                      aria-label={enabled ? "Disable review" : "Enable review"}
                      title={enabled ? "Enabled — click to disable" : "Disabled — click to enable"}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                          enabled ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                      {isToggling && (
                        <span className="absolute inset-0 flex items-center justify-center z-10">
                          <Loader2 className="animate-spin text-white" size={14} />
                        </span>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      if (!reviewId) {
                        toast.error("Missing review id");
                        console.warn("Missing id on review:", r);
                        return;
                      }
                      router.push(`/dashboard/settings/reviews/edit/${reviewId}`);
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm hover:bg-emerald-50"
                    aria-label={`Edit review ${r.title || reviewId}`}
                  >
                    <Edit2 size={16} />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => {
                      if (!reviewId) {
                        toast.error("Missing review id");
                        console.warn("Missing id on review:", r);
                        return;
                      }
                      setConfirmDelete({ id: reviewId, title: r.title });
                    }}
                    disabled={deleteLoading}
                    className="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                    aria-label={`Delete review ${r.title || reviewId}`}
                  >
                    <Trash2 size={16} />
                    <span>Delete</span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Delete confirmation modal */}
      {confirmDelete && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setConfirmDelete(null)} />
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6 z-10">
            <h2 className="text-lg font-semibold">Delete review</h2>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to delete <span className="font-medium">{confirmDelete.title ?? ""}</span>? This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setConfirmDelete(null)} className="px-3 py-1.5 rounded-md border hover:bg-slate-50">Cancel</button>
              <button onClick={onDeleteConfirm} disabled={deleteLoading} className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700">
                {deleteLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
