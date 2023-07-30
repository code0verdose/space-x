import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
	name: 'missions',
	initialState: {
		data: [],
		sortByDate: 'desc', // По умолчанию сортировка по убыванию
		showSuccessfulMissions: true, // По умолчанию только успешные
		dateRange: {
			dateStart: '2015-01-01T00:00:00.000Z',
			dateEnd: '2019-01-02T00:00:00.000Z',
		},
	},
	reducers: {
		setMissionsData: (state, action) => {
			state.data = action.payload;
		},
		toggleSortByDate: (state) => {
			state.sortByDate = state.sortByDate === 'asc' ? 'desc' : 'asc';
		},
		toggleSuccessfulMissions(state) {
			state.showSuccessfulMissions = !state.showSuccessfulMissions;
		},
		setDateStart(state, action) {
			state.dateRange.dateStart = action.payload;
		},
		setDateEnd(state, action) {
			state.dateRange.dateEnd = action.payload;
		},
	},
});

export const {
	setMissionsData,
	toggleSortByDate,
	toggleSuccessfulMissions,
	setDateEnd,
	setDateStart,
} = missionsSlice.actions;

export default missionsSlice.reducer;
