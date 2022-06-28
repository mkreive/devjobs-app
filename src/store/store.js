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
        title(state, action) {
            const inputValue = action.payload.toLowerCase();
            return state.filter(
                (job) =>
                    job.position.toLowerCase().includes(inputValue) ||
                    job.company.toLowerCase().includes(inputValue) ||
                    job.requirements.content.toLowerCase().includes(inputValue)
            );
        },
        location(state, action) {
            const inputValue = action.payload.toLowerCase();
            return state.filter((job) => job.location.toLowerCase().trim().includes(inputValue));
        },
        contract(state) {
            return state.filter((job) => job.contract === 'Full Time');
        },
        submit(state, action) {
            const location = action.payload.enteredLocation.toLowerCase();
            const title = action.payload.enteredTitle.toLowerCase();
            const fullTime = action.payload.checkamark;

            if (!location.trim() && !title.trim()) {
                console.log('empty inputs');
            }
            if (fullTime) {
                state.filter((job) => job.contract === 'Full Time');
            }
            if (location.trim() !== ' ') {
                state.filter((job) => job.location.toLowerCase().trim().includes(location));
            }
            if (title.trim() !== ' ') {
                const position = state.filter((job) => job.position.toLowerCase().trim().includes(location));

                if (!position) {
                    state.filter((job) => job.position.toLowerCase().trim().includes(location));
                }
            }
        },
    },
});

const store = configureStore({
    reducer: { filters: filterSlice.reducer },
});

export const filterActions = filterSlice.actions;
export default store;
