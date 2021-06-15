import React from 'react';

import Proptypes from 'prop-types';

const adFormText = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {

  const handleChange = (evt) => {
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
      <textarea
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
};

adFormText.proptypes = {
  value: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
}

export default adFormText;
