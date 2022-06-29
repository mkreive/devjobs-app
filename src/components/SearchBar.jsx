import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../index.scss';
import { filterActions } from '../store/store';

const url = `url('https://res.cloudinary.com/kreiva/image/upload/v1655102840/DevJobsApp/icon-check_b1gwus.svg')`;

const SearchBar = function () {
    const dispatch = useDispatch();
    const [fullTimeChecked, setFullTimeChecked] = useState('');
    const [contract, setContract] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');

    const titleInputHandler = function (event) {
        setEnteredTitle(event.target.value);
        dispatch(filterActions.search({ location: enteredLocation, title: enteredTitle, fullTime: contract }));
    };
    const locationInputHandler = function (event) {
        setEnteredLocation(event.target.value);
        dispatch(filterActions.search({ location: enteredLocation, title: enteredTitle, fullTime: contract }));
    };
    const fullTimeHandler = function () {
        if (fullTimeChecked === '') {
            setFullTimeChecked(url);
            setContract('Full Time');
            dispatch(filterActions.search({ location: enteredLocation, title: enteredTitle, fullTime: contract }));
        } else {
            setFullTimeChecked('');
            setContract('');
            dispatch(filterActions.search({ location: enteredLocation, title: enteredTitle, fullTime: contract }));
        }
    };

    return (
        <div className='header-search'>
            <input
                type='text'
                id='title'
                className='input input-title'
                placeholder='Filter by title, companies, expertise...'
                onChange={titleInputHandler}
            />
            <hr className='line' />
            <input
                type='text'
                id='location'
                className='input input-location'
                placeholder='Filter by location...'
                onChange={locationInputHandler}
            />

            <hr className='line' />
            <div className='input-submit'>
                <div className='checkbox' onClick={fullTimeHandler} style={{ backgroundImage: fullTimeChecked }}></div>
                <div className='text text-bold'>Full time only</div>
            </div>
        </div>
    );
};
export default SearchBar;
