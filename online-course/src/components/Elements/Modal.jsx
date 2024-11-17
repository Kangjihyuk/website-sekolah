import React from "react";

const modal = (props) => {
  const { icon: Icon, title, subtitle, style } = props;
  return (
    <div
      className={`flex items-center gap-20 sm:gap-10 bg-primary/20 px-10 sm:px-5 py-4  rounded-lg ${style}`}
    >
      <Icon size={54} weight="fill" color="#02816d" />
      <div>
        <h1 className="font-bold text-nowrap">{title}</h1>
        <h2 className="font-bold text-primary text-2xl">{subtitle}</h2>
      </div>
    </div>
  );
};

export default modal;
