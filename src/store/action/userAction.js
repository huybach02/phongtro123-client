import {apiGetCurrentUser} from "../../services/user";
import actionTypes from "./actionTypes";

export const getCurrentUser = () => async (action) => {
  try {
    const res = await apiGetCurrentUser();
    if (res?.data?.err === 0) {
      action({
        type: actionTypes.GET_CURRENT_USER,
        currentUserData: res?.data?.res,
      });
    } else {
      action({
        type: actionTypes.GET_CURRENT_USER,
        msg: res.data.msg,
        currentUserData: null,
      });
      action({
        type: actionTypes.LOGOUT,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.GET_CURRENT_USER,
      currentUserData: null,
      msg: error,
    });
    action({
      type: actionTypes.LOGOUT,
    });
  }
};
