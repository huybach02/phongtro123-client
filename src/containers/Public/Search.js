import React from "react";
import SearchItem from "../../components/SearchItem";
import icons from "../../utils/icons";

const {
  BsFillBuildingFill,
  GrFormNext,
  MdLocationOn,
  IoIosPricetag,
  RiCrop2Line,
  AiOutlineSearch,
} = icons;

const Search = () => {
  return (
    <div className="py-2 lg:w-1100 sm:w-full px-[10px] bg-yellowPrimary rounded-lg flex flex-col md:flex-row items-center justify-around gap-2 mt-3">
      <SearchItem
        text={"Phòng trọ, nhà trọ"}
        IconBefore={<BsFillBuildingFill size={12} />}
        IconAfter={<GrFormNext size={18} />}
      />
      <SearchItem
        text={"Toàn quốc"}
        IconBefore={<MdLocationOn size={14} />}
        IconAfter={<GrFormNext size={18} />}
      />
      <SearchItem
        text={"Chọn giá"}
        IconBefore={<IoIosPricetag size={14} />}
        IconAfter={<GrFormNext size={18} />}
      />
      <SearchItem
        text={"Chọn diện tích"}
        IconBefore={<RiCrop2Line size={14} />}
        IconAfter={<GrFormNext size={18} />}
      />
      <button
        type="button"
        className="w-full h-[33px] px-2 bg-bluePrimary rounded-lg text-white text-[14px] font-semibold flex items-center justify-center gap-1"
      >
        <AiOutlineSearch size={20} />
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
