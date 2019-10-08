import React from 'react';
import { Link } from 'react-router-dom';

import './PageHeader.css';


function PageHeader() {
    return (
        <div className="PageHeader">
            <header>
                <h1>Style Transfer</h1>
                <ul className="HeaderRightAlign">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {/* <h1>TODO style this all</h1> */}
                
            </header>
        </div>
    )
}

export default PageHeader;