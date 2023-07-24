import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {menuSidebar} from "../../utils/constant";
import {NavLink} from "react-router-dom";
import icons from "../../utils/icons";
import {logout} from "../../store/action/authAction";

const {ImExit} = icons;

const active =
  "py-2 border-b border-l-greyPrimary last:border-none font-semibold text-hover flex items-center gap-2 ";
const notActive =
  "py-2 border-b border-l-greyPrimary last:border-none font-semibold text-bluePrimary hover:underline flex items-center gap-2 cursor-pointer";

const Sidebar = () => {
  const dispatch = useDispatch();

  const {currentUserData} = useSelector((state) => state.user);

  return (
    <div className="w-[256px] flex-none p-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 ">
          <img
            src="https://api-private.atlassian.com/users/d4a1567a7fb3b33b05ee3d965080ee6a/avatar"
            alt=""
            className="w-8 h-8 object-cover rounded-full"
          />
          <div className="flex flex-col ">
            <span className="font-bold">{currentUserData?.name}</span>
            <small>{currentUserData?.phone}</small>
          </div>
        </div>
        <span className="text-[14px]">
          Mã thành viên:{" "}
          <span className="font-semibold">
            {currentUserData?.id?.split("-")[0]}
          </span>
        </span>
      </div>
      <div className="mt-5">
        {menuSidebar.map((item) => (
          <NavLink
            key={item.id}
            to={item?.path}
            className={({isActive}) => (isActive ? active : notActive)}
          >
            {item.icon}
            {item.text}
          </NavLink>
        ))}
        <span className={notActive} onClick={() => dispatch(logout())}>
          <ImExit />
          Thoát
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
