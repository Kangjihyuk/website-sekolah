import React from "react";
import FromRegister from "../components/Fragments/FromRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const register = () => {
  return (
    <AuthLayout type="register" title="Register">
      <FromRegister />
    </AuthLayout>
  );
};

export default register;
