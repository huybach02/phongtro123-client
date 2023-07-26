import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDataEdit, getPostsLimitAdmin} from "../../store/action/postAction";
import moment from "moment";
import Button from "../../components/Button";
import UpdatePost from "./UpdatePost";
import {apiDeletePost} from "../../services/post";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {path} from "../../utils/constant";

const ManagePost = () => {
  const dispatch = useDispatch();
  const {postOfCurrentUser, dataEdit} = useSelector((state) => state.post);
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isUpdateData, setIsUpdateData] = useState(false);

  useEffect(() => {
    !dataEdit && dispatch(getPostsLimitAdmin());
  }, [dataEdit, isUpdateData]);

  useEffect(() => {
    if (!dataEdit) {
      setIsShowUpdate(false);
    }
  }, [dataEdit]);

  const isFromBiggerThanTo = (dtmfrom, dtmto) => {
    return new Date(dtmfrom).getTime() <= new Date(dtmto).getTime();
  };

  const handleDeletePost = async (postId) => {
    Swal.fire(
      "Xác nhận xóa!!!",
      "Bạn chắc chắn muốn xóa bài đăng này?",
      "question"
    ).then(async () => {
      const res = await apiDeletePost(postId);
      if (res?.status === 200) {
        Swal.fire(
          "Xóa thành công!!!",
          "Bạn đã xóa thành công bài đăng này",
          "success"
        );
        setIsUpdateData((prev) => !prev);
      } else {
        Swal.fire("Oops!!!", "Xóa bài đăng không thành công!", "error");
      }
    });
  };

  return (
    <div className="px-6 flex flex-col gap-12 ">
      <div>
        <h1 className="text-[35px] py-4 font-semibold border-b border-l-greyPrimary mb-8">
          Quản lý tin đăng
        </h1>
        {/* <select name="" id="">
          <option value="">Lọc theo trạng thái</option>
          <option value="">Lọc theo trạng thái</option>
          <option value="">Lọc theo trạng thái</option>
        </select> */}
      </div>
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300 bg-gray-200">Mã tin</th>
            <th className="p-2 border border-gray-300 bg-gray-200">
              Ảnh đại diện
            </th>
            <th className="p-2 border border-gray-300 bg-gray-200">Tiêu đề</th>
            <th className="p-2 border border-gray-300 bg-gray-200">Giá</th>
            <th className="p-2 border border-gray-300 bg-gray-200">
              Ngày bắt đầu
            </th>
            <th className="p-2 border border-gray-300 bg-gray-200">
              Ngày hết hạn
            </th>
            <th className="p-2 border border-gray-300 bg-gray-200">
              Trạng thái
            </th>
            <th className="p-2 border border-gray-300 bg-gray-200">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {postOfCurrentUser.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-[18px]">
                Bạn chưa có tin đăng nào.{" "}
                <Link
                  to={"/he-thong/tao-moi-bai-dang"}
                  className="font-bold text-bluePrimary"
                >
                  Bấm vào đây
                </Link>{" "}
                để bắt đầu đăng tin
              </td>
            </tr>
          ) : (
            postOfCurrentUser?.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border text-center">
                  {item?.overviews?.code}
                </td>
                <td className="p-2 border flex justify-center">
                  <img
                    src={JSON.parse(item?.images?.image)[0] || ""}
                    alt=""
                    className="w-[200px] h-[120px]"
                  />
                </td>
                <td className="p-2 border text-center">{item?.title}</td>
                <td className="p-2 border text-center">
                  {item?.attributes?.price.split(" ")[0] % 1000 === 0
                    ? `${item?.attributes?.price.split(" ")[0] / 1000}.000 ${
                        item?.attributes?.price.split(" ")[1]
                      }`
                    : item?.attributes?.price}
                </td>
                <td className="p-2 border text-center">
                  {moment(item?.overviews?.createdAt?.split("T")[0]).format(
                    "DD/MM/YYYY"
                  )}
                </td>
                <td className="p-2 border text-center">
                  {moment(item?.overviews?.expire?.split("T")[0]).format(
                    "DD/MM/YYYY"
                  )}
                </td>
                <td className="p-2 border text-center">
                  {isFromBiggerThanTo(
                    moment(item?.overviews?.createdAt?.split("T")[0]),
                    moment(item?.overviews?.expire?.split("T")[0])
                  )
                    ? "Đang hoạt động"
                    : "Hết hạn"}
                </td>
                <td className="p-2 border text-center">
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      text={"Sửa"}
                      textColor={"text-white"}
                      onClick={() => {
                        setIsShowUpdate(true);
                        dispatch(getDataEdit(item));
                      }}
                    />
                    <Button
                      text={"Xóa"}
                      bgColor={"bg-redPrimary"}
                      textColor={"text-white"}
                      onClick={() => handleDeletePost(item.id)}
                    />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {isShowUpdate && (
        <div className="fixed top-0 left-0 right-0 bottom-0 mt-[40px]">
          <UpdatePost setIsShowUpdate={setIsShowUpdate} />
        </div>
      )}
      <div className="h-[100px]"></div>
    </div>
  );
};

export default ManagePost;
