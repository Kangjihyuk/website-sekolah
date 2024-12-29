import React from "react";
import Button from "../Elements/Button";
import Desc from "../Elements/Decs";
import Title from "../Elements/Title";
const OurBlog = ({ images, title, desc, handleClick, isOpen, style }) => {
  return (
    <div
      className={`flex flex-col justify-center gap-2 bg-neutral-50 rounded-lg shadow p-2 [box-shadow_0_0_15px_black] ${style} ${
        !isOpen ? "flex flex-col justify-between" : ""
      }`}
    >
      <div className="flex gap-2">
        <img
          className="bg-neutral-500 w-24 h-24 shrink-0 rounded-lg"
          src={images}
          alt={title}
          loading="lazy"
        />
        <div className="flex flex-col">
          <Title title={title} style={"line-clamp-1 md:text-xl lg:text-lg"} />
          <Desc
            desc={desc}
            style={`${isOpen ? "line-clamp-0" : "line-clamp-3"}  `}
          />
        </div>
      </div>
      <Button
        buttonName={"read-more"}
        classname={"w-full"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default OurBlog;
