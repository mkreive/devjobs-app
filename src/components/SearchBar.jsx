import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import '../index.scss';
import { filterActions } from '../store/store';

const url = `url('https://res.cloudinary.com/kreiva/image/upload/v1655102840/DevJobsApp/icon-check_b1gwus.svg')`;

const SearchBar = function () {
    const dispatch = useDispatch();
    const [fullTimeChecked, setFullTimeChecked] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const locationRef = useRef();
    const titleRef = useRef();

    const fullTimeHandler = function () {
        if (!fullTimeChecked) {
            setFullTimeChecked(url);
            dispatch(filterActions.contract());
        } else {
            setFullTimeChecked('');
            dispatch(filterActions.all());
        }
    };

    const locationInputHandler = function (event) {
        setEnteredLocation(event.target.value);
        dispatch(filterActions.location(enteredLocation));
    };

    const titleInputHandler = function (event) {
        setEnteredTitle(event.target.value);
        dispatch(filterActions.title(enteredTitle));
    };
    const submitHandler = function (event) {
        event.preventDefault();
        const enteredTitleValue = titleRef.current.value;
        const enteredLocationValue = locationRef.current.value;
        dispatch(
            filterActions.submit({
                enteredTitle: enteredTitleValue,
                enteredLocation: enteredLocationValue,
                checkamark: fullTimeChecked,
            })
        );
        setEnteredLocation('');
        setEnteredTitle('');
    };

    return (
        <form className='header-search' onSubmit={submitHandler}>
            <input
                type='text'
                id='title'
                ref={titleRef}
                className='input input-title'
                placeholder='Filter by title, companies, expertise...'
                onChange={titleInputHandler}
                value={enteredTitle}
            />
            <hr className='line' />
            <input
                type='text'
                id='location'
                ref={locationRef}
                className='input input-location'
                placeholder='Filter by location...'
                onChange={locationInputHandler}
                value={enteredLocation}
            />
            <hr className='line' />
            <div className='input-submit'>
                <div className='checkbox' onClick={fullTimeHandler} style={{ backgroundImage: fullTimeChecked }}></div>
                <div className='text text-bold'>Full time only</div>
            </div>
        </form>
    );
};
export default SearchBar;
