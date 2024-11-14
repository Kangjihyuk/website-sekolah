import { Fragment } from "react";
import Index from "../Elements/Index";
import Button from "../Elements/Button";

const FromRegister = () => {
  return (
    <Fragment>
      <form action="">
        <Index
          type={"text"}
          name={"fullname"}
          text={"fullname"}
          placeholder={"insert your name here ..."}
        />
        <Index
          type={"email"}
          name={"email"}
          text={"email"}
          placeholder={"example@.gmail.com"}
        />
        <Index
          type={"password"}
          name={"password"}
          text={"password"}
          placeholder={"******"}
        />
        <Index
          type={"password"}
          name={"password"}
          text={"confirm your password"}
          placeholder={"******"}
        />
        <Button type={"submit"} buttonName={"Register"} classname="button" />
      </form>
    </Fragment>
  );
};

export default FromRegister;
