import React from 'react';
import { useLocation } from 'react-router-dom';

const JobPage = function (props) {
    const location = useLocation();
    const company = location.state;

    return (
        <div className='main-job'>
            <div className='banner'>
                <div
                    className='banner-logo'
                    style={{ backgroundImage: `url(${company.logo})`, backgroundColor: `${company.logoBackground}` }}
                ></div>
                <div className='banner__info-company'>
                    <h2 className='text-title-big'>{company.position}</h2>
                    <div className='text-gray-big'>{company.company}</div>
                </div>
                <a href={company.website} className='btn btn-light'>
                    Company Site
                </a>
            </div>
            <div className='job'>
                <div className='job__header'>
                    <div className='job__header-text'>
                        <div className='card__text-group'>
                            <div className='text-gray'>{company.postedAt}</div>
                            <div className='text-gray text-dot'>&#8226;</div>
                            <div className='text-gray'>{company.contract}</div>
                        </div>
                        <h1 className='text-title-very-big'>{company.position}</h1>
                        <div className='text-purple-nomargin'>{company.location}</div>
                    </div>
                    <a href={company.apply} className='btn'>
                        Apply Now
                    </a>
                </div>
                <div className='job__body'>
                    <p className='text-gray-big text-block'>{company.description}</p>
                    <h2 className='text-title-big'>Requirements</h2>
                    <div className='text-gray-big text-block'>
                        {company.requirements.content}
                        <div className='text-empty-line'></div>
                        {company.requirements.items &&
                            company.requirements.items.map((item) => {
                                return (
                                    <div className='text-list' key={Math.random() * 100}>
                                        <span className='text-star'>*</span>
                                        <span className='text-gray-big'>{item}</span>
                                    </div>
                                );
                            })}
                    </div>
                    <h2 className='text-title-big'>What You Will Do</h2>
                    <div className='text-block text-gray-big'>
                        {company.role.content}
                        <div className='text-empty-line'></div>
                        {company.role.items &&
                            company.role.items.map((item) => (
                                <div className='text-list' key={company.role.items.indexOf(item) + 1}>
                                    <span className='text-star'>{company.role.items.indexOf(item) + 1}</span>
                                    <span className='text-gray-big'>{item} </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <footer className='main-footer'>
                <div className='banner'>
                    <div className='banner__info-company'>
                        <h2 className='text-title-big'>{company.position}</h2>
                        <div className='text-gray-big'>{company.company}</div>
                    </div>
                    <a href={company.apply} className='btn'>
                        Apply Now
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default JobPage;
