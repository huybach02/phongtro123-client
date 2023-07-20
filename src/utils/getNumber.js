export const getNumber = (string) => {
  return string
    ?.replace("m", "")
    ?.split(" ")
    ?.filter((item) => !isNaN(+item));
};
