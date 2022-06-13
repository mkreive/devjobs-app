import React from 'react';
import '../index.scss';

const Header = function () {
    return (
        <div className='header'>
            <div className='header-top'>
                <div className='header-top__container'>
                    <img className='logo'></img>
                    <div className='theme-switch'>
                        <div className='theme-switch__sun'></div>
                        <div className='theme-switch__bar'>
                            <span className='theme-switch__bar-circle'></span>
                        </div>
                        <div className='theme-switch__moon'></div>
                    </div>
                </div>
            </div>
            <div className='header-search'></div>
        </div>
    );
};

export default Header;
