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
                    <div className='text-bold'>Compny name</div>
                    <div className='text-gray'>www.lilia.com</div>
                </div>
                <button className='btn btn-light'>Company Site</button>
            </div>
            <div className='job'>
                <div className='card__text-group'>
                    <div className='text-gray'>5h ago</div>
                    <div className='text-gray text-dot'>&#8226;</div>
                    <div className='text-gray'>Contract</div>
                </div>
                <div className='text-bold-big'>Engineer</div>
            </div>
        </div>
    );
};

export default JobPage;
