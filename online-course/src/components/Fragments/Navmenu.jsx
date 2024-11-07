import React from "react";
import Button from "../Elements/Button";

const NavMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Courses",
    link: "/course",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navmenu = ({ open }) => {
  return (
    <div
      className={`absolute h-[55vh] w-1/2 sm:w-1/2 bg-primary z-10  top-[72px] right-0 p-4 transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      } lg:flex lg:static lg:w-0 lg:-translate-x-[25rem] lg:-translate-y-[0.5rem] lg:p-0 lg:items-center lg:h-0 md:gap-8`}
    >
      {NavMenu.map((item, index) => (
        <ul key={index} className="mt-5">
          <li>
            <a
              href={item.link}
              className="poppins-bold tracking-widest hover:text-primary"
            >
              {item.name}
            </a>
          </li>
        </ul>
      ))}
      <Button buttonName="Started" customization="md:hidden mt-5" />
    </div>
  );
};

export default Navmenu;
