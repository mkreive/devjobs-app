import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../index.scss';

const url = `url('https://res.cloudinary.com/kreiva/image/upload/v1655102840/DevJobsApp/icon-check_b1gwus.svg')`;

const SearchBar = function () {
    const dispatch = useDispatch();
    const [fullTimeChecked, setFullTimeChecked] = useState('');

    const fullTimeHandler = function () {
        if (!fullTimeChecked) {
            setFullTimeChecked(url);
            dispatch({ type: 'contract' });
        } else {
            setFullTimeChecked('');
            dispatch({ type: 'all' });
        }
    };

    return (
        <div className='header-search'>
            <input type='text' className='input input-title' placeholder='Filter by title, companies, expertise...' />
            <hr className='line' />
            <input type='text' className='input input-location' placeholder='Filter by location...' />
            <hr className='line' />
            <div className='input-submit'>
                <div className='checkbox' onClick={fullTimeHandler} style={{ backgroundImage: fullTimeChecked }}></div>
                <div className='text text-bold'>Full time only</div>
                <button className='btn'>Search</button>
            </div>
        </div>
    );
};
export default SearchBar;
