import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const initialState = data;

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        contract(state) {
            state.filter((job) => job.contract === 'Full Time');
        },
        location(state) {
            state.filter((job) => job.location === 'United Kingdom');
        },
        title(state, action) {
            const inputValue = action.input;
            state.filter((job) => job.position === inputValue || job.company === inputValue);
        },
        search() {},
    },
});

export const store = configureStore({
    reducer: {
        jobs: data,
        filters: filterSlice.reducer,
    },
});

export default store;
