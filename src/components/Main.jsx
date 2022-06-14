import React from 'react';
import '../index.scss';
import data from '../data.json';
import JobCard from './JobCard';

const Main = function () {
    const jobs = data;

    return (
        <div className='main'>
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
            <button className='btn btn-load'>Load more</button>
        </div>
    );
};

export default Main;
