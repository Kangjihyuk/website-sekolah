import { Fragment } from "react";
import Index from "../Elements/Index";
import Button from "../Elements/Button";
import { Register } from "../../api/api";

const FromRegister = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fullname: formData.get("fullname"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmpassword: formData.get("confirmpassword"),
    };
    if (data.password !== data.confirmpassword) {
      console.log("password not match");
      return;
    }
    Register(data).then((res) => {
      console.log(res);
      window.location.href = "/login";
    });
  };
  return (
    <Fragment>
      <form action="/register" method="post" onSubmit={handleClick}>
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
          name={"confirmpassword"}
          text={"confirm your password"}
          placeholder={"******"}
        />
        <Button
          type={"submit"}
          buttonName={"Register"}
          classname="button"
          onSubmit={handleClick}
        />
      </form>
    </Fragment>
  );
};

export default FromRegister;
