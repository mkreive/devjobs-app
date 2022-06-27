import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const initialState = data;

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        all() {
            return initialState;
        },
        contract(state) {
            return state.filter((job) => job.contract === 'Full Time');
        },
        location(state, action) {
            const inputValue = action.payload;
            return state.filter((job) => job.location === inputValue);
        },
        title(state, action) {
            const inputValue = action.payload;
            return state.filter((job) => job.position === inputValue || job.company === inputValue);
        },
        search() {},
    },
});

const store = configureStore({
    reducer: { filters: filterSlice.reducer },
});

export const filterActions = filterSlice.actions;
export default store;
