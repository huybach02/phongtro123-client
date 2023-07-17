import React, {useState} from "react";
import SearchItem from "../../components/SearchItem";
import icons from "../../utils/icons";
import Modal from "../../components/Modal";
import {useSelector} from "react-redux";

const {
  BsFillBuildingFill,
  GrFormNext,
  MdLocationOn,
  IoIosPricetag,
  RiCrop2Line,
  AiOutlineSearch,
} = icons;

const Search = () => {
  const {categories, provinces, prices, areas} = useSelector(
    (state) => state.app
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState([]);

  const handleShowModal = (title, content, name) => {
    setTitle(title);
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  return (
    <>
      <div className="py-2 lg:w-1100 sm:w-full px-[10px] bg-yellowPrimary rounded-lg flex flex-col md:flex-row items-center justify-around gap-2 mt-3">
        <div
          className="flex-1"
          onClick={() =>
            handleShowModal("Chọn loại bất động sản", categories, "categories")
          }
        >
          <SearchItem
            text={"Phòng trọ, nhà trọ"}
            IconBefore={<BsFillBuildingFill size={12} />}
            IconAfter={<GrFormNext size={18} />}
          />
        </div>
        <div
          className="flex-1"
          onClick={() =>
            handleShowModal("Chọn tỉnh thành", provinces, "provinces")
          }
        >
          <SearchItem
            text={"Toàn quốc"}
            IconBefore={<MdLocationOn size={14} />}
            IconAfter={<GrFormNext size={18} />}
          />
        </div>
        <div
          className="flex-1"
          onClick={() => handleShowModal("Chọn giá", prices, "prices")}
        >
          <SearchItem
            text={"Chọn giá"}
            IconBefore={<IoIosPricetag size={14} />}
            IconAfter={<GrFormNext size={18} />}
          />
        </div>
        <div
          className="flex-1"
          onClick={() => handleShowModal("Chọn diện tích", areas, "areas")}
        >
          <SearchItem
            text={"Chọn diện tích"}
            IconBefore={<RiCrop2Line size={14} />}
            IconAfter={<GrFormNext size={18} />}
          />
        </div>
        <button
          type="button"
          className="flex-1 h-[33px] px-2 bg-bluePrimary rounded-lg text-white text-[14px] font-semibold flex items-center justify-center gap-1"
        >
          <AiOutlineSearch size={20} />
          Tìm kiếm
        </button>
      </div>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          title={title}
          content={content}
          name={name}
        />
      )}
    </>
  );
};

export default Search;
