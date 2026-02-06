// app/dashboard/settings/reviews/create/page.jsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateReviewMutation } from "../../../../redux/features/siteSetiing/review/ReviewApi";
import { toast } from "react-hot-toast";
import { Star, ImageIcon } from "lucide-react";

/**
 * Create Review Page
 * - Uses useCreateReviewMutation()
 * - Fields: author, title, content, rating, source, avatarUrl, enabled
 * - Validates required fields, shows preview for avatarUrl
 */

export default function CreateReviewPage() {
  const router = useRouter();
  const [createReview, { isLoading }] = useCreateReviewMutation();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [source, setSource] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [enabled, setEnabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!author.trim()) return toast.error("Author is required");
    if (!content.trim()) return toast.error("Content is required");
    if (!rating || rating < 1 || rating > 5)
      return toast.error("Rating must be between 1 and 5");

    const payload = {
      author: author.trim(),
      title: title.trim() || undefined,
      content: content.trim(),
      rating: Number(rating),
      source: source.trim() || undefined,
      avatarUrl: avatarUrl.trim() || undefined,
      enabled,
    };

    try {
      await createReview(payload).unwrap();
      toast.success("Review created");
      router.push("/dashboard/settings/reviews/list");
    } catch (err) {
      console.error("create error:", err);
      const message = err?.data?.message || err?.error || "Failed to create";
      toast.error(message);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Create Review</h1>
        <p className="text-sm text-gray-500">
          Add a new customer review or testimonial
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="col-span-1 flex flex-col items-center gap-3">
            <div className="w-28 h-28 rounded-md bg-gray-50 border flex items-center justify-center overflow-hidden">
              {avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={avatarUrl}
                  alt={author || "avatar"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-300 flex flex-col items-center">
                  <ImageIcon size={32} />
                  <span className="text-xs mt-1">No avatar</span>
                </div>
              )}
            </div>

            <label className="text-sm text-gray-600">Avatar URL</label>
            <input
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="https://..."
              className="w-full md:w-40 border rounded px-3 py-2 text-sm"
            />
            <p className="text-xs text-gray-400 text-center mt-1">
              Optional — image shown as avatar
            </p>
          </div>

          <div className="col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Author*
              </label>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="Name of reviewer"
                required
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
                placeholder="A short title (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content*
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 w-full border rounded px-3 py-2 min-h-[120px]"
                placeholder="Write the full review here"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="flex items-center gap-3">
                <label className="block text-sm font-medium text-gray-700">
                  Rating*
                </label>
                <div className="flex items-center gap-2">
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

              <div className="flex items-center gap-3 mt-3 md:mt-0">
                <label className="block text-sm font-medium text-gray-700">
                  Source
                </label>
                <input
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="mt-1 border rounded px-3 py-2"
                  placeholder="Tripadvisor, Google, etc."
                />
              </div>

              <div className="flex items-center gap-2 ml-auto mt-3 md:mt-0">
                <label className="text-sm text-gray-700">Enabled</label>
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                  className="h-4 w-4"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 rounded border hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800"
              >
                {isLoading ? "Saving..." : "Create review"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
