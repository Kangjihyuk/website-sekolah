import React from "react";

const DropDownBtn = ({ buttonId, dropdownId, text }) => {
  return (
    <button
      id={buttonId}
      data-dropdown-toggle={dropdownId}
      data-dropdown-trigger="hover"
      className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary hover:scale-y-110 transition-all sm:px-6 lg:py-[1rem] xl:px-[2.5rem]"
      type="button"
    >
      {text}
      <svg
        className="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
  );
};

export default DropDownBtn;
