import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import '../index.scss';
import { filterActions } from '../store/store';

const url = `url('https://res.cloudinary.com/kreiva/image/upload/v1655102840/DevJobsApp/icon-check_b1gwus.svg')`;

const SearchBar = function () {
    const dispatch = useDispatch();
    const [fullTimeChecked, setFullTimeChecked] = useState('');
    const [contract, setContract] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [showDropdown, setShowdropdown] = useState(false);
    const jobs = useSelector((state) => state.filters);
    const allLocations = new Set(jobs.map((job) => job.location));
    const locations = Array.from(allLocations);

    const titleInputHandler = function (event) {
        setEnteredTitle(event.target.value);
    };
    const locationInputHandler = function (event) {
        setShowdropdown(true);
        setEnteredLocation(event.target.value);
    };
    const fullTimeHandler = function () {
        if (fullTimeChecked === '') {
            setContract('Full Time');
            setFullTimeChecked(url);
        } else {
            setFullTimeChecked('');
            setContract('');
        }
    };
    const focusHandler = function () {
        setShowdropdown(true);
    };
    const dropdownHandler = function (props) {
        const selectedLocation = props.target.textContent.trim();
        setEnteredLocation(selectedLocation);

        setShowdropdown(false);
    };

    useEffect(() => {
        dispatch(filterActions.search({ location: enteredLocation, title: enteredTitle, fullTime: contract }));
    }, [enteredLocation, enteredTitle, contract]);

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
                autoComplete='off'
                className='input input-location'
                placeholder='Filter by location...'
                onChange={locationInputHandler}
                onFocus={focusHandler}
                value={enteredLocation}
            />
            {showDropdown && (
                <ul className='input__dropdown'>
                    {locations.map((location) => (
                        <li
                            onClick={dropdownHandler}
                            className='input__dropdown-row'
                            key={Math.random() * 10}
                            location={location}
                        >
                            {location}
                        </li>
                    ))}
                </ul>
            )}

            <hr className='line' />
            <div className='input-submit'>
                <div className='checkbox' onClick={fullTimeHandler} style={{ backgroundImage: fullTimeChecked }}></div>
                <div className='text text-bold'>Full time only</div>
            </div>
        </div>
    );
};
export default SearchBar;
