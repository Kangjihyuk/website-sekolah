import React from "react";

const Desc = ({ desc, style, isOpen }) => {
  return (
    <p
      className={`mt-2 text-md poppins-light sm:mt-4 sm:text-lg md:text-xl  lg:text-2xl lg:mt-5 ${style} ${isOpen} `}
    >
      {desc}
    </p>
  );
};

export default Desc;
