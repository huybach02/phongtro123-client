import {apiGetAreas, apiGetPrices} from "../../services/app";
import {apiGetCategories} from "../../services/category";
import actionTypes from "./actionTypes";

export const getCategories = () => async (action) => {
  try {
    const res = await apiGetCategories();
    if (res?.data?.err === 0) {
      action({
        type: actionTypes.GET_CATEGORIES,
        categories: res?.data?.res,
      });
    } else {
      action({
        type: actionTypes.GET_CATEGORIES,
        msg: res.data.msg,
        categories: null,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.GET_CATEGORIES,
      categories: null,
    });
  }
};

export const getPrices = () => async (action) => {
  try {
    const res = await apiGetPrices();
    if (res?.data?.err === 0) {
      action({
        type: actionTypes.GET_PRICES,
        prices: res?.data?.res.sort((a, b) => +a.order - +b.order),
      });
    } else {
      action({
        type: actionTypes.GET_PRICES,
        msg: res.data.msg,
        prices: null,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.GET_PRICES,
      prices: null,
    });
  }
};

export const getAreas = () => async (action) => {
  try {
    const res = await apiGetAreas();
    if (res?.data?.err === 0) {
      action({
        type: actionTypes.GET_AREA,
        areas: res?.data?.res.sort((a, b) => +a.order - +b.order),
      });
    } else {
      action({
        type: actionTypes.GET_AREA,
        msg: res.data.msg,
        areas: null,
      });
    }
  } catch (error) {
    action({
      type: actionTypes.GET_AREA,
      areas: null,
    });
  }
};
