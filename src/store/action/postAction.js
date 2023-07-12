import {apiGetPosts, apiGetPostsLimit} from "../../services/post";
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

export const getPostsLimit = (page) => async (action) => {
  try {
    const res = await apiGetPostsLimit(page);
    if (res?.data?.err === 0) {
      action({
        type: actionTypes.GET_POSTS_LIMIT,
        posts: res?.data?.res?.rows,
        count: res?.data?.res?.count,
      });
    } else {
      action({
        type: actionTypes.GET_POSTS_LIMIT,
        msg: res.data.msg,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.GET_POSTS_LIMIT,
      posts: null,
    });
  }
};
