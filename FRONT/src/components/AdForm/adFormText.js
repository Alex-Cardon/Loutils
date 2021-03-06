import React from 'react';

import Proptypes from 'prop-types';

const adFormText = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {

  const inputId = `field-${name}`;

  return(
    <div className="">
       <label
        htmlFor={inputId}
      >
        
      </label>
      <textarea
        // React - state
        value={value}
        onChange={onChange}
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
