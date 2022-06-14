import React from 'react';
import '../index.scss';

const JobCard = function (props) {
    return (
        <div className='card'>
            <span className='card__logo'></span>
            <div className='card__text-group'>
                <div className='text-gray'>5h ago</div>
                <div className='text-gray text-dot'>&#8226;</div>
                <div className='text-gray'>Full Time</div>
            </div>
            <div className='text-bold-big'>Senior Software engineer</div>
            <div className='text-gray'>Scoot</div>
            <div className='text-purple'>United Kingdom</div>
        </div>
    );
};

export default JobCard;
