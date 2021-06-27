import React from 'react';

import Proptypes from 'prop-types';
 
const AdFormInput = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => (
  <input
    className="settings__input"
    value={value}
    name={name}
    onChange={onChange}
    type={type} required
    placeholder={placeholder}
    
  />
);
  /*const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;
  return(
    <div className="">
       <label
        htmlFor={inputId}
      >
        {placeholder}
      </label>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
       
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};*/

AdFormInput.proptypes = {
  value: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
}

export default AdFormInput;
