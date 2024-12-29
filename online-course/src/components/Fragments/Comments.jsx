import React from "react";

const Comments = ({ name, comments, images, classComments }) => {
  return (
    <div className="group flex flex-col justify-start items-start gap-2 h-56 duration-500 relative rounded-lg p-4 bg-primary/90 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 w-full">
      <div
        alt="image here"
        className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
      >
        <img
          src={images}
          alt={name}
          className="w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="">
        <h2 className="text-2xl font-bold mb-2 text-gray-100">{name}</h2>
        <p className="text-gray-200 line-clamp-3 ">{comments}</p>
      </div>
      <button className="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6 animate-bounce">
        {classComments}
      </button>
    </div>
  );
};

export default Comments;
