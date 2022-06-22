import React, { useState, Fragment } from 'react';
import '../index.scss';
import data from '../data.json';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

const Main = function () {
    const allJobs = data;
    const [jobs, setJobs] = useState(allJobs);

    const filterHandler = function (props) {
        const filteredByTime = props;
        setJobs(filteredByTime);
    };

    const loadMoreHandler = function () {
        console.log('load more');
    };

    return (
        <Fragment>
            <SearchBar onSearch={filterHandler} currentJobs={jobs} />
            <div className='main'>
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
                {jobs.length > 6 && (
                    <button className='btn btn-load' onClick={loadMoreHandler}>
                        Load more
                    </button>
                )}
            </div>
        </Fragment>
    );
};

export default Main;
