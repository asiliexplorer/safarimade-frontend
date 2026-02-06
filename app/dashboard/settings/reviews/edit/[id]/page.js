// app/dashboard/settings/reviews/edit/[id]/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Star } from "lucide-react";
import {
  useGetReviewQuery,
  useUpdateReviewMutation,
} from "../../../../../redux/features/siteSetiing/review/ReviewApi";

export default function EditReviewPage() {
  const params = useParams();
  const router = useRouter();

  // safe id extraction: sometimes params.id may be undefined or "undefined" depending on how you navigated.
  let idFromParams = params?.id;
  // fallback: try to read from URL (defensive)
  if (!idFromParams || idFromParams === "undefined") {
    const parts =
      typeof window !== "undefined" ? window.location.pathname.split("/") : [];
    const fallback = parts[parts.length - 1];
    if (fallback && fallback !== "edit") {
      idFromParams = fallback;
    }
  }

  const id = idFromParams;
  // fetch single review — skip if no id
  const {
    data: reviewResp,
    isLoading,
    isFetching,
    error,
  } = useGetReviewQuery(id, {
    skip: !id,
  });

  // support both API shapes: either reviewResp.data or reviewResp directly
  const review = reviewResp?.data ?? reviewResp ?? null;
  console.log("Loaded review:", review, "id param:", id);

  const [updateReview, { isLoading: updating }] = useUpdateReviewMutation();

  // form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [author, setAuthor] = useState("");
  const [source, setSource] = useState("");
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!review) return;
    setTitle(review.title ?? "");
    setContent(review.content ?? "");
    setRating(review.rating ?? 0);
    setAuthor(review.author ?? "");
    setSource(review.source ?? "");
    setEnabled(typeof review.enabled === "boolean" ? review.enabled : true);
  }, [review]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // find a review id to send: prefer route id, else review.id or review._id
    const reviewId = id ?? review?.id ?? review?._id;
    if (!reviewId) {
      toast.error("Missing review id — cannot update");
      console.warn("Missing id on update; params:", params, "review:", review);
      return;
    }

    if (!content.trim()) {
      return toast.error("Content is required");
    }

    try {
      // Most common RTK implementation: updateReview expects { id, ...patch } and uses url `/reviews/${id}`
      const payload = {
        id: reviewId,
        title,
        content,
        rating: Number(rating),
        author,
        source,
        enabled,
      };

      console.log("Updating review with payload:", payload);
      await updateReview(payload).unwrap();

      toast.success("Review updated");
      // go back to list (adjust route if your list path differs)
      router.push("/dashboard/settings/reviews/list");
    } catch (err) {
      console.error("update error", err);
      const message = err?.data?.message || err?.error || "Failed to update";
      toast.error(message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Edit Review</h1>
        <p className="text-sm text-gray-500">Make changes and save</p>
      </div>

      {isLoading || isFetching ? (
        <div className="p-6 bg-white rounded shadow-sm">Loading review…</div>
      ) : error ? (
        <div className="p-4 bg-red-50 text-red-700 rounded">
          Failed to fetch review.
        </div>
      ) : !review ? (
        <div className="p-4 bg-yellow-50 rounded">Review not found.</div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2"
              placeholder="Author name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2"
              placeholder="Short title (optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 min-h-[120px]"
              placeholder="Review content"
              required
            />
          </div>

          <div className="flex items-center gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <div className="flex items-center gap-2 mt-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    className={`flex items-center gap-1 px-2 py-1 rounded ${
                      n <= rating ? "bg-amber-100" : "bg-slate-50"
                    }`}
                    aria-label={`${n} star`}
                  >
                    <Star
                      size={14}
                      className={
                        n <= rating ? "text-amber-400" : "text-gray-300"
                      }
                    />
                    <span className="text-sm">{n}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Source
              </label>
              <input
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="e.g. Tripadvisor"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">Enabled</label>
              <input
                type="checkbox"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
                className="h-4 w-4"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 rounded border hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updating}
              className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800"
            >
              {updating ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
