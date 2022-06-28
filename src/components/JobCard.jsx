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
        <div className='card'>
            <span
                className='card__logo'
                style={{ backgroundImage: `url(${job.logo})`, backgroundColor: `${job.logoBackground}` }}
            ></span>
            <Link className='text-link' style={linkStyle} to={`${job.id}`} state={job.id}>
                <div className='card__text-group'>
                    <div className='text-gray'>{job.postedAt}</div>
                    <div className='text-gray text-dot'>&#8226;</div>
                    <div className='text-gray'>{job.contract}</div>
                </div>
                <div className='text-bold-big'>{job.position}</div>
                <div className='text-gray'>{job.company}</div>
            </Link>
            <div className='text-purple'>{job.location}</div>
        </div>
    );
};

export default JobCard;
