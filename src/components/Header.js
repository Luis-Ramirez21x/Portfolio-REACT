import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header({currentPage, handlePageChange}) {
    return (
        <header>
            <h1>Luis Ramirez - Full Stack Developer {"{}"};</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
};

export default Header;