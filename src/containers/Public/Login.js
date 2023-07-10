import React, {useEffect, useState} from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register, login} from "../../store/action/authAction";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLogin, msg, update} = useSelector((state) => state.auth);

  const location = useLocation();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  const [invalidFields, setInvalidFields] = useState([]);

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    setInvalidFields([]);
  }, [isRegister]);

  useEffect(() => {
    isLogin && navigate("/");
  }, [isLogin]);

  useEffect(() => {
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg, update]);

  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload);
    if (invalids === 0) {
      isRegister ? dispatch(register(payload)) : dispatch(login(payload));
    }
  };

  const validate = (payload) => {
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

        default:
          break;
      }
    });
    return invalid;
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-lg shadow-sm">
      <h3 className="font-bold text-[28px] text-center mb-5">
        {isRegister ? "ĐĂNG KÝ TÀI KHOẢN" : "ĐĂNG NHẬP"}
      </h3>

      <div className="w-full flex flex-col gap-4">
        {isRegister && (
          <InputForm
            label={"HỌ TÊN"}
            value={payload.name}
            setValue={setPayload}
            nameInput={"name"}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
          />
        )}
        <InputForm
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          nameInput={"phone"}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />
        <InputForm
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          nameInput={"password"}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
          type={"password"}
        />
        <Button
          text={!isRegister ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
          styleOther={"font-semibold mt-3"}
          onClick={handleSubmit}
        />
      </div>

      <div className="flex items-center justify-between mt-5">
        {isRegister ? (
          <span>
            Bạn đã có tài khoản ?{" "}
            <span
              className="text-bluePrimary hover:text-hover cursor-pointer"
              onClick={() => {
                setIsRegister(false);
                setPayload({
                  phone: "",
                  password: "",
                  name: "",
                });
              }}
            >
              Đăng nhập ngay
            </span>
          </span>
        ) : (
          <>
            <span className="text-bluePrimary hover:text-hover cursor-pointer">
              Bạn quên mật khẩu ?
            </span>
            <span
              className="text-bluePrimary hover:text-hover cursor-pointer"
              onClick={() => {
                setIsRegister(true);
                setPayload({
                  phone: "",
                  password: "",
                  name: "",
                });
              }}
            >
              Tạo tài khoản mới
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
