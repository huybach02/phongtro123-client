import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {formatVietnameseToSlug} from "../../utils/constant";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../store/action/appAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="w-full h-[40px] flex items-center justify-center bg-bluePrimary text-white ">
      <div className="w-1100 h-full flex items-center text-[16px] font-semibold">
        <NavLink
          to={""}
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
