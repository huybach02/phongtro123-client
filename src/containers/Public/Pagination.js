import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import PageNumber from "../../components/PageNumber";

const Pagination = ({number}) => {
  const {count, posts} = useSelector((state) => state.post);
  const [arrPage, setArrPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(+number || 1);
  const [isHideEnd, setIsHideEnd] = useState(false);
  const [isHideStart, setIsHideStart] = useState(false);

  useEffect(() => {
    let maxPage = Math.floor(count / posts.length);
    let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1;
    let start = currentPage - 1 < 1 ? 1 : currentPage - 1;
    let temp = [];
    for (let i = start; i <= end; i++) {
      temp.push(i);
    }
    setArrPage(temp);
    if (currentPage + 1 > maxPage) {
      setIsHideEnd(true);
    } else {
      setIsHideEnd(false);
    }
    if (currentPage > 2) {
      setIsHideStart(true);
    } else {
      setIsHideStart(false);
    }
  }, [count, posts, currentPage]);

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {isHideStart && (
        <PageNumber
          text={"<<"}
          type={"start"}
          setCurrentPage={setCurrentPage}
          number={1}
        />
      )}
      {isHideStart && <PageNumber number={"..."} />}
      {arrPage.length > 0 &&
        arrPage.map((item) => (
          <PageNumber
            key={item}
            number={item}
            current={currentPage || 1}
            setCurrentPage={setCurrentPage}
          />
        ))}
      {!isHideEnd && <PageNumber number={"..."} />}
      {!isHideEnd && (
        <PageNumber
          text={">>"}
          type={"end"}
          setCurrentPage={setCurrentPage}
          number={Math.floor(count / posts.length)}
        />
      )}
    </div>
  );
};

export default Pagination;
