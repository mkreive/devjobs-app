import React from 'react';
import '../index.scss';
import JobCard from './JobCard';

const Main = function () {
    return (
        <div className='main'>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <button className='btn btn-load'>Load more</button>
        </div>
    );
};

export default Main;
