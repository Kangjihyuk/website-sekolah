import React from "react";
import Label from "./Label";
import Input from "./Input";

const Index = ({ name, text, type, placeholder, value, onChange, style }) => {
  return (
    <div className="mt-4">
      <Label htmlFor={name} text={text}></Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        style={style}
      />
    </div>
  );
};

export default Index;
