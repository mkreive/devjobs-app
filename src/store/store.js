import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const initialState = data;
const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        search(state, action) {
            const locationInput = action.payload.location.toLowerCase();
            const titleInput = action.payload.title.toLowerCase();
            const checkmarkInput = action.payload.fullTime;

            console.log(locationInput);
            console.log(titleInput);
            console.log(checkmarkInput);

            return state.filter(
                (job) =>
                    job.company.toLowerCase().trim().includes(titleInput) ||
                    job.position.toLowerCase().trim().includes(titleInput) ||
                    job.location.toLowerCase().trim().includes(locationInput) ||
                    job.contract === checkmarkInput
            );
        },
    },
});

const store = configureStore({
    reducer: { filters: filterSlice.reducer },
});

export const filterActions = filterSlice.actions;
export default store;
