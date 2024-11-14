import React from "react";
import Label from "./Label";
import Input from "./Input";

const Index = ({ name, text, type, placeholder }) => {
  return (
    <div className="mt-4">
      <Label type={name} text={text} />
      <Input type={type} placeholder={placeholder} id={name} />
    </div>
  );
};

export default Index;
