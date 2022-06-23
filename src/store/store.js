import { configureStore } from 'redux';
import data from '../data.json';

const searchReducer = function (state = data, action) {
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

const store = configureStore(searchReducer);

export default store;
