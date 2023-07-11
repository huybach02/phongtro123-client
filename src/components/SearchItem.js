import React, {memo} from "react";

const SearchItem = ({IconBefore, IconAfter, text}) => {
  return (
    <div className="bg-white h-[33px] flex items-center justify-between px-2 rounded-lg w-full text-[#777777] text-[14px] cursor-pointer">
      <div className="flex items-center gap-1 w-full">
        {IconBefore}
        {text}
      </div>
      {IconAfter}
    </div>
  );
};

export default memo(SearchItem);
