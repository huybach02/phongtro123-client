import {getNumber} from "./getNumber";

export const getCode = (total) => {
  let arr = [];
  return total.map((item) => {
    let arrMaxMin = getNumber(item.value);
    if (arrMaxMin.length === 1) {
      arr.push(arrMaxMin[0]);
    }
    let sortedArr = arr.sort();
    return {
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max:
        sortedArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[0]
          : sortedArr.indexOf(arrMaxMin[0]) === 1
          ? 999999
          : arrMaxMin[1],
    };
  });
};

export const getCodeFromMinMax = (arrMinMax, prices) => {
  const pricesWithMinMax = getCode(prices);
  return pricesWithMinMax.filter(
    (item) =>
      (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||
      (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])
  );
};
