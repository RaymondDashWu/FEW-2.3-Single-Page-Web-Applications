import React from 'react';
import Project from './Project';

import './PageContent.css';

const projects = [
    {title:"Tetris Dots", image: "images/logo192.png", link: "#" }, 
    {title:"Zombie Server", image: "images/logo192.png", link: "#" },
    {title:"Amazing Colors", image: "images/logo192.png", link: "#" },
    {title:"Flip Toggle", image: "images/logo192.png", link: "#" },
    {title:"121 Second St", image: "images/logo192.png", link: "#" },
    {title:"Slide Shows", image: "images/logo192.png", link: "#" } 
]

function PageContent() {
    return (
    <div className="PageContent">
        {(projects && projects.map(({ title, image, link}) => {
            return <Project title={title} image={image} link={link} />
        })) || <div>Project not found</div>}
    </div>
    )
}

export default PageContent;