import React, {useCallback, useEffect, useRef, useState} from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import icons from "../../utils/icons";
import {useNavigate, Link, useSearchParams} from "react-router-dom";
import {path} from "../../utils/constant";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../../store/action/authAction";
import {menuManage} from "../../utils/constant";
import User from "../../components/User";

const {AiOutlinePlusCircle, AiOutlineCaretDown, ImExit} = icons;

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const {isLogin} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const headerRef = useRef();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, {
      state: {
        flag,
      },
    });
  }, []);

  useEffect(() => {
    headerRef.current.scrollIntoView({behavior: "smooth", block: "start"});
  }, [params.get("page")]);

  return (
    <div ref={headerRef} className="lg:w-1100 sm:w-full sm:px-3 lg:px-0">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>

        <div className="flex items-center gap-3">
          {!isLogin && (
            <div className="flex items-center gap-3">
              <span>Phongtro123 xin chào!</span>
              <Button
                text={"Đăng Nhập"}
                textColor={"text-white"}
                styleOther={"hover:underline"}
                onClick={() => goLogin(false)}
              />
              <Button
                text={"Đăng Ký"}
                textColor={"text-white"}
                styleOther={"hover:underline"}
                onClick={() => goLogin(true)}
              />
            </div>
          )}
          {isLogin && (
            <div className="flex items-center gap-3 relative">
              <User />
              <Button
                IconAfter={AiOutlineCaretDown}
                text={"Quản lý tài khoản"}
                textColor={"text-white"}
                styleOther={"hover:underline"}
                bgColor={"bg-bluePrimary"}
                onClick={() => setIsShowMenu((prev) => !prev)}
              />
              {isShowMenu && (
                <div className="absolute bg-white top-full  right-0 shadow-md px-3 py-2 rounded-lg min-w-[200px] flex flex-col mt-1">
                  {menuManage.map((item) => (
                    <Link
                      key={item.id}
                      to={item?.path}
                      className="py-2 border-b border-l-greyPrimary last:border-none font-semibold text-bluePrimary hover:text-hover flex items-center gap-2"
                    >
                      {item.icon}
                      {item.text}
                    </Link>
                  ))}
                  <span
                    className="py-2 font-semibold text-redPrimary cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      dispatch(logout());
                      setIsShowMenu(false);
                    }}
                  >
                    <ImExit />
                    Đăng xuất
                  </span>
                </div>
              )}
            </div>
          )}
          <Button
            text={"Đăng tin mới"}
            textColor={"text-white"}
            bgColor={"bg-redPrimary"}
            styleOther={"hover:underline"}
            IconAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
