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
