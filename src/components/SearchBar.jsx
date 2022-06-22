import React, { useState } from 'react';
import '../index.scss';
import { filterByFullTime } from './helperFunctions';

const url = `url('https://res.cloudinary.com/kreiva/image/upload/v1655102840/DevJobsApp/icon-check_b1gwus.svg')`;

const SearchBar = function (props) {
    const [fullTimeChecked, setFullTimeChecked] = useState('');
    const jobs = props.currentJobs;

    const fullTimeCheckboxHandler = function () {
        if (!fullTimeChecked) {
            setFullTimeChecked(url);
            const fullTimeJobs = filterByFullTime(jobs);
            props.onSearch(fullTimeJobs, { type: 'Full Time' });
        } else {
            setFullTimeChecked('');
            props.onSearch('', { type: 'All' });
        }
    };

    return (
        <div className='header-search'>
            <input type='text' className='input input-title' placeholder='Filter by title, companies, expertise...' />
            <hr className='line' />
            <input type='text' className='input input-location' placeholder='Filter by location...' />
            <hr className='line' />
            <div className='input-submit'>
                <div
                    className='checkbox'
                    onClick={fullTimeCheckboxHandler}
                    style={{ backgroundImage: fullTimeChecked }}
                ></div>
                <div className='text text-bold'>Full time only</div>
                <button className='btn'>Search</button>
            </div>
        </div>
    );
};
export default SearchBar;
