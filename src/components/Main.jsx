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
            <JobCard />
        </div>
    );
};

export default Main;
