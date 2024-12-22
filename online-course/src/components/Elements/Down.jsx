import React from "react";

const Down = ({ buttonId, dropdownId, course }) => {
  return (
    <div
      id={dropdownId}
      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-30 dark:bg-gray-700"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby={buttonId}
      >
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-center"
          >
            {course.map((item, index) => (
              <ul key={index}>
                <li className="poppins-bold tracking-widest hover:text-primary">
                  {item.title}
                </li>
              </ul>
            ))}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Down;
