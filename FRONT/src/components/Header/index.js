import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from 'src/components/Header/loutils_noir.svg';

import LoginForm from 'src/components/LoginForm';

import SettingsPage from 'src/components/SettingsPage';

import './styles.scss';

const Header = () => (
  <div className="header">

<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
    <SettingsPage/>
    <LoginForm/>
    </ul>


  </div>

</nav>

    <NavLink
      className='header-navlink'
      exact
      to="/"
    >
      <img src={logo} className="header-logo" alt="Logo loutils" />
    </NavLink>
    <p>Le site de location d'outils entre particuliers</p>
  </div>

);

export default Header;
