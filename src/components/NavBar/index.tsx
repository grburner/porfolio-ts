import React from "react";
import "./style.css";

const NavBar: React.FC = () => {
  return (
    <div className={'nav-wrapper'}>
      <nav className={'navbar'}>
        <div></div>
        <ul>
          <li><p className={'navbar-item'}>About</p></li>
          <li><p className={'navbar-item'}>Projects</p></li>
          <li><p className={'navbar-item'}>Contact</p></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
