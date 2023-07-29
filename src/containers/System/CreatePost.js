import React, {useEffect, useState} from "react";
import Address from "../../components/Address";
import Overview from "../../components/Overview";
import Contact from "../../components/Contact";
import {
  apiCreatePost,
  apiUpdatePost,
  apiUploadImages,
} from "../../services/post";
import icons from "../../utils/icons";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import {getCodeFromMinMax} from "../../utils/getCodes";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import validate from "../../utils/validate";
import {resetDataEdit} from "../../store/action/postAction";
import {useNavigate} from "react-router-dom";
import {path} from "../../utils/constant";

const {ImBin2} = icons;

const CreatePost = ({isUpdate}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {dataEdit} = useSelector((state) => state.post);
  const {prices, areas, categories, provinces} = useSelector(
    (state) => state.app
  );
  const {currentUserData} = useSelector((state) => state.user);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState(() => {
    const initDataDefault = {
      categoryCode: "",
      title: "",
      priceNumber: 0,
      areaNumber: 0,
      images: "",
      address: "",
      priceCode: "",
      areaCode: "",
      description: "",
      target: "",
      province: "",
    };
    const initDataUpdate = {
      categoryCode: dataEdit?.categoryCode || "",
      title: dataEdit?.title || "",
      priceNumber: dataEdit?.priceNumber * 1000000 || 0,
      areaNumber: dataEdit?.areaNumber || 0,
      images: dataEdit?.images?.image
        ? JSON.parse(dataEdit?.images?.image)
        : "",
      address: dataEdit?.address || "",
      priceCode: dataEdit?.priceCode || "",
      areaCode: dataEdit?.areaCode || "",
      description: dataEdit?.description
        ? JSON.parse(dataEdit?.description)
        : "",
      target: dataEdit?.overviews?.target || "",
      province: dataEdit?.province || "",
    };
    return isUpdate ? initDataUpdate : initDataDefault;
  });
  const [invalidFields, setInvalidFields] = useState([]);

  useEffect(() => {
    if (dataEdit) {
      const images = JSON.parse(dataEdit?.images?.image);
      images && setImagesPreview(images);
    }
  }, [dataEdit]);

  const handleFiles = async (e) => {
    setInvalidFields([]);
    setIsLoading(true);
    let images = [];
    e.stopPropagation();
    const files = e.target.files;
    const formData = new FormData();
    for (let i of files) {
      formData.append("file", i);
      formData.append("upload_preset", "yq7hhn2g");

      const res = await apiUploadImages(formData);
      if (res?.status === 200) {
        images = [...images, res?.data?.secure_url];
      }
    }
    setIsLoading(false);
    setImagesPreview((prev) => [...prev, ...images]);
    setPayload((prev) => ({
      ...prev,
      images: [...prev.images, ...images],
    }));
  };

  const handleDeleteImage = (image) => {
    setImagesPreview((prev) => prev.filter((item) => item !== image));
    setPayload((prev) => ({
      ...prev,
      images: prev.images?.filter((item) => item !== image),
    }));
  };

  const handleSubmit = async () => {
    let priceCodeArr = getCodeFromMinMax(
      +payload.priceNumber / 1000000,
      prices,
      1,
      15
    );
    let priceCode = priceCodeArr[0]?.code;
    let areaCodeArr = getCodeFromMinMax(+payload.areaNumber, areas, 20, 90);
    let areaCode = areaCodeArr[0]?.code;

    let finalPayload = {
      ...payload,
      priceCode,
      areaCode,
      userId: currentUserData.id,
      priceNumber: +payload.priceNumber / 1000000,
      label: `${
        categories?.find((item) => item.code === payload?.categoryCode)?.value
      } ${payload?.address?.split(",")[0]}`,
    };
    const result = validate(finalPayload, setInvalidFields);
    if (result === 0) {
      if (dataEdit && isUpdate) {
        finalPayload.postId = dataEdit?.id;
        finalPayload.attributesId = dataEdit?.attributesId;
        finalPayload.imagesId = dataEdit?.imagesId;
        finalPayload.overviewId = dataEdit?.overviewId;

        const res = await apiUpdatePost(finalPayload);
        if (res?.status === 200) {
          Swal.fire(
            "Cập nhật thành công!!!",
            "Đã cập nhật bài đăng!",
            "success"
          ).then(() => {
            setPayload({
              categoryCode: "",
              title: "",
              priceNumber: 0,
              areaNumber: 0,
              images: "",
              address: "",
              priceCode: "",
              areaCode: "",
              description: "",
              target: "",
              province: "",
            });
            // window.location.reload();
          });
          dispatch(resetDataEdit());
        } else {
          Swal.fire("Oops!!!", "Xảy ra lỗi!", "error");
        }
      } else {
        const res = await apiCreatePost(finalPayload);
        if (res?.data?.err === 0) {
          Swal.fire(
            "Tạo tin thành công!!!",
            "Đã thêm bài đăng mới!",
            "success"
          ).then(() => {
            setPayload({
              categoryCode: "",
              title: "",
              priceNumber: 0,
              areaNumber: 0,
              images: "",
              address: "",
              priceCode: "",
              areaCode: "",
              description: "",
              target: "",
              province: "",
            });
            navigate("/he-thong/quan-ly-bai-dang");
          });
        } else {
          Swal.fire("Oops!!!", "Xảy ra lỗi!", "error");
        }
      }
    }
  };

  return (
    <div className="px-6">
      <h1 className="text-[35px] py-4 font-semibold border-b border-l-greyPrimary mb-8">
        {!isUpdate ? "Đăng tin mới" : "Chỉnh sửa tin đăng"}
      </h1>
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-auto">
          <Address
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            payload={payload}
            setPayload={setPayload}
          />
          <Overview
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            payload={payload}
            setPayload={setPayload}
          />
          <div className="w-full mb-5">
            <h2 className="text-[24px] font-bold mb-5">Hình ảnh</h2>
            <span>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</span>
            <div className="w-full mt-5">
              <label
                htmlFor="file"
                className="w-full h-[200px] border-[3px] border-dashed border-gray-300 flex items-center justify-center text-[20px] font-semibold"
              >
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Loading />
                    <span>Đang tải ảnh lên, vui lòng đợi...</span>
                  </div>
                ) : (
                  <span className="flex flex-col items-center justify-center gap-5">
                    <img
                      src="https://phongtro123.com/dashboard_resource/images/upload-image.png"
                      alt=""
                      className="w-[100px]"
                    />
                    Thêm ảnh
                  </span>
                )}
              </label>
              <input
                type="file"
                id="file"
                hidden
                multiple
                onChange={handleFiles}
              />
              <small className="text-red-500">
                {invalidFields?.some((item) => item.name === "images") &&
                  invalidFields?.find((item) => item.name === "images")
                    ?.message}
              </small>
              <div className="flex items-center gap-4 mt-4 flex-wrap">
                {imagesPreview?.map((item) => (
                  <div key={item} className="relative">
                    <img
                      src={item}
                      alt=""
                      className="w-[200px] h-[130px] object-cover rounded-lg"
                    />
                    <span
                      className="absolute top-2 right-4 bg-gray-400 p-2 rounded-full hover:bg-gray-500 cursor-pointer"
                      title="Xóa ảnh"
                      onClick={() => handleDeleteImage(item)}
                    >
                      <ImBin2 size={16} color="white" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button
            text={!isUpdate ? "Tạo mới" : "Cập nhật"}
            textColor={"text-white"}
            styleOther={"font-bold text-[20px]"}
            onClick={handleSubmit}
          />
        </div>
        <div className="w-[35%]">
          <div className="p-5 bg-[#fff3cd] text-[#856404]">
            <h2 className="text-[20px] font-bold ">Lưu ý khi đăng tin</h2>
            <ul className="flex flex-col gap-1 mt-2">
              <li>Nội dung phải viết bằng tiếng Việt có dấu</li>
              <li>Tiêu đề tin không dài quá 100 kí tự</li>
              <li>
                Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có
                hiệu quả hơn.
              </li>
              <li>
                Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy
                sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới
                đúng vị trí của tin rao.
              </li>
              <li>
                Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so
                với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh
                chóng!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
      {!isUpdate && (
        <div className="w-full">
          <Contact isFull />
        </div>
      )}
      <div className="h-[100px]"></div>
    </div>
  );
};

export default CreatePost;
