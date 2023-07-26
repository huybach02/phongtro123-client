import React from "react";
import CreatePost from "./CreatePost";
import {useDispatch} from "react-redux";
import {resetDataEdit} from "../../store/action/postAction";

const UpdatePost = ({setIsShowUpdate}) => {
  const dispatch = useDispatch();
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] flex justify-center"
      onClick={(e) => {
        e.stopPropagation();
        setIsShowUpdate(false);
        dispatch(resetDataEdit());
      }}
    >
      <div
        className="bg-white max-w-[1100px] w-full overflow-y-scroll"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CreatePost isUpdate />
      </div>
    </div>
  );
};

export default UpdatePost;
