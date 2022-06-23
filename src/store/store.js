import { configureStore } from '@reduxjs/toolkit';
import data from '../data.json';

const filtersReducer = function (state = data, action) {
    if (action.type === 'contract') {
        if (action.time === 'full') return data.filter((job) => job.contract === 'Full Time');
        if (action.time === 'part') return data.filter((job) => job.contract === 'Part Time');
        if (action.time === 'freelance') return data.filter((job) => job.contract === 'Freelance');
        return data;
    }
    if (action.type === 'location') {
        return data.filter((job) => job.location === 'United Kingdom');
    }
    if (action.type === 'input') {
        const inputValue = action.input;

        return data.filter((job) => job.position === inputValue || job.company === inputValue);
    }
    if (action.type === 'all') {
        return data;
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
