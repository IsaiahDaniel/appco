import React from 'react';
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.webp";

import "./Header.css";

const Header = () => {
  return (
    <header className={`header`}>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="appco" />
            </div>

            <ul className="header__nav">
                <li className="header__navLink"><NavLink to="/">Home</NavLink></li>
                <li className="header__navLink"><NavLink to="/features">Features</NavLink></li>
                <li className="header__navLink"><NavLink to="/services">Services</NavLink></li>
            </ul>
        </div>
    </header>
  )
}

export default Header;