import React from 'react';
import '../styles/Footer.css';

const styles = {
    footerStyles:{
        color:'blue',
    }
}

function Footer () {
    return (
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
            <div class="container-fluid">
                <a style={styles.footerStyles}class="navbar-brand" href="/">Fixed bottom</a>
            </div>
        </nav>
    )
}

export default Footer;