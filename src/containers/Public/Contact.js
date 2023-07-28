import React, {useState} from "react";
import InputForm2 from "../../components/InputForm2";
import Button from "../../components/Button";
import Swal from "sweetalert2";

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    desc: "",
  });
  const [invalidFields, setInvalidFields] = useState([]);

  const handleSubmit = (params) => {
    Swal.fire(
      "Gửi liên hệ thành công!!!",
      "Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất",
      "success"
    ).then(() => {
      setValue({
        name: "",
        phone: "",
        desc: "",
      });
    });
  };

  return (
    <div>
      <h1 className="text-[28px] font-bold mb-5">Liên hệ với chúng tôi</h1>
      <div className="flex items-center justify-between gap-8">
        <div className="text-[20px] flex flex-col gap-3 w-1/2 bg-contact p-8 text-white rounded-3xl">
          <strong>Thông tin liên hệ</strong>
          <p>
            Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa
            chọn PhongTro123.Com
          </p>
          <span>
            <strong>Điện thoại:</strong> 0917 686 101
          </span>
          <span>
            <strong>Email:</strong> cskh.phongtro123@gmail.com
          </span>
          <span>
            <strong>Zalo:</strong> 0917 686 101
          </span>
          <span>
            <strong>Địa chỉ:</strong> LD-06.04, Toà nhà Lexington Residence, Số
            67 Mai Chí Thọ, Phường An Phú, Quận 2, Tp. Hồ Chí Minh.
          </span>
        </div>
        <div className="bg-white w-1/2  p-8 rounded-lg flex flex-col gap-3">
          <strong className="text-[20px]">Liên hệ trực tuyến</strong>
          <InputForm2
            label={"HỌ TÊN CỦA BẠN"}
            value={value.name}
            setValue={setValue}
            name={"name"}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
          />
          <InputForm2
            label={"SỐ ĐIỆN THOẠI"}
            value={value.phone}
            setValue={setValue}
            name={"phone"}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="desc" className="font-bold">
              NỘI DUNG
            </label>
            <textarea
              type="text"
              id="desc"
              className="outline-none border border-gray-300 py-2 px-2 rounded-md"
              rows="3"
              value={value.desc}
              onChange={setValue}
            />
          </div>
          <div className="mt-5">
            <Button
              text={"Gửi liên hệ"}
              textColor={"text-white"}
              styleOther={"font-bold text-[18px] w-full"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
