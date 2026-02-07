import { baseApi } from "../../api/BaseApi"; // adjust path if needed

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // reviewApi.ts — change getReviews
    getReviews: builder.query({
      query: (params) => ({ url: "/reviews", params }),
      // don't transform to array — keep original server shape (e.g. { success, data })
      transformResponse: (res) => res,
      providesTags: (result) => {
        const list = Array.isArray(result)
          ? result
          : result && Array.isArray(result.data)
          ? result.data
          : [];

        return [
          { type: "Reviews", id: "LIST" },
          ...list.map((r) => ({ type: "Reviews", id: r._id || r.id })),
        ];
      },
    }),

    // GET single
    getReview: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: (result, error, id) => [{ type: "Reviews", id }],
    }),

    // CREATE
    createReview: builder.mutation({
      query: (payload) => ({
        url: "/reviews",
        method: "POST",
        body: payload,
      }),
      // Invalidate the list so getReviews refetches
      invalidatesTags: [{ type: "Reviews", id: "LIST" }],
    }),

    // PATCH (update)
    updateReview: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/reviews/${id}`,
        method: "PATCH",
        body: patch,
      }),
      // Invalidate both item and list
      invalidatesTags: (result, error, { id }) => [
        { type: "Reviews", id },
        { type: "Reviews", id: "LIST" },
      ],
    }),

    // PUT (replace)
    replaceReview: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/reviews/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Reviews", id },
        { type: "Reviews", id: "LIST" },
      ],
    }),

    // DELETE
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Reviews", id: "LIST" },
        { type: "Reviews", id },
      ],
    }),

    // Enable toggle
    toggleEnabled: builder.mutation({
      query: ({ id, enabled }) => ({
        url: `/reviews/${id}/enable`,
        method: "PATCH",
        body: { enabled },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Reviews", id },
        { type: "Reviews", id: "LIST" },
      ],
    }),

    // Feature toggle
    toggleFeatured: builder.mutation({
      query: ({ id, featured }) => ({
        url: `/reviews/${id}/feature`,
        method: "PATCH",
        body: { featured },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Reviews", id },
        { type: "Reviews", id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetReviewsQuery,
  useGetReviewQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useReplaceReviewMutation,
  useDeleteReviewMutation,
  useToggleEnabledMutation,
  useToggleFeaturedMutation,
} = reviewApi;
