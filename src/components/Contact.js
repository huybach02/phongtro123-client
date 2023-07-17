import React from "react";
import Button from "./Button";

const data = [
  {
    id: 1,
    title: "HỖ TRỢ ĐĂNG TIN",
    phone: "0902657123",
    zalo: "0902657123",
  },
  {
    id: 2,
    title: "HỖ TRỢ ĐĂNG TIN",
    phone: "0902657123",
    zalo: "0902657123",
  },
  {
    id: 3,
    title: "HỖ TRỢ ĐĂNG TIN",
    phone: "0902657123",
    zalo: "0902657123",
  },
  {
    id: 4,
    title: "PHẢN ÁNH/KHIẾU NẠI",
    phone: "0902657123",
    zalo: "0902657123",
  },
];

const Contact = () => {
  return (
    <div className="mt-5 lg:w-1100 sm:w-full py-10 px-[50px] bg-white flex flex-col  gap-10 rounded-lg border-[7px] border-dashed border-[#e8eefc]">
      <img
        src="https://phongtro123.com/images/support-bg.jpg"
        alt=""
        className="w-[450px] mx-auto"
      />
      <span className="text-center">
        Liên hệ với chúng tôi nếu bạn cần hỗ trợ:
      </span>
      <div className="flex items-center justify-between">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center ">
            <span className="text-[14px] font-bold text-hover mb-1">
              {item.title}
            </span>
            <span className="text-[18px] font-bold text-[#233162] cursor-pointer">
              Điện thoại: {item.phone}
            </span>
            <span className="text-[18px] font-bold text-[#233162] cursor-pointer">
              Zalo: {item.zalo}
            </span>
          </div>
        ))}
      </div>
      <Button
        text={"Gửi liên hệ"}
        textColor={"text-white"}
        bgColor={"bg-bluePrimary"}
        styleOther={"hover:underline w-[150px] mx-auto"}
      />
    </div>
  );
};

export default Contact;
