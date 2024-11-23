import { Fragment, useState } from "react";
import Index from "../Elements/Index";
import Button from "../Elements/Button";
import { Register } from "../../api/api";
import Swal from "sweetalert2";
const FromRegister = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmpassword } = register;
    if (password !== confirmpassword) {
      console.log("password not match");
      return;
    }
    try {
      await Register({ username, email, password, confirmpassword });
      Swal.fire({
        title: "success",
        text: "You have registered successfully!",
        icon: "success",
        confirmButtonText: "register success",
      });
      setRegister({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      console.log("register success");
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "error",
        text: err.response?.data?.errors || "Unknown error occurred",
        icon: "error",
        confirmButtonText: "cool",
      });
    }
  };

  return (
    <Fragment>
      <form action="/register" method="post" onSubmit={handleClick}>
        <Index
          type={"text"}
          name={"username"}
          text={"username"}
          placeholder={"insert your name here ..."}
          value={register.username}
          onChange={handleChange}
        />
        <Index
          type={"email"}
          name={"email"}
          text={"email"}
          placeholder={"example@.gmail.com"}
          value={register.email}
          onChange={handleChange}
        />
        <Index
          type={"password"}
          name={"password"}
          text={"password"}
          placeholder={"******"}
          value={register.password}
          onChange={handleChange}
        />
        <Index
          type={"password"}
          name={"confirmpassword"}
          text={"confirm your password"}
          placeholder={"******"}
          value={register.confirmpassword}
          onChange={handleChange}
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
