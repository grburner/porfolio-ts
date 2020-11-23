import React from 'react';
import './style.css'
import { DiJsBadge, DiReact, DiNodejsSmall, DiMongodb, DiCss3, DiHtml5, DiJqueryLogo } from 'react-icons/di';
import { SiMysql, SiTypescript } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsBootstrapFill } from 'react-icons/bs'

const ProjectIcons: React.FC = () => {

    return (
        <div className={'icon-group'}>
            {/* <DiJsBadge /> */}
            <DiReact />
            <DiNodejsSmall />
            <DiMongodb />
            {/* <SiMysql />
            <DiCss3 /> */}
            <DiHtml5 />
            <SiTypescript />
            {/* <AiFillGithub />
            <DiJqueryLogo />
            <BsBootstrapFill /> */}
            {/* create a parent object with each element set to false, condistionally render based on k/v value */}
        </div>

    )
};

export default ProjectIcons;