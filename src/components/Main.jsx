import React, { Fragment } from 'react';
import '../index.scss';
import data from '../data.json';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

const Main = function () {
    const jobs = data;
    const loadMoreHandler = function () {
        console.log('load more');
    };

    return (
        <Fragment>
            <SearchBar />
            <div className='main'>
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
                <button className='btn btn-load' onClick={loadMoreHandler}>
                    Load more
                </button>
            </div>
        </Fragment>
    );
};

export default Main;
