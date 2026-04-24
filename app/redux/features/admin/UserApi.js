import { baseApi } from "../api/BaseApi";

 
export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: ({ page = 1, limit = 50, role, email, name } = {}) => {
        const params = { page, limit };
        if (role) params.role = role;
        if (email) params.email = email;
        if (name) params.name = name;
        return {
          url: "/auth/users",
          params,
        };
      },
      keepUnusedDataFor: 60,
      providesTags: (result) =>
        result && result.items
          ? [
              ...result.items.map((u) => ({ type: "User", id: u.id || u._id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),

    getUserById: build.query({
      query: (userId) => ({
        url: `/auth/users/${userId}`,
      }),
      providesTags: (result, error, userId) => [{ type: "User", id: userId }],
    }),

    getCompanies: build.query({
      query: ({ status, page = 1, limit = 50 } = {}) => {
        const params = { page, limit };
        if (status) params.status = status;
        return {
          url: "/auth/users/companies",
          params,
        };
      },
      keepUnusedDataFor: 60,
      providesTags: (result) =>
        result && result.items
          ? [
              ...result.items.map((c) => ({
                type: "Company",
                id: c.id || c._id,
              })),
              { type: "Company", id: "LIST" },
            ]
          : [{ type: "Company", id: "LIST" }],
    }),

    createAdmin: build.mutation({
      query: (body) => ({
        url: "/auth/register/admin",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    updateUser: build.mutation({
      query: ({ userId, body }) => ({
        url: `/auth/users/${userId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { userId }) => [
        { type: "User", id: userId },
        { type: "User", id: "LIST" },
      ],
    }),

    deleteUser: build.mutation({
      query: (userId) => ({
        url: `/auth/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetCompaniesQuery,
  useLazyGetCompaniesQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useCreateAdminMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
