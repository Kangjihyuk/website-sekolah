import React from "react";

const Input = ({ type, name, placeholder, style, onChange, value }) => {
  return (
    <input
      type={type}
      name={name}
      aria-label={placeholder}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ${style}`}
      placeholder={placeholder}
      required
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
