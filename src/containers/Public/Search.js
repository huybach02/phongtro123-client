import React, {useCallback, useEffect, useState} from "react";
import SearchItem from "../../components/SearchItem";
import icons from "../../utils/icons";
import Modal from "../../components/Modal";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate, createSearchParams, useLocation} from "react-router-dom";
import {path} from "../../utils/constant";

const {
  BsFillBuildingFill,
  GrFormNext,
  MdLocationOn,
  IoIosPricetag,
  RiCrop2Line,
  AiOutlineSearch,
} = icons;

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {categories, provinces, prices, areas} = useSelector(
    (state) => state.app
  );
  const [isShowModal, setIsShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState({});
  const [arrMinMax, setArrMinMax] = useState({});
  const [defaultText, setDefaultText] = useState("");

  useEffect(() => {
    if (location.pathname !== "/tim-kiem") {
      setArrMinMax({});
      setQuery({});
    }
  }, [location.pathname]);

  const handleShowModal = (title, content, name, defaultText) => {
    setTitle(title);
    setContent(content);
    setName(name);
    setIsShowModal(true);
    setDefaultText(defaultText);
  };

  const handleSubmit = useCallback(
    (e, query, arrMinMax) => {
      e.stopPropagation();
      setQuery((prev) => ({...prev, ...query}));
      setIsShowModal(false);
      arrMinMax && setArrMinMax((prev) => ({...prev, ...arrMinMax}));
    },
    [isShowModal, query]
  );

  const handleSearch = () => {
    const queryCode = Object.entries(query)
      .filter((item) => item[0].includes("Number") || item[0].includes("Code"))
      .filter((item) => item[1]);
    let queryCodeObject = {};
    queryCode.forEach((item) => {
      queryCodeObject[item[0]] = item[1];
    });
    const queryText = Object.entries(query).filter(
      (item) => !item[0].includes("Code") || !item[0].includes("Number")
    );
    let queryTextObj = {};
    queryText.forEach((item) => {
      queryTextObj[item[0]] = item[1];
    });
    let titleSearch = `${
      queryTextObj.category ? queryTextObj.category : "Cho thuê tất cả"
    } ${queryTextObj.province ? `tại ${queryTextObj.province},` : ""} ${
      queryTextObj.price ? `Giá ${queryTextObj.price},` : ""
    } ${queryTextObj.area ? `Diện tích ${queryTextObj.area}` : ""}`;
    navigate(
      {
        pathname: path.SEARCH,
        search: createSearchParams(queryCodeObject).toString(),
      },
      {state: {titleSearch}}
    );
  };

  return (
    <>
      <div className="py-2 lg:w-1100 sm:w-full px-[10px] bg-yellowPrimary rounded-lg flex flex-col md:flex-row items-center justify-around gap-2 mt-3">
        <div
          className="flex-1"
          onClick={() =>
            handleShowModal(
              "Chọn loại bất động sản",
              categories,
              "category",
              "Tất cả"
            )
          }
        >
          <SearchItem
            text={query.category || "Chọn loại bất động sản"}
            IconBefore={<BsFillBuildingFill size={12} />}
            IconAfter={<GrFormNext size={18} />}
          />
        </div>
        <div
          className="flex-1"
          onClick={() =>
            handleShowModal(
              "Chọn tỉnh thành",
              provinces,
              "province",
              "Toàn quốc"
            )
          }
        >
          <SearchItem
            text={query.province || "Chọn tỉnh thành"}
            IconBefore={<MdLocationOn size={14} />}
            IconAfter={<GrFormNext size={18} />}
          />
        </div>
        <div
          className="flex-1"
          onClick={() => handleShowModal("Chọn giá", prices, "price", "Tất cả")}
        >
          <SearchItem
            text={query.price || "Chọn giá"}
            IconBefore={<IoIosPricetag size={14} />}
            IconAfter={<GrFormNext size={18} />}
          />
        </div>
        <div
          className="flex-1"
          onClick={() =>
            handleShowModal("Chọn diện tích", areas, "area", "Tất cả")
          }
        >
          <SearchItem
            text={query.area || "Chọn diện tích"}
            IconBefore={<RiCrop2Line size={14} />}
            IconAfter={<GrFormNext size={18} />}
          />
        </div>
        <button
          type="button"
          className="flex-1 h-[33px] px-2 bg-bluePrimary rounded-lg text-white text-[14px] font-semibold flex items-center justify-center gap-1"
          onClick={handleSearch}
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
          handleSubmit={handleSubmit}
          query={query}
          arrMinMax={arrMinMax}
          defaultText={defaultText}
        />
      )}
    </>
  );
};

export default Search;
