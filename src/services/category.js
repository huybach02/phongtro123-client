import axiosConfig from "../axiosConfig";

export const apiGetCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "get",
        url: "/api/v1/category/all",
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
