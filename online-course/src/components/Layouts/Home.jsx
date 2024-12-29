import { Fragment } from "react";
import Desc from "../Elements/Decs";
import Title from "../Elements/Title";
import Down from "../Elements/Down";
import Button from "../Elements/Button";
import DropDownBtn from "../Elements/DropDownBtn";
import Input from "../Elements/Input";
import Image from "../Elements/image";

const Home = ({ course, id }) => {
  return (
    <Fragment>
      <div className="bg-primary/40 h-full flex flex-col " id={id}>
        <div className="container flex flex-col items-center">
          <Title
            title="Learn best Online Courses"
            style={
              "mt-5 lg:mt-32 text-xl sm:text-2xl md:text-3xl lg:text-5xl xl-text-6xl"
            }
          />
          <Desc desc="48,000 online courses for you" />
        </div>
        <div className="flex justify-center gap-1 mt-5 items-center container sm:mt-5 md:mt-10">
          <DropDownBtn
            dropdownId="dropdown-hover"
            buttonId="dropdown-hover-button"
            text="Category"
          />
          <Down
            dropdownId="dropdown-hover"
            buttonId="dropdown-hover-button"
            course={course}
          />
          <div>
            <Input
              type="search"
              placeholder="What do you want to learn?"
              id="course_search"
              style="py-[0.6rem] pr-8 sm:pr-[7rem] sm:pl-[1rem] md:pr-[10rem] lg:py-[1rem] lg:pr-[19rem] xl:pr-[25rem]"
            />
          </div>
          <Button
            buttonName="Search"
            classname="sm:px-[2rem] lg:px-[2.5rem] lg:py-[0.7rem]"
          />
        </div>
        <Image src="../../../images/assets/hero.png" alt={"hero image"} />
      </div>
    </Fragment>
  );
};

export default Home;
