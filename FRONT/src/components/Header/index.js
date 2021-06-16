import React from 'react';

import { NavLink } from 'react-router-dom';


import logo from 'src/components/Header/loutils_noir.svg';

import './styles.scss';

const Header = () => (
  <div className="header">
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
