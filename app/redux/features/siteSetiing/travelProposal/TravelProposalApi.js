import { baseApi } from "../../api/BaseApi";

export const travelProposalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTravelProposals: builder.query({
      query: () => ({
        url: "/travel-proposals",
        method: "GET",
      }),
      providesTags: [{ type: "TravelProposal", id: "LIST" }],
    }),

    createTravelProposal: builder.mutation({
      query: (body) => ({
        url: "/travel-proposals",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "TravelProposal", id: "LIST" }],
    }),
  }),
});

export const { useGetTravelProposalsQuery, useCreateTravelProposalMutation } =
  travelProposalApi;
