import React from "react";
import Navbar from "../Public/Navbar";

const HeaderSystem = () => {
  return (
    <div className="w-full flex flex-none h-[40px]">
      <div className="flex items-center justify-center font-bold bg-bluePrimary text-white text-[18px] cursor-pointer w-[250px] flex-none">
        Phongtro123.com
      </div>
      <div className="flex-auto">
        <Navbar isSystem />
      </div>
    </div>
  );
};

export default HeaderSystem;
