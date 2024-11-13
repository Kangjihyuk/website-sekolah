import React from "react";

const Image = ({ src, alt }) => {
  return (
    <img
      src={src}
      loading="lazy"
      alt={alt}
      className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] last: mx-auto mt-10 md:mt-5 "
    />
  );
};

export default Image;
