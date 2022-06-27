import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../index.scss';
import { filterActions } from '../store/store';

const url = `url('https://res.cloudinary.com/kreiva/image/upload/v1655102840/DevJobsApp/icon-check_b1gwus.svg')`;

const SearchBar = function () {
    const dispatch = useDispatch();
    const [fullTimeChecked, setFullTimeChecked] = useState('');

    const fullTimeHandler = function () {
        if (!fullTimeChecked) {
            setFullTimeChecked(url);
            dispatch(filterActions.contract());
        } else {
            setFullTimeChecked('');
            dispatch(filterActions.all());
        }
    };

    const locationInputHandler = function () {
        const inputValue = 'United Kingdom';
        dispatch(filterActions.location(inputValue));
    };

    const titleInputHandler = function () {
        const inputValue = 'Junior Full-Stack Developer';
        dispatch(filterActions.title(inputValue));
    };
    const searchHandler = function () {
        console.log('search btn clicked');
    };

    return (
        <div className='header-search'>
            <input
                type='text'
                className='input input-title'
                placeholder='Filter by title, companies, expertise...'
                onClick={titleInputHandler}
            />
            <hr className='line' />
            <input
                type='text'
                className='input input-location'
                placeholder='Filter by location...'
                onClick={locationInputHandler}
            />
            <hr className='line' />
            <div className='input-submit'>
                <div className='checkbox' onClick={fullTimeHandler} style={{ backgroundImage: fullTimeChecked }}></div>
                <div className='text text-bold'>Full time only</div>
                <button className='btn' onClick={searchHandler}>
                    Search
                </button>
            </div>
        </div>
    );
};
export default SearchBar;
