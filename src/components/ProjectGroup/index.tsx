import React, { useState } from "react";
import './style.css';
import '../../global.css';
import ProjectImage from '../ProjectImage';
import ProjectIcons from '../ProjectIcons';
import { IconContext } from 'react-icons';

const ProjectGroup: React.FC = () => {
  const [projectName, setProjectName] = useState()

  return (
    <div className={'project-container'}>
      <div></div>
      <div>
        <div className={'project-header'}>
          <h3>{'Projects'}</h3>
          <p className={'project-sub'}>{'from bootcamp, freelance, and personal projects'}</p>
        </div>
        <div className="project-images">
          <ProjectImage />
          <ProjectImage />
          <ProjectImage />
        </div>
      </div>
      <div></div>
      <div></div>
      <div>
        <div className={'desc-container'}>
          <h4>{projectName ? projectName : 'DiBruno Wine Dept Dash Board'}</h4>
          <h5 className={'desc-section'}>{'Description: '}</h5>
          <p>{'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}</p>
          <IconContext.Provider value={{ color: "#36394f", size: "3.5rem"}}>
            <ProjectIcons />
          </IconContext.Provider>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectGroup;