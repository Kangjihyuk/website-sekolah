import { Fragment, useState } from "react";
import Index from "../Elements/Index";
import Button from "../Elements/Button";
import { Login } from "../../api/api";
import { useNavigate } from "react-router-dom";
const FromLogin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = login;

    try {
      const data = await Login({ email, password });
      console.log("login success", data);
      navigate("/");
    } catch (err) {
      throw err.response?.data?.errors || { err: "Unknown error occurred" };
    }
  };

  return (
    <Fragment>
      <form action="/login" method="post" onSubmit={handleClick}>
        <Index
          type={"email"}
          name={"email"}
          text={"Email"}
          placeholder={"Example@.gmail.com"}
          onChange={handleChange}
          value={login.email}
        />
        <Index
          type={"password"}
          name={"password"}
          text={"Password"}
          placeholder={"******"}
          onChange={handleChange}
          value={login.password}
        />
        <Button
          type={"submit"}
          buttonName={"Login"}
          classname="button"
          onSubmit={handleClick}
        />
      </form>
    </Fragment>
  );
};

export default FromLogin;
