import React from 'react';
import '../styles/Footer.css';
import linkedinIcon from '../images/icons/linked-in.png'
import githubIcon from '../images/icons/github.png'
import '../styles/Footer.css'



function Footer () {
    return (
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
            <div className="container-fluid" id='footer'>
                <a href='https://www.linkedin.com/in/luis-ramirez-54236a216/'><img src={linkedinIcon} id='icons'/></a>
                <a href='https://github.com/Luis-Ramirez21x'><img src={githubIcon} id='icons'/></a>
            </div>
            
        </nav>
    )
}

export default Footer;