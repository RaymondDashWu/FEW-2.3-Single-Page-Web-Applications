import React from 'react';
import Project from './Project';

import './PageContent.css';


function PageContent() {
    return (
    <div className="PageContent">
        <Project title="Tetris Dots" image="images/logo192.png" link="#" />
        <Project title="Zombie Server" image="images/logo192.png" link="#" />
        <Project title="Amazing Colors" image="images/logo192.png" link="#" />
        <Project title="Flip Toggle" image="images/logo192.png" link="#" />
        <Project title="121 Second St" image="images/logo192.png" link="#" />
        <Project title="Slide Shows" image="images/logo192.png" link="#" />
    </div>
    )
}

export default PageContent;