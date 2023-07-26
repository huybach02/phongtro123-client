import actionTypes from "../action/actionTypes";

const initState = {
  posts: [],
  msg: "",
  count: 0,
  newPosts: [],
  postOfCurrentUser: [],
  dataEdit: null,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
    case actionTypes.GET_POSTS_LIMIT:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || "",
        count: action.count || 0,
      };
    case actionTypes.GET_NEW_POSTS:
      return {
        ...state,
        newPosts: action.newPosts || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_POSTS_LIMIT_ADMIN:
      return {
        ...state,
        postOfCurrentUser: action.posts || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_DATA_EDIT:
      return {
        ...state,
        dataEdit: action.dataEdit || null,
      };
    case actionTypes.RESET_DATA_EDIT:
      return {
        ...state,
        dataEdit: null,
      };

    default:
      return state;
  }
};

export default postReducer;
