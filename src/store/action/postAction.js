import {apiGetPosts} from "../../services/post";
import actionTypes from "./actionTypes";

export const getPosts = () => async (action) => {
  try {
    const res = await apiGetPosts();
    if (res?.data?.err === 0) {
      action({
        type: actionTypes.GET_POSTS,
        posts: res?.data?.res,
      });
    } else {
      action({
        type: actionTypes.GET_POSTS,
        msg: res.data.msg,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};
