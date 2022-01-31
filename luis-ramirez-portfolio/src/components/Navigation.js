import React from 'react';
import '../styles/Navbar.css'

function Navigation ({ currentPage, handlePageChange }) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
          aria-current="page" 
          href="about"
          onClick={() => handlePageChange('About')}
          >About Me</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          >Portfolio</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          >Contact</a>
        </li>
        <li className="nav-item">
          <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          >Resume</a>
        </li>
      </ul>
      <span className="navbar-text">
        <i>~lets create</i>
      </span>
    </div>
  </div>
</nav>
    )
}

export default Navigation;