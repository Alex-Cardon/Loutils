import React from 'react';

import { NavLink } from 'react-router-dom';

import LoginForm from 'src/components/LoginForm'
import logo from 'src/components/Header/loutils_noir.svg';

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
      <a href="/SignupPage"><li>Inscription</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
    < LoginForm />

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
