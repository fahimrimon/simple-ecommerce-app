import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";

const Navbar = () => {
  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px]";

  return (
    <div className="navbar h-[60px] shadow-md relative z-10 ">
      <div className="wrapper lg:pl-[20px] lg:pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center pl-2 pr-2">
        <div className=" left flex flex-1 items-center">
          <div className="cursor-pointer text-[16px] mobile:hidden">En</div>

          {/* Search Input */}
          <div className="SearchContainer flex border-[2px] border-solid border-lightgray rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input type="text" className="outline-none mobile:w-[50px]" placeholder="Search" />
            <Search className="text-[#8a4af3]" style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* Logo */}
        <div className="center flex-1 text-center  mobile:ml-6">
          <div className="logo font-bold mobile:text-sm">Winter Kings</div>
        </div>

        {/* Right Side */}
        <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
          <div className={style}>Register</div>
          <div className={style}>Sign In</div>
          <div className={style}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
