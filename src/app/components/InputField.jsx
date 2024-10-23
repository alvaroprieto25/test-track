// src/app/components/InputField.jsx
import React from 'react';

const InputField = ({ type, value, onChange, placeholder, maxLength, required, minLength }) => {
  return (
    <input
      className='input-field'
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      required={required}
    />
  );
};

export default InputField;
