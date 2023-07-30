import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
	name: 'missions',
	initialState: {
		data: [],
		sortByDate: 'desc', // По умолчанию сортировка по убыванию
	},
	reducers: {
		setMissionsData: (state, action) => {
			state.data = action.payload;
		},
		toggleSortByDate: (state) => {
			state.sortByDate = state.sortByDate === 'asc' ? 'desc' : 'asc';
		},
	},
});

export const { setMissionsData, toggleSortByDate } = missionsSlice.actions;

export default missionsSlice.reducer;
