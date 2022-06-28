import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import '../index.scss';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

const Main = function () {
    const imagePerRow = 6;
    const jobs = useSelector((state) => state.filters);
    const [next, setNext] = useState(imagePerRow);
    const loadMoreHandler = () => {
        setNext(next + imagePerRow);
    };

    return (
        <Fragment>
            <SearchBar />
            <div className='main'>
                {jobs?.slice(0, next)?.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
            {next < jobs?.length && (
                <button className='btn btn-load' onClick={loadMoreHandler}>
                    Load more
                </button>
            )}
        </Fragment>
    );
};

export default Main;
