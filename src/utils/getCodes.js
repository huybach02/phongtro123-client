import {getNumber} from "./getNumber";

export const getCode = (total, min, max) => {
  return total?.map((item) => {
    let arrMaxMin = getNumber(item.value);
    return {
      ...item,
      min:
        arrMaxMin.length === 2
          ? +arrMaxMin[0]
          : +arrMaxMin[0] === min
          ? 0
          : +arrMaxMin[0],
      max:
        arrMaxMin.length === 2
          ? +arrMaxMin[1]
          : +arrMaxMin[0] === max
          ? 999999
          : +arrMaxMin[0],
    };
  });
};

export const getCodeFromMinMax = (number, prices, min, max) => {
  const pricesWithMinMax = getCode(prices, min, max);
  return pricesWithMinMax?.filter(
    (item) => item.min <= number && number < item.max
  );
};
