import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const launchesApi = createApi({
	reducerPath: 'launchesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spacexdata.com/',
	}),
	endpoints: (build) => ({
		getAll: build.query({
			query: () => 'v4/launches',
		}),
		getByDateRange: build.mutation({
			query: (body) => ({
				url: 'v4/launches/query',
				method: 'POST',
				body,
			}),
		}),
		getImageById: build.query({
			query: (rocketId) => `v4/rockets/${rocketId}`,
		}),
	}),
});

export const {
	useGetAllQuery,
	useGetImageByIdQuery,
	useGetByDateRangeMutation,
} = launchesApi;
