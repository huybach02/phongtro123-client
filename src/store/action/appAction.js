import {apiGetCategories} from "../../services/category";
import actionTypes from "./actionTypes";

export const getCategories = () => async (action) => {
  try {
    const res = await apiGetCategories();
    if (res?.data?.err === 0) {
      action({
        type: actionTypes.GET_CATEGORIES,
        categories: res?.data?.res,
      });
    } else {
      action({
        type: actionTypes.GET_CATEGORIES,
        msg: res.data.msg,
        categories: null,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.GET_CATEGORIES,
      categories: null,
    });
  }
};
