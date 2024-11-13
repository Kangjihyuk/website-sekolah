import { useState } from "react";
import Icon from "../Elements/Icon";
import Hamburger from "../Elements/Hamburger";
import NavMenu from "../Fragments/Navmenu";
import Button from "../Elements/Button";

const Navbar = () => {
  const scroll = () => {
    if (window.scrollY > 0) {
      document.querySelector(".item").classList.add("translate-x-full");
    } else {
      document.querySelector(".item").classList.remove("translate-x-0");
    }
  };

  window.onscroll = () => {
    scroll();
    const peer = document.querySelector(".peer");
    peer.checked = false;
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center pl-[2rem] pr-[2rem] py-[1rem] justify-between relative bg-primary/30 lg:fixed lg:w-full z-10 overflow">
      <Icon />
      <Hamburger handleOpen={handleOpen} />
      <NavMenu open={open} scroll={scroll} />
      <Button buttonName="Get Started" customization="hidden sm:block" />
    </div>
  );
};

export default Navbar;
