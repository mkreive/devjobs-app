import React from 'react';
import '../index.scss';

const JobCard = function (props) {
    const job = props.job;

    return (
        <div className='card'>
            <span className='card__logo'></span>
            <div className='card__text-group'>
                <div className='text-gray'>{job.postedAt}</div>
                <div className='text-gray text-dot'>&#8226;</div>
                <div className='text-gray'>{job.contract}</div>
            </div>
            <div className='text-bold-big'>{job.position}</div>
            <div className='text-gray'>{job.company}</div>
            <div className='text-purple'>{job.location}</div>
        </div>
    );
};

export default JobCard;
