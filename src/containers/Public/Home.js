import React, {useEffect} from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import Intro from "../../components/Intro";
import Contact from "../../components/Contact";
import {getAreas, getPrices, getProvinces} from "../../store/action/appAction";
import {useDispatch} from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrices());
    dispatch(getAreas());
    dispatch(getProvinces());
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <Navbar />
      <Search />

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
