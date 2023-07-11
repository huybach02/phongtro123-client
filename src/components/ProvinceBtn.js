import React, {memo} from "react";

const ProvinceBtn = ({name, image}) => {
  return (
    <div className="drop-shadow-md hover:drop-shadow-xl group cursor-pointer">
      <img
        src={image}
        alt=""
        className="w-[190px] h-[110px] object-cover rounded-tl-lg rounded-tr-lg"
      />
      <p className="py-2 text-center bg-white rounded-bl-lg rounded-br-lg text-[14px] font-bold text-bluePrimary group-hover:text-hover ">
        {name}
      </p>
    </div>
  );
};

export default memo(ProvinceBtn);
