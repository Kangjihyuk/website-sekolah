import React from "react";
import Label from "./Label";
import Input from "./Input";

const Index = ({ name, text, type, placeholder, value, onChange }) => {
  return (
    <div className="mt-4">
      <Label type={name} text={text} />
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Index;
