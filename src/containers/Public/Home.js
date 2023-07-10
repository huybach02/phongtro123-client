import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <Navbar />
      <div className="w-1100 flex flex-col items-center justify-start">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
