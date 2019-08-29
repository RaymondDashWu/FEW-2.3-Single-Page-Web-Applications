import React from 'react';

import './Project.css'

function Project({ image, title, link}) {
    return (
        <div className="Project">
            <img src={image} width="300" height="300"></img>
            <div className="ProjectDivider">
                <h3>{title}</h3>
                <a href={link}>Link</a>
            </div>
        </div>
    )
}

export default Project;