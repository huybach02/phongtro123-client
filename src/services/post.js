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
