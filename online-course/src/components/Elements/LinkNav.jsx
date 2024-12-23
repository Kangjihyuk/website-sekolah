import React from "react";

const LinkNav = ({ link, name, style }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    console.log(link);
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("target not found");
    }
  };
  return (
    <ul className="mt-5">
      <li>
        <a
          href={link}
          onClick={handleScroll}
          className={`poppins-bold tracking-widest  relative after:content-[''] after:origin-right after:absolute after:bg-white after:h-[3px]  after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 hover:after:w-full after:translate-y-[5px] ${style}`}
        >
          {name}
        </a>
      </li>
    </ul>
  );
};

export default LinkNav;
