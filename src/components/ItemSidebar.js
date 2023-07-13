import React, {memo} from "react";
import icons from "../utils/icons";
import {Link} from "react-router-dom";
import {formatVietnameseToSlug} from "../utils/constant";
import {useDispatch} from "react-redux";
import {getPostsLimit} from "../store/action/postAction";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";

const {FiChevronRight} = icons;

const ItemSidebar = ({content, title, isCategory, type}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleFilter = (code) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        [type]: code,
      }).toString(),
    });
  };

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
              {isCategory && (
                <Link to={`${formatVietnameseToSlug(item.value)}`}>
                  {item.value}
                </Link>
              )}
              {!isCategory && (
                <div onClick={() => handleFilter(item.code)}>{item.value}</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(ItemSidebar);
