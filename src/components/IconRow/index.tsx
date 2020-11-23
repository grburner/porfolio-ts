import React from 'react';
import './style.css'

import { DiJsBadge } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { SiMysql } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { DiJqueryLogo } from 'react-icons/di';
import { BsBootstrapFill } from 'react-icons/bs'

const IconRow: React.FC = () => {
    return (
        <div className={'icon-group'}>
            <DiJsBadge /> 
            <DiReact />
            <DiNodejsSmall />
            <DiMongodb />
            <SiMysql />
            <DiCss3 />
            <DiHtml5 />
            <SiTypescript />
            <AiFillGithub />
            <DiJqueryLogo />
            <BsBootstrapFill />
        </div>

    )
};

export default IconRow;

