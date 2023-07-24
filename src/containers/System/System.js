import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {path} from "../../utils/constant";
import HeaderSystem from "./HeaderSystem";
import Sidebar from "./Sidebar";
import {getCurrentUser} from "../../store/action/userAction";

const System = () => {
  const dispatch = useDispatch();
  const {isLogin} = useSelector((state) => state.auth);

  useEffect(() => {
    const timeout = setTimeout(() => {
      isLogin && dispatch(getCurrentUser());
    }, 500);

    return () => clearTimeout(timeout);
  }, [isLogin]);

  if (!isLogin) {
    return <Navigate to={`/${path.LOGIN}`} replace={true} />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <HeaderSystem />

      <div className="w-full flex flex-auto">
        <Sidebar />
        <div className="flex-auto bg-white p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default System;
