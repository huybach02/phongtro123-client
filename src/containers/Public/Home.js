import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <Navbar />
      <Search />

      <div className="lg:w-[1100px] sm:w-full flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>

      <div className="h-[200px]"></div>
    </div>
  );
};

export default Home;
