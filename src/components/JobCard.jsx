import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
};

const JobCard = function (props) {
    const job = props.job;

    return (
        <Link style={linkStyle} to={`${job.position}`}>
            <div className='card'>
                <span
                    className='card__logo'
                    style={{ backgroundImage: `url(${job.logo})`, backgroundColor: `${job.logoBackground}` }}
                ></span>
                <div className='card__text-group'>
                    <div className='text-gray'>{job.postedAt}</div>
                    <div className='text-gray text-dot'>&#8226;</div>
                    <div className='text-gray'>{job.contract}</div>
                </div>
                <div className='text-bold-big'>{job.position}</div>
                <div className='text-gray'>{job.company}</div>
                <div className='text-purple'>{job.location}</div>
            </div>
        </Link>
    );
};

export default JobCard;
