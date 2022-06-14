import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import JobPage from './components/JobPage';
import Main from './components/Main';

const App = function () {
    return (
        <div className='app'>
            <Header />

            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Main />} />
                <Route path='/home/*' element={<JobPage />} />
            </Routes>
        </div>
    );
};

export default App;
