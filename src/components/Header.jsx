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
        </div>
    );
};

export default Header;
