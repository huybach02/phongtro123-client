import React, {memo} from "react";
import icons from "../utils/icons";

const {FiChevronRight} = icons;

const ItemSidebar = ({content, title}) => {
  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <h3 className="text-[18px] font-bold mb-2">{title}</h3>
      <div>
        {content?.length > 0 &&
          content?.map((item) => (
            <div
              key={item.code}
              className="flex items-center gap-1 py-2 cursor-pointer hover:text-hover border-dashed border-b border-l-greyPrimary last:border-none"
            >
              <div className="text-greyPrimary">
                <FiChevronRight size={14} />
              </div>
              <span>{item.value}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(ItemSidebar);
