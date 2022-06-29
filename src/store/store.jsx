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
            const contract = action.payload.fullTime;

            return initialState.filter(
                (job) =>
                    job.location.toLowerCase().trim().includes(locationInput) &&
                    (job.company.toLowerCase().trim().includes(titleInput) ||
                        job.position.toLowerCase().trim().includes(titleInput) ||
                        job.requirements.items.forEach((item) => item.includes(titleInput))) &&
                    contract.includes(job.contract)
            );
        },
    },
});

const store = configureStore({
    reducer: { filters: filterSlice.reducer },
});

export const filterActions = filterSlice.actions;
export default store;
