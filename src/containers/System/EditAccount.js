import React, {useEffect, useState} from "react";
import InputReadOnly from "../../components/InputReadOnly";
import InputForm2 from "../../components/InputForm2";
import Button from "../../components/Button";
import {useSelector, useDispatch} from "react-redux";
import {apiUpdateUser} from "../../services/user";
import Swal from "sweetalert2";
import {blobToBase64, fileToBase64} from "../../utils/toBase64";
import {getCurrentUser} from "../../store/action/userAction";

const EditAccount = () => {
  const dispatch = useDispatch();
  const {currentUserData} = useSelector((state) => state.user);
  const [payload, setPayload] = useState({
    name: currentUserData?.name || "",
    avatar: blobToBase64(currentUserData?.avatar) || "",
    fbUrl: currentUserData?.fbUrl || "",
    zalo: currentUserData?.zalo || "",
  });

  const handleSubmit = async () => {
    const res = await apiUpdateUser(payload);
    console.log("res: ", res);
    if (res?.status === 200) {
      Swal.fire(
        "Cập nhật thành công!!!",
        "Đã cập nhật thành công thông tin của bạn!",
        "success"
      );
      dispatch(getCurrentUser());
    } else {
      Swal.fire("Oops!!!", "Xảy ra lỗi!", "error");
    }
  };

  const handleUploadImage = async (e) => {
    const imageBase64 = await fileToBase64(e.target.files[0]);
    setPayload((prev) => ({...prev, avatar: imageBase64}));
  };

  return (
    <div className="px-6">
      <h1 className="text-[35px] py-4 font-semibold border-b border-l-greyPrimary mb-8">
        Cập nhật thông tin cá nhân
      </h1>
      <div className="w-3/5 mx-auto flex flex-col gap-5">
        <InputReadOnly
          flexRow
          label={"Mã thành viên"}
          value={currentUserData?.id?.split("-")[0]}
        />
        <InputReadOnly
          isPhoneNumber
          flexRow
          label={"Số điện thoại"}
          value={currentUserData?.phone}
        />
        <InputForm2
          flexRow
          label={"Tên hiển thị"}
          value={payload.name}
          setValue={setPayload}
          name={"name"}
        />
        <InputForm2
          flexRow
          label={"Số Zalo"}
          value={payload.zalo}
          setValue={setPayload}
          name={"zalo"}
        />
        <InputForm2
          flexRow
          label={"Facebook"}
          value={payload.fbUrl}
          setValue={setPayload}
          name={"fbUrl"}
        />
        <div className="flex mt-2">
          <label htmlFor="password" className="w-[200px] flex-none font-bold">
            Mật khẩu
          </label>
          <span className="flex-auto text-bluePrimary hover:underline cursor-pointer">
            Đổi mật khẩu
          </span>
        </div>
        <div className="flex my-6 items-center">
          <label htmlFor="avatar" className="w-[200px] flex-none font-bold">
            Ảnh đại diện
          </label>
          <div>
            <img
              src={
                payload.avatar ||
                "https://api-private.atlassian.com/users/d4a1567a7fb3b33b05ee3d965080ee6a/avatar"
              }
              alt=""
              className=" w-32 h-32 rounded-full object-cover"
            />
            <input
              type="file"
              name=""
              id="avatar"
              className="appearance-none my-4"
              onChange={handleUploadImage}
            />
          </div>
        </div>
        <Button
          text={"Lưu và cập nhật"}
          textColor={"text-white"}
          styleOther={"text-[20px] font-bold"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default EditAccount;
