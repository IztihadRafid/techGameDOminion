import React from 'react';
import BreakingNews from './BreakingNews.jsx/BreakingNews';

const Header = () => {
    return (
        <div className='my-4'>
            <h1 className='text-4xl font-bold text-center'>Ultimate Gaming Arena 2024</h1>
            <BreakingNews></BreakingNews>
        </div>
    );
};

export default Header;