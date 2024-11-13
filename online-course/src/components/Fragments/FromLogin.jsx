import { Fragment } from "react";
import Index from "../Elements/Index";
import Button from "../Elements/Button";

const FromLogin = () => {
  return (
    <Fragment>
      <form action="">
        <Index
          type={"email"}
          name={"email"}
          text={"Email"}
          placeholder={"Example@.gmail.com"}
        />
        <Index
          type={"password"}
          name={"password"}
          text={"Password"}
          placeholder={"******"}
        />
        <Button type={"submit"} buttonName={"Login"} />
      </form>
    </Fragment>
  );
};

export default FromLogin;
