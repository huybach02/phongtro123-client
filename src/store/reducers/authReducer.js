import actionTypes from "../action/actionTypes";

const initState = {
  isLogin: false,
  token: null,
  msg: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: action.data,
        msg: "",
      };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLogin: false,
        msg: action.data,
        token: null,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: null,
        msg: "",
      };
    default:
      return state;
  }
};

export default authReducer;
