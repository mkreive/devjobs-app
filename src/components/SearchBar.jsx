import React from 'react';
import '../index.scss';

const SearchBar = function () {
    return (
        <div className='header-search'>
            <input type='text' className='input input-title' placeholder='Filter by title, companies, expertise...' />
            <hr className='line' />
            <input type='text' className='input input-location' placeholder='Filter by location...' />
            <hr className='line' />
            <div className='input-submit'>
                <div className='checkbox'></div>
                <div className='text text-bold'>Full time only</div>
                <button className='btn'>Search</button>
            </div>
        </div>
    );
};
export default SearchBar;
