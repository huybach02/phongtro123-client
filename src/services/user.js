import axiosConfig from "../axiosConfig";

export const apiGetCurrentUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "get",
        url: "/api/v1/user/get-current",
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
