import Button from "../Elements/Button";
import LinkNav from "../Elements/LinkNav";

const NavMenu = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Courses",
    link: "#course",
  },
  {
    name: "Blog",
    link: "#blog",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "tugas",
    link: "/tugas",
  },
];

const Navmenu = ({ open, scroll }) => {
  return (
    <div
      className={`absolute h-[65vh] w-1/2 sm:w-1/2 bg-primary z-10  top-[72px] right-0 p-4 transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      } md:flex md:static md:w-0 md:-translate-x-[20rem] md:-translate-y-[0.5rem] md:p-0 md:items-center md:h-0 md:gap-8 item`}
      scroll={scroll}
    >
      {NavMenu.map((item, index) => (
        <LinkNav key={index} {...item} style="hover:text-white poppins-bold" />
      ))}
      <Button
        buttonName="Started"
        customization="md:hidden mt-5"
        classname="bg-orange-500 border-orange-500"
      />
    </div>
  );
};

export default Navmenu;
