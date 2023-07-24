import axiosConfig from "../axiosConfig";
import axios from "axios";

export const apiGetPrices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "get",
        url: "/api/v1/price/all",
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetAreas = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "get",
        url: "/api/v1/area/all",
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axiosConfig({
        method: "get",
        url: "/api/v1/province/all",
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPublicProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axios({
        method: "get",
        url: "https://vapi.vnappmob.com/api/province",
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPublicPDistricts = (provinceId) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = axios({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
      });

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
