import { baseApi } from "../api/BaseApi";

export const packageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: (params) => ({
        url: "/packages",
        params,
      }),
      transformResponse: (res) => res,
      providesTags: (result) => {
        const list = result?.data?.items || [];
        return [
          { type: "Packages", id: "LIST" },
          ...list.map((item) => ({ type: "Packages", id: item._id })),
        ];
      },
    }),

    getPackage: builder.query({
      query: (id) => `/packages/${id}`,
      providesTags: (result, error, id) => [{ type: "Packages", id }],
    }),

    createPackage: builder.mutation({
      query: (payload) => ({
        url: "/packages",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [{ type: "Packages", id: "LIST" }],
    }),

    updatePackage: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/packages/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Packages", id: "LIST" },
        { type: "Packages", id },
      ],
    }),

    deletePackage: builder.mutation({
      query: (id) => ({
        url: `/packages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Packages", id: "LIST" },
        { type: "Packages", id },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPackagesQuery,
  useGetPackageQuery,
  useCreatePackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
} = packageApi;
