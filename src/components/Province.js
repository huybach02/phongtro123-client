import React from "react";
import ProvinceBtn from "./ProvinceBtn";

const Province = () => {
  return (
    <div className="flex items-center justify-center gap-5 py-2">
      <ProvinceBtn
        image={"https://phongtro123.com/images/location_hcm.jpg"}
        name={"Phòng trọ Hồ Chí Minh"}
      />
      <ProvinceBtn
        image={"https://phongtro123.com/images/location_hn.jpg"}
        name={"Phòng trọ Hà Nội"}
      />
      <ProvinceBtn
        image={"https://phongtro123.com/images/location_dn.jpg"}
        name={"Phòng trọ Đà Nẵng"}
      />
    </div>
  );
};

export default Province;
