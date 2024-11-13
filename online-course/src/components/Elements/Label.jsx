import React from "react";

const Label = ({ type, text }) => {
  return (
    <label
      htmlFor={type}
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      {text}
    </label>
  );
};

export default Label;
