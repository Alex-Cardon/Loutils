import React from 'react';

import { NavLink } from 'react-router-dom';

import LoginForm from 'src/containers/LoginForm';

import logo from 'src/components/Header/loutils_noir.svg';

import { Icon } from 'semantic-ui-react';
import './styles.scss';

const Header = ({ isLogged, loggedMessage }) => (
  <div className="header">
  <LoginForm />
    <nav role="navigation">
      <div id="menuToggle">

        <input id="input" type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <li>
            {isLogged && (
              <div className="login-form-logged">
                <p className="login-form-message">
                  {loggedMessage}
                </p>
              </div>
            )}

          </li>
          <li>
            <NavLink
              className='home'
              exact
              to="/"
            >
              <Icon color='red' name='home'  />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isLogged ? 'signup-link signup-link__toggle' : 'signup-link'}
              exact
              to="/SignupPage"
            >
              S'inscrire
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isLogged ? 'settingsPage-link settingsPage-link' : 'settingsPage-link__toggle'}
              exact
              to="/Messagerie"
            >
              Ma messagerie
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isLogged ? 'settingsPage-link settingsPage-link' : 'settingsPage-link__toggle'}
              exact
              to="/Announcements"
            >
              Mes annonces
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isLogged ? 'settingsPage-link settingsPage-link' : 'settingsPage-link__toggle'}
              exact
              to="/Profil"
            >
              Mon profil
            </NavLink>
          </li>

          <li>
            <a href="mailto:site.loutils@gmail.com" >Contactez-nous !</a>
          </li>
          <li>


          </li>
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
