import React, {memo} from "react";
import icons from "../utils/icons";

const {AiFillStar, BsSuitHeartFill, BsSuitHeart} = icons;
const indexs = [0];

const Item = ({
  images,
  address,
  attributes,
  description,
  star,
  title,
  user,
}) => {
  return (
    <div className="w-full flex gap-2 bg-list p-4 border border-t-red-500">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        {/* <div className="flex gap-1"> */}
        <div className="w-[280px] h-[240px]">
          {images.length > 0 &&
            images
              .filter((i, index) => indexs.some((i) => i === index))
              ?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ))}
        </div>
        <span className="bg-[#3e4748] text-white px-2 rounded-md text-[14px] absolute bottom-1 left-1">
          {`${images.length} ảnh`}
        </span>
        {/* <span className="absolute bottom-1 right-3">
          <BsSuitHeart size={24} color="white" />
        </span> */}
      </div>

      <div className="w-3/5">
        <div>
          <div className="flex items-center">
            <AiFillStar color="#ffd454" size={18} />
            <AiFillStar color="#ffd454" size={18} />
            <AiFillStar color="#ffd454" size={18} />
            <AiFillStar color="#ffd454" size={18} />
            <AiFillStar color="#ffd454" size={18} />
          </div>
          <h2 className="text-redPrimary font-bold text-[14px] hover:underline cursor-pointer">
            {title}
          </h2>
          <div className="flex items-center gap-x-5 flex-wrap py-2">
            <span className="text-[16px] font-bold text-greenPrimary">
              {attributes?.price}
            </span>
            <span className="text-[14px]">{attributes?.acreage}</span>
            <span className="text-[14px]">{`${
              address.length > 30 ? `${address.slice(0, 30)}...` : address
            }`}</span>
          </div>
        </div>
        <p className="text-[14px] text-greyPrimary">
          {`${(description.length > 180
            ? `${description.slice(0, 180)}...`
            : description
          ).slice(2)}`}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://phongtro123.com/images/default-user.png"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <span className="text-[14px] text-greyPrimary">{user.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="bg-bluePrimary text-white text-[14px] px-4 py-1 rounded-lg"
            >
              {`Gọi ${user.phone}`}
            </button>
            <button
              type="button"
              className="bg-white text-bluePrimary text-[14px] px-4 py-1 rounded-lg border border-bluePrimary"
            >
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
