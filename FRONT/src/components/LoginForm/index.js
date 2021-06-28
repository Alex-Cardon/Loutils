import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Field from './Field';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
  isOpen, 
  onSettingsToggle,
}) => {
  //console.log(isLogged)
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div
      className={isOpen ? 'login login--open' : 'login'}
    >

    <NavLink
        className={isLogged ? 'settingsPage-link settingsPage-link' : 'settingsPage-link__toggle'}
        exact
        to="/SettingsPage"
      >
        Mon compte 
    </NavLink>
      <NavLink
        className={isLogged ? 'signup-link signup-link__toggle' : 'signup-link'}
        exact
        to="/SignupPage"
      >
        
    </NavLink>
      <button
        className={isLogged ? 'button button__toggle' : 'button'}
        onClick={onSettingsToggle}
        type="button"
      >
        Connexion
    </button>
      <div className="login-form">
        {isLogged && (
          <div className="login-form-logged">
            <p className="login-form-message">
              {loggedMessage}
            </p>
            <button
              type="button"
              className="login-form-button"
              onClick={handleLogout}
            >
              Déconnexion
          </button>
          </div>
        )}
        {!isLogged && (

          <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
            <Field
              name="email"
              placeholder="Adresse Email"
              onChange={changeField}
              value={email}
            />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={changeField}
              value={password}
            />
            <button
              type="submit"
              className="login-form-button"
            >
              OK
          </button>
          </form>
        )}
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  loggedMessage: 'Connecté',
};

export default LoginForm;

/*
import { Icon } from 'semantic-ui-react'
<Icon color='red' name='window close outline' />   
<Icon color='red' name='power off' />   
*/
