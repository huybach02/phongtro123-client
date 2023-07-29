import React, {useEffect} from "react";
import Province from "../../components/Province";
import List from "./List";
import ItemSidebar from "../../components/ItemSidebar";
import {useSelector} from "react-redux";
import RelativePost from "../../components/RelativePost";
import Search from "./Search";

const HomePage = () => {
  const {categories, prices, areas} = useSelector((state) => state.app);

  return (
    <div className="w-full flex flex-col gap-3 px-3 lg:px-0">
      <Search />
      <div>
        <h1 className="text-[28px] font-bold">
          Kênh thông tin Phòng Trọ số 1 Việt Nam
        </h1>
        <p className="text-[14px] text-greyPrimary">
          Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê
          phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+
          tin đăng và 2.500.000+ lượt xem mỗi tháng.
        </p>
      </div>
      <Province />

      <div className="w-full flex gap-4">
        <div className="w-[70%] ">
          <List />
        </div>
        <div className="w-[30%]  flex flex-col gap-5 items-center justify-start ">
          <ItemSidebar
            content={categories}
            title={"Danh mục cho thuê"}
            isCategory
          />
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
  );
};

export default HomePage;
