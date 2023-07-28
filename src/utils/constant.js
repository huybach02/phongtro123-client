import icons from "./icons";

const {IoIosCreate, FaUserCircle, FaClipboardList, MdContactSupport} = icons;

export const path = {
  HOME: "/*",
  HOME__PAGE: ":page",
  LOGIN: "login",
  CHO_THUE_CAN_HO: "cho-thue-can-ho",
  CHO_THUE_PHONG_TRO: "cho-thue-phong-tro",
  CHO_THUE_MAT_BANG: "cho-thue-mat-bang",
  NHA_CHO_THUE: "nha-cho-thue",
  DETAIL_POST__TITLE__POST_ID: "chi-tiet/:title/:postId",
  SEARCH: "tim-kiem",
  SYSTEM: "/he-thong/*",
  CREATE_POST: "tao-moi-bai-dang",
  MANAGE_POST: "quan-ly-bai-dang",
  EDIT_ACCOUNT: "sua-thong-tin-ca-nhan",
  CONTACT: "lien-he",
  DETAIL: "chi-tiet/*",
  // CHO_THUE_CAN_HO__DETAIL_POST__TITLE__POST_ID:
  //   "cho-thue-can-ho/chi-tiet/:title/:postId",
};

export const formatVietnameseToSlug = (string) => {
  return string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
};

export const menuManage = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/he-thong/tao-moi-bai-dang",
    icon: <IoIosCreate />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/he-thong/quan-ly-bai-dang",
    icon: <FaClipboardList />,
  },
  {
    id: 3,
    text: "Thông tin tài khoản",
    path: "/he-thong/sua-thong-tin-ca-nhan",
    icon: <FaUserCircle />,
  },
];

export const menuSidebar = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/he-thong/tao-moi-bai-dang",
    icon: <IoIosCreate />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/he-thong/quan-ly-bai-dang",
    icon: <FaClipboardList />,
  },
  {
    id: 3,
    text: "Sửa thông tin cá nhân",
    path: "/he-thong/sua-thong-tin-ca-nhan",
    icon: <FaUserCircle />,
  },
  {
    id: 4,
    text: "Liên hệ",
    path: "/lien-he",
    icon: <MdContactSupport />,
  },
];
