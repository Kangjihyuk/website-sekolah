import { Fragment } from "react";
import FromLogin from "../components/Fragments/FromLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const login = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FromLogin />
    </AuthLayout>
  );
};

export default login;
