import { Fragment } from "react";
import Title from "../Elements/Title";
import Desc from "../Elements/Decs";
import { BiUser } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Cart = ({ children, style }) => {
  return (
    <Fragment>
      <div
        className={`bg-white mt-5 rounded-xl [box-shadow:0_0_20px_rgba(0,0,0,0.1)] ${style}`}
      >
        {children}
      </div>
    </Fragment>
  );
};

const CartImage = ({ images, alt, price }) => {
  return (
    <div className="relative rounded-xl">
      <img
        src={images}
        alt={alt}
        loading="lazy"
        className="rounded-t-xl w-full h-[250px] object-cover border-2 border-primary p-2"
      />
      <div className="absolute bottom-2 left-5 flex  justify-between items-center w-[90%]">
        <div className="font-bold bg-[#EB5B00] px-2 tracking-wide py-1 rounded-lg text-white transition-all ">
          ${" "}
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "USD",
          })}
        </div>
        <div className="flex">
          <CartStar />
          <CartStar />
          <CartStar />
          <CartStar />
          <CartStar />
        </div>
      </div>
    </div>
  );
};

const CartTitle = ({ title, desc, user, duration }) => {
  return (
    <div className="p-5 group">
      <Title
        title={title}
        style="mt-0 text-black md:text-xl lg:text-xl  line-clamp-1"
      />
      <Desc
        desc={desc}
        style="line-clamp-6 text-justify  hover:transform hover:ease-in duration-500 md:text-lg lg:text-xl "
      />
      <hr className="my-4 h-[2px] bg-gray-200" />
      <div className="flex justify-between mt-5">
        <p className="text-primary flex  items-center gap-2">
          {" "}
          <BiUser />
          {user}
        </p>
        <p className="text-primary flex items-center gap-2">
          {" "}
          <FaRegClock />
          {duration}
        </p>
        <p className="text-primary flex items-center gap-2">
          {" "}
          <MdOutlineBookmarkAdd />
          {"Lectures"}
        </p>
      </div>
    </div>
  );
};

const CartStar = () => {
  return (
    <svg
      className="w-4 h-4 text-yellow-300 ms-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};

Cart.CartImage = CartImage;
Cart.CartTitle = CartTitle;
export default Cart;
