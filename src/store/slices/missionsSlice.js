import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
	name: 'missions',
	initialState: {
		data: [],
		sortByDate: 'desc', // По умолчанию сортировка по убыванию
		showSuccessfulMissions: true, // По умолчанию только успешные
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
	},
});

export const { setMissionsData, toggleSortByDate, toggleSuccessfulMissions } = missionsSlice.actions;

export default missionsSlice.reducer;
