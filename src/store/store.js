import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const initialState = data;

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        all(state) {
            return state;
        },
        contract(state) {
            state.filter((job) => job.contract === 'full');
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
        jobs: initialState,
        filters: filterSlice.reducer,
    },
});

export const filerActions = filterSlice.actions;
export default store;
