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
		getImageById: build.query({
			query: (rocketId) => `v4/rockets/${rocketId}`,
		}),
	}),
});

export const { useGetAllQuery, useGetImageByIdQuery } = launchesApi;
