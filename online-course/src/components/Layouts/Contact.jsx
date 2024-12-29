import { Fragment } from "react";
import Title from "../Elements/Title";
import Index from "../Elements/Index";
import Button from "../Elements/Button";
const Contact = ({ id }) => {
  return (
    <Fragment>
      <div className="container mt-14" id={id}>
        <div>
          <Title title={"Contact"} style={"text-center text-2xl"} />
        </div>
        <div className="bg-primary/50 p-4 rounded-lg mt-10 md:w-[75%] md:mx-auto">
          <Index
            type={"text"}
            name={"name"}
            text={"Full Name"}
            placeholder={"Your Full Name"}
            id={"name"}
          />
          <Index
            type={"email"}
            name={"email"}
            text={"Email"}
            placeholder={"Your Email"}
          />
          <Index
            type={"textarea"}
            name={"message"}
            text={"Message"}
            style={"h-24 placeholder:mt-10"}
          />
          <Button buttonName={"Send Message"} classname={"mt-5 w-full"} />
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
