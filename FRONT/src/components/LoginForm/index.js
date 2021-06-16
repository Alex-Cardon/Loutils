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
  isOpen, // est-ce que les settings sont ouverts
  onSettingsToggle, // ouverture ou fermeture des settings
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div
      // si isOpen est vrai, on ajoute la classe CSS
      // settings--open
      // qui "poussera" le div depuis la droite
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
        Inscription
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
              // attention : changeField doit etre une fonction
              // qui prend 2 parametres :
              // la nouvelle valeur
              // la case a modifier (email ou password)
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
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
