import React from 'react';
import './style.css';

const ProjectImage: React.FC<{image: string}> = (props) => {
    return (
    <div>
        <img src={props.image}/>
    </div>
    );
};

export default ProjectImage;