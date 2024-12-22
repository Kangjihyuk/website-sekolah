import React from "react";

const Desc = ({ desc, style }) => {
  return (
    <p
      className={`mt-2 text-md poppins-light sm:mt-4 sm:text-lg md:text-xl md:mt-6 lg:text-2xl lg:mt-5 ${style}`}
    >
      {desc}
    </p>
  );
};

export default Desc;
