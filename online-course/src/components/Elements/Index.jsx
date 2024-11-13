import React from "react";
import Label from "./Label";
import Input from "./Input";

const Index = ({ name, text, type, placeholder }) => {
  return (
    <div>
      <Label type={name} text={text} />
      <Input type={type} placeholder={placeholder} id={name} />
    </div>
  );
};

export default Index;
