import { configureStore } from '@reduxjs/toolkit';
import { launchesApi } from './api/launchesApi.js';
import missionsReducer from './slices/missionsSlice.js';

export const store = configureStore({
	reducer: {
		[launchesApi.reducerPath]: launchesApi.reducer,
		missions: missionsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(launchesApi.middleware),
});
