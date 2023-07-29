import {configureStore} from '@reduxjs/toolkit';
import {launchesApi} from './api/launchesApi.js';


export const store = configureStore({
	reducer: {
		[launchesApi.reducerPath]: launchesApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(launchesApi.middleware)
});
