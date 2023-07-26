import React, {memo, useEffect, useState} from "react";
import Select from "./Select";
import {apiGetPublicPDistricts, apiGetPublicProvinces} from "../services/app";
import InputReadOnly from "./InputReadOnly";
import {useSelector} from "react-redux";

const Address = ({setPayload, invalidFields, setInvalidFields}) => {
  const {dataEdit} = useSelector((state) => state.post);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (dataEdit) {
      let addressArr = dataEdit?.address?.split(",");
      let foundProvince =
        provinces?.length > 0 &&
        provinces?.find(
          (item) =>
            item.province_name === addressArr[addressArr?.length - 1]?.trim()
        );
      setProvince(foundProvince ? foundProvince.province_id : "");
    } else {
      setProvince("");
    }
  }, [provinces, dataEdit]);

  useEffect(() => {
    if (dataEdit) {
      let addressArr = dataEdit?.address?.split(",");
      let foundDistrict =
        districts?.length > 0 &&
        districts?.find(
          (item) =>
            item.district_name === addressArr[addressArr.length - 2]?.trim()
        );
      setDistrict(foundDistrict ? foundDistrict.district_id : "");
    } else {
      setDistrict("");
    }
  }, [districts, dataEdit]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const res = await apiGetPublicProvinces();
      setProvinces(res?.data?.results);
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    setDistrict("");
    const fetchDistrict = async () => {
      const res = await apiGetPublicPDistricts(province);
      setDistricts(res?.data?.results);
    };
    province && fetchDistrict();
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      address: `${
        district
          ? `${
              districts?.find((item) => item.district_id === district)
                ?.district_name || ""
            }, `
          : ""
      } ${
        province
          ? `${
              provinces?.find((item) => item.province_id === province)
                ?.province_name || ""
            }`
          : ""
      }`,
      province: province
        ? `${
            provinces?.find((item) => item.province_id === province)
              ?.province_name || ""
          }`
        : "",
    }));
  }, [province, district]);

  return (
    <div>
      <h2 className="text-[24px] font-bold mb-5">Địa chỉ cho thuê</h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-8">
          <Select
            type="province"
            value={province}
            setValue={setProvince}
            label={"Tỉnh/Thành phố"}
            option={provinces}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
          />
          <Select
            type="district"
            value={district}
            setValue={setDistrict}
            label={"Quận/Huyện"}
            option={districts}
            reset={reset}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
          />
        </div>
      </div>
      <div className="mt-5">
        <InputReadOnly
          label={"Địa chỉ chính xác"}
          value={`${
            district
              ? `${
                  districts?.find((item) => item.district_id === district)
                    ?.district_name || ""
                }, `
              : ""
          }${
            province
              ? `${
                  provinces?.find((item) => item.province_id === province)
                    ?.province_name || ""
                }`
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default memo(Address);
