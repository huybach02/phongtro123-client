import actionTypes from "./actionTypes";
import {apiLogin, apiRegister} from "../../services/auth";

export const register = (payload) => async (action) => {
  try {
    const res = await apiRegister(payload);
    if (res?.data.err === 0) {
      action({
        type: actionTypes.REGISTER_SUCCESS,
        data: res.data.token,
      });
    } else {
      action({
        type: actionTypes.REGISTER_FAIL,
        data: res.data.msg,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};

export const login = (payload) => async (action) => {
  try {
    const res = await apiLogin(payload);
    if (res?.data.err === 0) {
      action({
        type: actionTypes.LOGIN_SUCCESS,
        data: res.data.token,
      });
    } else {
      action({
        type: actionTypes.LOGIN_FAIL,
        data: res.data.msg,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
