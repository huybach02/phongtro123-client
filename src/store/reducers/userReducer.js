import actionTypes from "../action/actionTypes";

const initState = {
  currentUserData: {},
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_USER:
      return {
        ...state,
        currentUserData: action.currentUserData || {},
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        currentUserData: {},
      };

    default:
      return state;
  }
};

export default userReducer;
