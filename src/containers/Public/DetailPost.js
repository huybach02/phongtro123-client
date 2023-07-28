import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPostsLimit} from "../../store/action/postAction";
import Slider from "../../components/Slider";
import icons from "../../utils/icons";
import moment from "moment";
import {blobToBase64} from "../../utils/toBase64";
import RelativePost from "../../components/RelativePost";
import Loading from "../../components/Loading";

const {
  MdLocationOn,
  IoIosPricetag,
  RiCrop2Line,
  BsClock,
  BsHash,
  BsFillTelephoneFill,
  SiZalo,
} = icons;

const DetailPost = () => {
  const dispatch = useDispatch();
  const {postId} = useParams();
  const {posts} = useSelector((state) => state.post);
  console.log("posts: ", posts);

  useEffect(() => {
    postId && dispatch(getPostsLimit({id: postId}));
  }, [postId]);

  return (
    <div className="w-full flex gap-4">
      {posts.length > 0 && (
        <div className="w-[70%] bg-white text-[18px]">
          <Slider
            images={posts.length > 0 && JSON.parse(posts[0]?.images?.image)}
          />
          <div className="px-8">
            <h1 className="text-[24px] text-[#E13427] font-bold py-3">
              {posts[0]?.title}
            </h1>
            <div>
              <span>
                Chuyên mục:{" "}
                <strong className="text-bluePrimary font-bold underline">
                  {posts[0]?.overviews?.area}
                </strong>
              </span>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <MdLocationOn size={24} color="#1266DD" />
              <span>{posts[0]?.address}</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="flex items-center gap-2">
                <IoIosPricetag size={28} color="#1266DD" />
                <span className="text-[24px] font-bold text-greenPrimary">
                  {posts[0]?.attributes?.price}
                </span>
              </span>

              <span className="flex items-center gap-2">
                <RiCrop2Line size={24} color="#1266DD" />
                <span>{posts[0]?.attributes?.acreage}</span>
              </span>

              <span className="flex items-center gap-2">
                <BsClock size={24} color="#1266DD" />
                {posts[0]?.attributes?.published}
              </span>

              <span className="flex items-center gap-2">
                <BsHash size={24} color="#1266DD" />
                {posts[0]?.attributes?.hashtag}
              </span>
            </div>
            <div className="py-5">
              <h2 className="text-[24px] font-bold">Thông tin mô tả</h2>
              <div className="flex flex-col gap-3 mt-3">
                {/* {posts[0]?.description
                ? JSON.parse(posts[0]?.description)?.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))
                : ""} */}
                {posts[0]?.description
                  .replace("[", "")
                  .replace("]", "")
                  .slice(1, -1)
                  .split('","')
                  .map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
              </div>
            </div>
            <div className="py-5">
              <h2 className="text-[24px] font-bold">Đặc điểm tin đăng</h2>
              <table className="w-full">
                <tbody className="w-full">
                  <tr className=" w-full">
                    <td className="w-[250px] py-2 px-5">Mã tin: </td>
                    <td>{posts[0]?.overviews?.code}</td>
                  </tr>
                  <tr className="bg-greyPrimary w-full">
                    <td className="w-[250px] py-2 px-5">Khu vực: </td>
                    <td>{posts[0]?.overviews?.area}</td>
                  </tr>
                  <tr>
                    <td className="w-[250px] py-2 px-5">Loại tin rao: </td>
                    <td>{posts[0]?.overviews?.type}</td>
                  </tr>
                  <tr className="bg-greyPrimary w-full">
                    <td className="w-[250px] py-2 px-5">Đối tượng thuê: </td>
                    <td>{posts[0]?.overviews?.target}</td>
                  </tr>
                  <tr>
                    <td className="w-[250px] py-2 px-5">Gói tin: </td>
                    <td>{posts[0]?.overviews?.bonus}</td>
                  </tr>
                  <tr className="bg-greyPrimary w-full">
                    <td className="w-[250px] py-2 px-5">Ngày đăng: </td>
                    <td>
                      {moment(
                        posts[0]?.overviews?.createdAt?.split("T")[0]
                      ).format("DD/MM/YYYY")}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[250px] py-2 px-5">Ngày hết hạn: </td>
                    <td>
                      {moment(
                        posts[0]?.overviews?.expire?.split("T")[0]
                      ).format("DD/MM/YYYY") || ""}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="py-5">
              <h2 className="text-[24px] font-bold">Thông tin liên hệ</h2>
              <table className="w-full">
                <tbody className="w-full">
                  <tr className=" w-full">
                    <td className="w-[250px] py-2 px-5">Liên hệ: </td>
                    <td>{posts[0]?.user?.name}</td>
                  </tr>
                  <tr className="bg-greyPrimary w-full">
                    <td className="w-[250px] py-2 px-5">Điện thoại: </td>
                    <td>{posts[0]?.user?.phone}</td>
                  </tr>
                  <tr>
                    <td className="w-[250px] py-2 px-5">Zalo </td>
                    <td>{posts[0]?.user?.zalo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {posts.length > 0 && (
        <div className="w-[30%]">
          <div className="w-full bg-[#febb02] rounded-md py-3">
            <img
              src={
                blobToBase64(posts[0]?.user?.avatar) ||
                "https://phongtro123.com/images/default-user.png"
              }
              alt=""
              className="w-16 h-16 rounded-full object-cover mx-auto"
            />
            <h2 className="text-[18px] font-bold text-center mt-2">
              {posts[0]?.user?.name}
            </h2>
            <div className="flex items-center justify-center gap-1 py-1 w-[250px] bg-greenPrimary mx-auto rounded-md text-[22px] text-white font-bold mt-4">
              <BsFillTelephoneFill />
              <span>{posts[0]?.user?.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-1 w-[250px] bg-white mx-auto rounded-md text-[18px]  font-bold mt-4 cursor-pointer">
              <span className="p-1 rounded-full border border-black">
                <SiZalo size={30} />
              </span>
              <span>Nhắn Zalo</span>
            </div>
          </div>
          <div className="mt-5">
            <RelativePost />
          </div>
        </div>
      )}
      {posts.length === 0 && (
        <div className="mx-auto">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default DetailPost;
