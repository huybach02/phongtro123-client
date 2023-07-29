import React, {useEffect, useState} from "react";
import List from "./List";
import ItemSidebar from "../../components/ItemSidebar";
import RelativePost from "../../components/RelativePost";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Search from "./Search";

const SearchDetail = () => {
  const location = useLocation();
  const {prices, areas} = useSelector((state) => state.app);

  return (
    <div className="w-1100">
      <div className="w-full flex flex-col gap-3 px-3 lg:px-0">
        <Search />
        <div>
          <h1 className="text-[24px] font-bold">
            {location?.state?.titleSearch || "Kết quả tìm kiếm"}
          </h1>
          <p className="text-[14px] text-greyPrimary">
            {location?.state?.titleSearch
              ? `${location?.state?.titleSearch}  mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu an ninh.`
              : ""}
          </p>
        </div>

        <div className="w-full flex gap-4">
          <div className="w-[70%] ">
            <List />
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

export default SearchDetail;
