import React from "react";
import Select from "./Select";
import {useSelector} from "react-redux";
import InputReadOnly from "./InputReadOnly";
import InputForm2 from "./InputForm2";

const target = [
  {
    code: "Tất cả",
    value: "Tất cả",
  },
  {
    code: "Nam",
    value: "Nam",
  },
  {
    code: "Nữ",
    value: "Nữ",
  },
];

const Overview = ({payload, setPayload}) => {
  const {categories} = useSelector((state) => state.app);
  const {currentUserData} = useSelector((state) => state.user);

  return (
    <div>
      <h2 className="text-[24px] font-bold mb-5">Thông tin mô tả</h2>
      <div className="w-full">
        <div className="w-1/2">
          <Select
            value={payload.categoryCode}
            setValue={setPayload}
            name="categoryCode"
            label={"Loại chuyên mục"}
            option={categories}
          />
        </div>
        <div className="mt-5">
          <InputForm2
            value={payload.title}
            setValue={setPayload}
            label={"Tiêu đề"}
            name={"title"}
          />
        </div>
        <div className="flex flex-col mt-5 gap-1">
          <label htmlFor="desc" className="font-bold">
            Nội dung mô tả
          </label>
          <textarea
            type="text"
            id="desc"
            className="outline-none border border-gray-300 py-2 px-2 rounded-md"
            rows="10"
            value={payload.description}
            onChange={(e) =>
              setPayload((prev) => ({...prev, description: e.target.value}))
            }
          />
        </div>
        <div className="w-1/2 mt-5 flex flex-col gap-5">
          <InputReadOnly
            label={"Thông tin liên hệ"}
            value={currentUserData?.name}
          />
          <InputReadOnly label={"Điện thoại"} value={currentUserData?.phone} />
        </div>
        <div className="mt-5 w-1/2">
          <InputForm2
            label={"Giá cho thuê"}
            unit={"đồng"}
            small={"Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000"}
            name={"priceNumber"}
            value={payload.priceNumber}
            setValue={setPayload}
            type={"number"}
          />
        </div>
        <div className="mt-5 w-1/2">
          <InputForm2
            label={"Diện tích"}
            unit={"m2"}
            name={"areaNumber"}
            value={payload.areaNumber}
            setValue={setPayload}
            type={"number"}
          />
        </div>
        <div className="w-1/2 mt-5">
          <Select
            label={"Đối tượng cho thuê"}
            option={target}
            value={payload.target}
            setValue={setPayload}
            name={"target"}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
