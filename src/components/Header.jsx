import React from 'react';
import '../index.scss';

const Header = function () {
    return (
        <div className='header'>
            <div className='header-top'>
                <div className='header-top__container'>
                    <div className='logo'></div>
                    <div className='theme-switch'>
                        <div className='theme-switch__sun'></div>
                        <div className='theme-switch__bar'>
                            <div className='theme-switch__bar-circle'></div>
                        </div>
                        <div className='theme-switch__moon'></div>
                    </div>
                </div>
            </div>
            <div className='header-search'>
                <input
                    type='text'
                    className='input input-title'
                    placeholder='Filter by title, companies, expertise...'
                />
                <hr className='line' />
                <input type='text' className='input input-location' placeholder='Filter by location...' />
                <hr className='line' />
                <div className='input-submit'>
                    <div className='checkbox'></div>
                    <div className='text text-bold'>Full time only</div>
                    <button className='btn'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
