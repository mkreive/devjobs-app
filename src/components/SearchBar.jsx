import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import '../index.scss';

const url = `url('https://res.cloudinary.com/kreiva/image/upload/v1655102840/DevJobsApp/icon-check_b1gwus.svg')`;

const SearchBar = function (props) {
    // const jobs = useSelector((state) => state);
    const [fullTimeChecked, setFullTimeChecked] = useState('');

    const fullTimeCheckboxHandler = function () {
        if (!fullTimeChecked) {
            setFullTimeChecked(url);
        } else {
            setFullTimeChecked('');
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
