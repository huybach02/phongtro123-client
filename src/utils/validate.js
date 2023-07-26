const validate = (payload, setInvalidFields) => {
  let invalid = 0;
  let fields = Object.entries(payload);

  fields.forEach((item) => {
    if (item[1] === "") {
      setInvalidFields((prev) => [
        ...prev,
        {
          name: item[0],
          message: "Bạn không được bỏ trống trường này",
        },
      ]);
      invalid++;
    }
  });
  fields.forEach((item) => {
    switch (item[0]) {
      case "password":
        if (item[1].length < 6) {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              message: "Mật khẩu tối thiểu phải có 6 ký tự",
            },
          ]);
          invalid++;
        }
        break;

      case "phone":
        if (!+item[1]) {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              message: "Số điện thoại không hợp lệ",
            },
          ]);
          invalid++;
        }
        break;

      case "priceNumber":
        if (+item[1] < 0) {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              message: "Giá cho thuê không hợp lệ",
            },
          ]);
          invalid++;
        }
        break;

      case "areaNumber":
        if (+item[1] < 0 || +item[1] === 0) {
          setInvalidFields((prev) => [
            ...prev,
            {
              name: item[0],
              message: "Diện tích không hợp lệ",
            },
          ]);
          invalid++;
        }
        break;

      default:
        break;
    }
  });
  return invalid;
};

export default validate;
