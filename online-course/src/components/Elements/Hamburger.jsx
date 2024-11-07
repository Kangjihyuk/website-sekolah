import React from "react";

const Hamburger = ({ handleOpen }) => {
  return (
    <label>
      <div className="w-9 h-15 cursor-pointer flex flex-col items-center justify-center sm:hidden">
        <input className="hidden peer" type="checkbox" onClick={handleOpen} />
        <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
        <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
        <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
      </div>
    </label>
  );
};

export default Hamburger;
