import React, {memo} from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const notActive =
  "px-[18px] py-[10px] bg-white rounded-lg hover:bg-[#ddd] cursor-pointer";
const active =
  "px-[18px] py-[10px] rounded-lg cursor-pointer bg-redPrimary text-white";

const PageNumber = ({text, number, current, setCurrentPage, type}) => {
  const navigate = useNavigate();

  const [params] = useSearchParams();
  let entries = params.entries();

  const append = (entries) => {
    let param = [];
    params.append("page", +number);
    for (let entry of entries) {
      param.push(entry);
    }
    let a = {};
    param?.map((item) => (a = {...a, [item[0]]: item[1]}));
    return a;
  };

  const handleChangePage = () => {
    navigate({
      pathname: "",
      search: createSearchParams(append(entries)).toString(),
    });
    if (type === "end") {
      setCurrentPage(number);
    } else {
      setCurrentPage(number);
    }
  };

  const handleClick = () => {
    if (typeof number === "number" || type === "start" || type === "end") {
      handleChangePage();
    }
  };

  return (
    <div
      className={+number === +current ? active : notActive}
      onClick={handleClick}
    >
      {text || number}
    </div>
  );
};

export default memo(PageNumber);
