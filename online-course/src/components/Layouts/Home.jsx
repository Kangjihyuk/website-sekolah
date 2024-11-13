import { Fragment, useEffect, useState } from "react";
import Desc from "../Elements/Decs";
import Title from "../Elements/Title";
import Down from "../Elements/Down";
import Button from "../Elements/Button";
import { getApi } from "../../api/api";
import DropDownBtn from "../Elements/DropDownBtn";
import Input from "../Elements/Input";
import Image from "../Elements/image";

const Home = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getApi();
        setPost(response.data);
        console.log(response);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, []);
  console.log({ "api get": post });

  return (
    <Fragment>
      <div className="bg-primary/40 h-[100vh] flex flex-col sm:h-[115vh] md:h-[110vh] lg:h-[127vh] xl:h-[140vh]">
        <div className="container flex flex-col items-center">
          <Title title="Learn best Online Courses" />
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
            post={post}
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
