import React from "react";

const Category = ({item}) => {
    const {src, title} = item;
  return (
    <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
      <img src={src} className="w-[100%]" alt="category_img" />
      <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white font-medium text-[30px]">{title}</h2>
        <buttton className="btn cursor-pointer">See more</buttton>
      </div>
    </div>
  );
};

export default Category;
