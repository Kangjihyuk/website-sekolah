import React from "react";

const Title = ({ title }) => {
  return (
    <h1
      className={`mt-5 poppins-bold text-xl sm:text-3xl sm:mt-10 tracking-wide text-primary md:text-4xl md:mt-16 lg:text-6xl lg:mt-32`}
    >
      {title}
    </h1>
  );
};

export default Title;
