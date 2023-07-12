import React, {useCallback, useEffect, useRef} from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import icons from "../../utils/icons";
import {useNavigate, Link, useSearchParams} from "react-router-dom";
import {path} from "../../utils/constant";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../../store/action/authAction";

const {AiOutlinePlusCircle} = icons;

const Header = () => {
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
        <Link to={""}>
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
            <div className="flex items-center gap-3">
              <span>Ten user</span>
              <Button
                text={"Đăng Xuất"}
                textColor={"text-white"}
                styleOther={"hover:underline"}
                bgColor={"bg-hover"}
                onClick={() => dispatch(logout())}
              />
            </div>
          )}
          <Button
            text={"Đăng tin Mới"}
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
