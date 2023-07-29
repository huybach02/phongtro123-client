import React, {useEffect, useState} from "react";
import Province from "../../components/Province";
import List from "./List";
import ItemSidebar from "../../components/ItemSidebar";
import RelativePost from "../../components/RelativePost";
import {useSelector, useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {formatVietnameseToSlug} from "../../utils/constant";
import Search from "./Search";

const ChoThue = () => {
  const {prices, areas, categories} = useSelector((state) => state.app);
  const [categoryCode, setCategoryCode] = useState("");
  const [categoryCurrent, setCategoryCurrent] = useState({});
  const location = useLocation();

  useEffect(() => {
    const category = categories?.find(
      (item) => `/${formatVietnameseToSlug(item.value)}` === location.pathname
    );
    setCategoryCurrent(category);
    if (category) {
      setCategoryCode(category.code);
    }
  }, [location, categories]);

  return (
    <div>
      <div className="w-full flex flex-col gap-3 px-3 lg:px-0">
        <Search />
        <div>
          <h1 className="text-[28px] font-bold">
            {categoryCurrent?.header || ""}
          </h1>
          <p className="text-[14px] text-greyPrimary">
            {categoryCurrent?.subheader || ""}
          </p>
        </div>
        <Province />

        <div className="w-full flex gap-4">
          <div className="w-[70%] ">
            <List categoryCode={categoryCode} />
          </div>
          <div className="w-[30%]  flex flex-col gap-5 items-center justify-start ">
            <ItemSidebar
              content={prices}
              type={"priceCode"}
              title={"Xem theo giá"}
            />
            <ItemSidebar
              content={areas}
              type={"areaCode"}
              title={"Xem theo diện tích"}
            />
            <RelativePost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoThue;
