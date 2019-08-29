import React from 'react';

import './Footer.css';


function Footer() {
    return (
    <div className="Footer">
        &copy; Raymond Wu {new Date().getFullYear()}
    </div>
    )
}

export default Footer;