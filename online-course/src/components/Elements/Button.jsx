import React from "react";

const Button = (props) => {
  const { buttonName, customization, classname, type, handleClick } = props;
  return (
    <div className={`${customization}`}>
      <button
        type={type}
        onClick={handleClick}
        className={`cursor-pointer transition-all bg-primary text-white px-6 py-2 rounded-lg border-primary border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  ${classname}`}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
