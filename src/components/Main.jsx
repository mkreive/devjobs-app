import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import '../index.scss';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

const Main = function () {
    const jobs = useSelector((state) => state.filters);
    let [currPage, setCurrPage] = useState(1);
    const loadMore = function (page) {
        const jobsPerPage = 6;
        return jobs.slice(0, page * jobsPerPage);
    };

    const [loadedJobs, setLoadedJobs] = useState(loadMore(currPage));

    const loadMoreHandler = function () {
        setCurrPage(currPage++);
        setLoadedJobs(loadMore(currPage));
        console.log(currPage);
    };

    return (
        <Fragment>
            <SearchBar />
            <div className='main'>
                {loadedJobs.map((job) => (
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
