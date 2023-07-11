import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {apiGetCategories} from "../../services/category";
import {formatVietnameseToSlug} from "../../utils/constant";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await apiGetCategories();
      if (res?.data?.err === 0) {
        setCategories(res?.data?.res);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full h-[40px] flex items-center justify-center bg-bluePrimary text-white ">
      <div className="w-1100 h-full flex items-center text-[16px] font-semibold">
        <NavLink
          to={"/"}
          className={({isActive}) =>
            isActive
              ? "bg-redPrimary px-3 h-full flex items-center"
              : "hover:bg-redPrimary px-3 h-full flex items-center"
          }
        >
          Trang chủ
        </NavLink>
        {categories.length > 0 &&
          categories.map((item) => (
            <div
              key={item.code}
              className="h-full flex items-center justify-center"
            >
              <NavLink
                to={`${formatVietnameseToSlug(item.value)}`}
                className={({isActive}) =>
                  isActive
                    ? "bg-redPrimary px-3 h-full flex items-center"
                    : "hover:bg-redPrimary px-3 h-full flex items-center"
                }
              >
                {item.value}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
