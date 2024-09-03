import React from 'react';
import BreakingNews from './BreakingNews.jsx/BreakingNews';
 import "./style.css"
const Header = () => {
    return (
        <div className='my-4'>
            <h1 className='animated-header font-doppio text-6xl font-bold text-center'>Ultimate Gaming Arena 2024</h1>
            <BreakingNews></BreakingNews>
        </div>
    );
};

export default Header;