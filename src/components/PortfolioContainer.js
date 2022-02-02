import React, { useState } from 'react';

import Footer from './Footer';
import Header from './Header';


import About from './pages/Project';
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from "./pages/Contact";

function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <Footer/>
        </div>
    )
}

export default PortfolioContainer;

