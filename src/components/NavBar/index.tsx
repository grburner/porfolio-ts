import React from "react";
import "./style.css";
import CollapsibleContent from '../CollapsibleContact';

const NavBar: React.FC = () => {

  return (
    <div className={'nav-wrapper'}>
      <nav className={'navbar'}>
        <div/>
        <ul>
          <li><p className={'navbar-item'}>ABOUT</p></li>
          <li><p className={'navbar-item'}>PROJECTS</p></li>
          <li><p className={'navbar-item'}>CONTACT</p></li>
        </ul>
      </nav>
      {/* <CollapsibleContent /> */}
    </div>
  );
};

export default NavBar;
