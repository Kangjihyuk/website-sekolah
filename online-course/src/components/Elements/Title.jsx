import React from "react";

const Title = ({ title, style }) => {
  return (
    <h1
      className={`poppins-bold  sm:text-3xl tracking-wide text-primary   ${style} `}
    >
      {title}
    </h1>
  );
};

export default Title;
