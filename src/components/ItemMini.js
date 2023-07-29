import React from "react";
import moment from "moment";
import "moment/locale/vi";
import {Link} from "react-router-dom";
import {formatVietnameseToSlug} from "../utils/constant";

const ItemMini = ({title, image, price, time, id}) => {
  return (
    <Link
      to={`/chi-tiet/${formatVietnameseToSlug(title.replace("/", "-"))}/${id}`}
      className="flex items-center gap-2 py-2 border-b border-l-greyPrimary last:border-none cursor-pointer"
    >
      <div className="w-[65px] h-[65px] flex-shrink">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-bluePrimary leading-4 text-[14px]">{`${
          title?.length > 50 ? `${title?.slice(0, 50)}...` : title
        }`}</h4>
        <div className="flex items-center justify-between mt-3">
          <span className="text-[12px] font-bold text-greenPrimary">
            {price}
          </span>
          <span className="text-[12px] text-greyPrimary">
            {moment(time).fromNow()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ItemMini;
