import React from "react";
import "./style.css";

const NavBar: React.FC = () => {
  return (
    <div className={'nav-wrapper'}>
      <nav className={'navbar'}>
        <div></div>
        <ul>
          <li className={'navbar-item'}><p>About</p></li>
          <li className={'navbar-item'}><p>Projects</p></li>
          <li className={'navbar-item'}><p>Contact</p></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
