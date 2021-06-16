import React from 'react';
import PropTypes from 'prop-types';

//! 2 le sous composant permet de gérer l'imput et de pouvoir le multiplier en fonction 
//! du besoin direction le container SignupPage et dans le fichier index 

const ParamsField = ({
  value,
  onChange,
  placeholder,
  type,
}) => (
  <input
    className="settings__input"
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />
);

ParamsField.propTypes = {
  // ⬇️ proviennent de redux ⬇️
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // ⬇️ ownProps ⬇️
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ParamsField;
