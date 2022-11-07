import React from "react";
import { ApiCategories } from "../../apiComponents/CategoyApi";
import Category from "../Category";
const Categories = () => {
  return (
    <div className="lg:flex justify-between items-center p-5 flex-wrap lg:mb-16 lg:mt-8 ">
      {ApiCategories.map((category, index) => (
        <Category item={category} key={index} />
      ))}
    </div>
  );
};

export default Categories;
