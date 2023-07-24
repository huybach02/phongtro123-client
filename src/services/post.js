import axiosConfig from "../axiosConfig";
import axios from "axios";

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

export const apiUploadImages = (images) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axios({
        method: "post",
        url: `https://api.cloudinary.com/v1_1/dveqjgj4l/image/upload`,
        data: images,
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });

export const apiCreatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "post",
        url: `/api/v1/post/create-post`,
        data: payload,
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
