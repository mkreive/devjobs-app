import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import '../index.scss';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

const Main = function () {
    const jobs = useSelector((state) => state.filters);

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
            </div>
            <button className='btn btn-load' onClick={loadMoreHandler}>
                Load more
            </button>
        </Fragment>
    );
};

export default Main;
