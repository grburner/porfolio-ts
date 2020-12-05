import React, { useState } from "react";
import './style.css';
import '../../global.css';
import ProjectImage from '../ProjectImage';
import ProjectIcons from '../ProjectIcons';
import { IconContext } from 'react-icons';
import data from '../../data.json';

const ProjectGroup: React.FC = () => {
  const [projectIndex, setProjectIndex] = useState<number>(1);

  const imageClickHandler = (imageIndex: number) => {
    setProjectIndex(imageIndex)
  }

  return (
    <div className={'project-container'}>
      <div></div>
      <div>
        <div className={'project-header'}>
          <h3>{'Projects'}</h3>
          <p className={'project-sub'}>{'from bootcamp, freelance, and personal projects'}</p>
        </div>
        <div className="project-images">
          <div onClick={() => imageClickHandler(0)}>
            <ProjectImage image={data.projects[0].image}/>
          </div>
          <div onClick={() => imageClickHandler(1)}>
            <ProjectImage image={data.projects[1].image}/>
          </div>
          <div onClick={() => imageClickHandler(2)}>
            <ProjectImage image={data.projects[2].image}/>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div>
        <div className={'desc-container'}>
          <h4>{data.projects[projectIndex].title}</h4>
          <h5 className={'desc-section'}>{'Description: '}</h5>
          <p>{data.projects[projectIndex].description}</p>
          <IconContext.Provider value={{ color: "#36394f", size: "3.5rem"}}>
            <ProjectIcons techs={data.projects[projectIndex].tech}/>
          </IconContext.Provider>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectGroup;