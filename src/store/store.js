import { configureStore } from '@reduxjs/toolkit';
import data from '../data.json';

const filtersReducer = function (state = data, action) {
    if (action.type === 'contract') {
        return data.filter((job) => job.contract === 'Full Time');
    }
    if (action.type === 'location') {
        return data.filter((job) => job.location === 'United Kingdom');
    }
    if (action.type === 'input') {
        return data.filter((job) => job.position === 'Senior Software Engineer');
    }

    return state;
};

export const store = configureStore({
    reducer: {
        jobs: data,
        filters: filtersReducer,
    },
});

export default store;
