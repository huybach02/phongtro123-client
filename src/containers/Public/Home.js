import React, {useEffect} from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import Intro from "../../components/Intro";
import Contact from "../../components/Contact";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../../store/action/userAction";

const Home = () => {
  const dispatch = useDispatch();
  const {isLogin} = useSelector((state) => state.auth);

  useEffect(() => {
    const timeout = setTimeout(() => {
      isLogin && dispatch(getCurrentUser());
    }, 500);

    return () => clearTimeout(timeout);
  }, [isLogin]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <Navbar />

      <div className="lg:w-[1100px] sm:w-full flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>

      <Intro />
      <Contact />

      <div className="h-[200px]"></div>
    </div>
  );
};

export default Home;
