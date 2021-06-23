import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ 
  inputValue, 
  onInputChange, 
  onMessageSubmit }) => (
    <form className="form" onSubmit={onMessageSubmit}>
      <input
        className="form__input"
        placeholder="Saisissez votre message"
        type="text" required
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="form__submit" type="submit">
        Envoyer
      </button>
    </form>
);

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onMessageSubmit: PropTypes.func.isRequired,
};

export default Form;
