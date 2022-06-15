import React from 'react';
// import { useNavigate } from 'react-router-dom';

const JobPage = function (props) {
    // const navigate = useNavigate();
    // navigate(-1);

    return (
        <div className='main-job'>
            <div className='banner'>
                <div className='banner-logo'></div>
                <div className='banner__info-company'>
                    <h2 className='text-title-big'>Compny name</h2>
                    <div className='text-gray-big'>www.lilia.com</div>
                </div>
                <button className='btn btn-light'>Company Site</button>
            </div>
            <div className='job'>
                <div className='card__text-group'>
                    <div className='text-gray'>5h ago</div>
                    <div className='text-gray text-dot'>&#8226;</div>
                    <div className='text-gray'>Contract</div>
                </div>
                <h1 className='text-title-very-big'>Engineer</h1>
            </div>
        </div>
    );
};

export default JobPage;
