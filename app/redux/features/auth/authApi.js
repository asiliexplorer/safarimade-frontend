import { baseApi } from "../api/BaseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const full = await queryFulfilled; // { data: ... }
          const res = full?.data;

          // support both: { token, user }  OR { data: { token, user } }
          const token =
            res?.token ??
            res?.data?.token ??
            res?.accessToken ??
            res?.data?.accessToken;

          if (token && typeof window !== "undefined") {
            localStorage.setItem("accessToken", token);
          } else {
            console.warn("Login succeeded but token not found in response:", res);
          }
        } catch (error) {
          console.log("Login error:", error);
        }
      },
    }),

    // ------------------------
    // Register customer
    // ------------------------
    registerCustomer: builder.mutation({
      query: (body) => ({
        url: "/auth/register/customer",
        method: "POST",
        body,
      }),
      // optional: you can handle side-effects here (e.g. auto-login)
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const full = await queryFulfilled;
          // backend returns created user: { success: true, data: user }
          // if your backend returns token here, you can save it the same way as login
          const res = full?.data;
          const maybeToken = res?.token ?? res?.data?.token;
          if (maybeToken && typeof window !== "undefined") {
            localStorage.setItem("accessToken", maybeToken);
          }
        } catch (err) {
          // ignore
        }
      },
    }),

    // ------------------------
    // Register company
    // ------------------------
    registerCompany: builder.mutation({
      query: (body) => ({
        url: "/auth/register/company",
        method: "POST",
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const full = await queryFulfilled;
          const res = full?.data;
          const maybeToken = res?.token ?? res?.data?.token;
          if (maybeToken && typeof window !== "undefined") {
            localStorage.setItem("accessToken", maybeToken);
          }
        } catch (err) {
          // ignore
        }
      },
    }),

    // optional: register admin (admin-only route - requires auth)
    registerAdmin: builder.mutation({
      query: (body) => ({
        url: "/auth/register/admin",
        method: "POST",
        body,
      }),
    }),

    getProfile: builder.query({
      query: () => "/auth/me",
    }),
  }),
});

export const {
  useLoginMutation,
  useGetProfileQuery,
  useRegisterCustomerMutation,
  useRegisterCompanyMutation,
  useRegisterAdminMutation,
} = authApi;
