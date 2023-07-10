import React from "react";
import {NavLink} from "react-router-dom";

const nav = [
  {
    name: "Trang chu",
    path: "",
  },
  {
    name: "Cho thue phong tro",
    path: "cho-thue-phong-tro",
  },
  {
    name: "Nha cho thue",
    path: "nha-cho-thue",
  },
  {
    name: "Cho thue can ho",
    path: "cho-thue-can-ho",
  },
  {
    name: "Cho thue mat bang",
    path: "cho-thue-mat-bang",
  },
];

const Navbar = () => {
  return (
    <div className="w-screen min-h-[40px] flex items-center justify-center bg-bluePrimary text-white mb-3">
      <div className="w-1100 h-full flex items-center text-[16px] font-semibold">
        {nav.length > 0 &&
          nav.map((item, index) => (
            <div
              key={index}
              className="h-full flex items-center justify-center"
            >
              <NavLink
                to={item.path}
                className={({isActive}) =>
                  isActive
                    ? "bg-redPrimary px-3 h-full flex items-center"
                    : "hover:bg-redPrimary px-3 h-full flex items-center"
                }
              >
                {item.name}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
