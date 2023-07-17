import React from "react";
import {Link} from "react-router-dom";
import {path} from "../utils/constant";
import icons from "../utils/icons";
import Button from "./Button";

const {AiFillStar} = icons;

const Intro = () => {
  return (
    <div className="mt-5 lg:w-1100 sm:w-full py-10 px-[50px] bg-white flex flex-col  gap-4 rounded-lg">
      <h2 className="text-[18px] text-center font-bold">
        Tại sao lại chọn PhongTro123.com?
      </h2>
      <p className="text-center">
        Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào
        là trang web đứng top google về các từ khóa:{" "}
        <Link
          to={path.CHO_THUE_PHONG_TRO}
          className="font-semibold text-bluePrimary hover:text-hover"
        >
          cho thuê phòng trọ
        </Link>
        , nhà trọ,{" "}
        <Link
          to={path.NHA_CHO_THUE}
          className="font-semibold text-bluePrimary hover:text-hover"
        >
          thuê nhà nguyên căn
        </Link>
        ,{" "}
        <Link
          to={path.CHO_THUE_CAN_HO}
          className="font-semibold text-bluePrimary hover:text-hover"
        >
          cho thuê căn hộ
        </Link>
        ,{" "}
        <Link
          to={path.CHO_THUE_MAT_BANG}
          className="font-semibold text-bluePrimary hover:text-hover"
        >
          cho thuê mặt bằng
        </Link>
        ...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách
        hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
      </p>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center ">
        <div className="flex flex-col items-center w-[240px]">
          <span className="text-[21px] font-bold">116.998+</span>
          <span>Thành viên</span>
        </div>
        <div className="flex flex-col items-center w-[240px]">
          <span className="text-[21px] font-bold">103.348+</span>
          <span>Tin đăng</span>
        </div>
        <div className="flex flex-col items-center w-[240px]">
          <span className="text-[21px] font-bold">300.000+</span>
          <span>Lượt truy cập/tháng</span>
        </div>
        <div className="flex flex-col items-center w-[240px]">
          <span className="text-[21px] font-bold">2.500.000+</span>
          <span>Lượt xem/tháng</span>
        </div>
      </div>
      <h2 className="text-[18px] text-center font-bold mt-2">
        Chi phí thấp, hiệu quả tối đa
      </h2>
      <div className="flex items-center justify-center">
        <AiFillStar size={20} color="#ffd454" />
        <AiFillStar size={20} color="#ffd454" />
        <AiFillStar size={20} color="#ffd454" />
        <AiFillStar size={20} color="#ffd454" />
        <AiFillStar size={20} color="#ffd454" />
      </div>
      <p className="text-center text-[14px] italic ">
        "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và chi
        phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy, và đăng
        lên các website khác nhưng hiệu quả không cao. Từ khi biết website
        phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao
        trong khi chi phí khá thấp, không còn tình trạng phòng trống kéo dài."
      </p>
      <span className="text-center text-[14px]">
        Anh Khánh (chủ hệ thống phòng trọ tại Tp.HCM)
      </span>
      <h2 className="text-[18px] text-center font-bold mt-2">
        Bạn đang có phòng trọ / căn hộ cho thuê?
      </h2>
      <p className="text-center text-[14px]">
        Không phải lo tìm người cho thuê, phòng trống kéo dài
      </p>
      <Button
        text={"Đăng tin mới"}
        textColor={"text-white"}
        bgColor={"bg-redPrimary"}
        styleOther={"hover:underline w-[150px] mx-auto"}
      />
    </div>
  );
};

export default Intro;
