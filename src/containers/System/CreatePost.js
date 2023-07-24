import React, {useState} from "react";
import Address from "../../components/Address";
import Overview from "../../components/Overview";
import Contact from "../../components/Contact";
import {apiCreatePost, apiUploadImages} from "../../services/post";
import icons from "../../utils/icons";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import {getCodeFromMinMax} from "../../utils/getCodes";
import {useSelector} from "react-redux";
import Swal from "sweetalert2";

const {ImBin2} = icons;

const CreatePost = () => {
  const {prices, areas, categories, provinces} = useSelector(
    (state) => state.app
  );
  const {currentUserData} = useSelector((state) => state.user);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
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

  const handleFiles = async (e) => {
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
        categories?.find((item) => item.code === payload?.categoryCode).value
      } ${payload?.address?.split(",")[0]}`,
    };
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
      });
    } else {
      Swal.fire("Oops!!!", "Xảy ra lỗi!", "error");
    }
  };

  return (
    <div className="px-6">
      <h1 className="text-[35px] py-4 font-semibold border-b border-l-greyPrimary mb-8">
        Đăng tin mới
      </h1>
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-auto">
          <Address payload={payload} setPayload={setPayload} />
          <Overview payload={payload} setPayload={setPayload} />
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
            text={"Tạo mới"}
            textColor={"text-white"}
            styleOther={"font-bold text-[20px]"}
            onClick={handleSubmit}
          />
        </div>
        <div className="w-[35%]">map</div>
      </div>
      <div className="h-[100px]"></div>
      <div className="w-full">
        <Contact isFull />
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default CreatePost;
