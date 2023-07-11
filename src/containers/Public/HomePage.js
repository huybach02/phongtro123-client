import React from "react";
import Province from "../../components/Province";
import List from "./List";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-3 px-3 lg:px-0">
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
        <div className="w-[70%]">
          <List />
        </div>
        <div className="w-[30%] border border-blue-500">sidebar</div>
      </div>
    </div>
  );
};

export default HomePage;
