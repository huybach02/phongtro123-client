import React from "react";
import {useSelector} from "react-redux";
import {blobToBase64} from "../utils/toBase64";

const User = () => {
  const {currentUserData} = useSelector((state) => state.user);

  return (
    <div className="flex items-center gap-2">
      <img
        src={
          blobToBase64(currentUserData?.avatar) ||
          "https://api-private.atlassian.com/users/d4a1567a7fb3b33b05ee3d965080ee6a/avatar"
        }
        alt=""
        className="w-10 h-10 object-cover rounded-full"
      />
      <div className="flex flex-col">
        <span>
          Xin chào: <strong>{currentUserData.name}</strong>
        </span>
        <span>
          Mã tài khoản:{" "}
          <span className="font-semibold">
            {currentUserData?.id?.split("-")[0]}
          </span>
        </span>
      </div>
    </div>
  );
};

export default User;
