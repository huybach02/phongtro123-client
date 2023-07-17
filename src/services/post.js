import axiosConfig from "../axiosConfig";

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "get",
        url: "/api/v1/post/all",
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsLimit = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "get",
        url: `/api/v1/post/limit`,
        params: query,
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetNewPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "get",
        url: `/api/v1/post/new-post`,
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
