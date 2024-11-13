import React from "react";

const Input = ({ type, id, placeholder, style }) => {
  return (
    <input
      type={type}
      id={id}
      aria-label={placeholder}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ${style}`}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
