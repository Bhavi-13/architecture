import React, { useState } from 'react';
import './menu.scss';
import {NavLink} from 'react-router-dom'
import logo from '../../Components/assets/images/fvt__1_.png'


function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="header">
      <div className={`navBar ${isMenuOpen ? 'active' : ''}`}>
        <div className="logo">
          <img
            src={logo}
            alt="no image"
            width={120}
            height={120}
          />
        </div>
        <a href="#" className="toggle-btn" onClick={toggleMenu}>
            <i class="bi bi-list fa-lg" ></i>
        </a>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>SERVICES</NavLink>
            </li>
            <li>
              <NavLink to={"/gallery"}>GALLERY</NavLink>
            </li>
            <li>
              <NavLink to={"/career"}>CAREER</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>CONTACTS</NavLink>
            </li>
          </ul>
        </div>
        <div className="search">
          <i className="bi bi-search"></i>
        </div>
      </div>
    </div>
  );
}

export default Menu;

