import React from 'react';
// import { useNavigate } from 'react-router-dom';

const JobPage = function (props) {
    // const navigate = useNavigate();
    // navigate(-1);
    console.log(props);

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
                <div className='job__header'>
                    <div className='job__header-text'>
                        <div className='card__text-group'>
                            <div className='text-gray'>5h ago</div>
                            <div className='text-gray text-dot'>&#8226;</div>
                            <div className='text-gray'>Full time</div>
                        </div>
                        <h1 className='text-title-very-big'>Senior Software Engineer</h1>
                        <div className='text-purple-nomargin'>United Kingdom</div>
                    </div>
                    <button className='btn'>Apply Now</button>
                </div>
                <div className='job__body'>
                    <p className='text-gray-big text-block'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore velit non assumenda, ex nulla
                        tenetur possimus aspernatur nihil consectetur minus molestias enim iusto nam praesentium
                        repellat, facere quasi dolor dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae distinctio, veniam beatae qui doloremque at facere sed accusamus culpa quaerat
                        unde minima quas quae temporibus molestiae hic voluptate laboriosam obcaecati?
                    </p>
                    <h2 className='text-title-big'>Requirements</h2>
                    <p className='text-gray-big text-block'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore velit non assumenda, ex nulla
                        tenetur possimus aspernatur nihil consectetur minus molestias enim iusto nam praesentium
                        repellat, facere quasi dolor dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae distinctio, veniam beatae qui.
                    </p>
                    <h2 className='text-title-big'>What You Will Do</h2>
                    <p className='text-block text-gray-big'>
                        Labore velit non assumenda, ex nulla tenetur possimus aspernatur nihil consectetur minus
                        molestias enim iusto nam praesentium repellat, facere quasi dolor dignissimos. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobPage;
