import React from 'react';
import { Link } from 'react-router-dom';

import './PageHeader.css';


function PageHeader() {
    return (
        <div className="PageHeader">
            <header>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <h1>TODO style this all</h1>
            </header>
        </div>
    )
}

export default PageHeader;