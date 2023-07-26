import React, {memo} from "react";

const Select = ({
  label,
  option,
  value,
  setValue,
  type,
  reset,
  name,
  invalidFields,
  setInvalidFields,
}) => {
  const handleErrText = () => {
    let nameInvalid = invalidFields?.find((item) => item.name === name);
    let addressInvalid = invalidFields?.find(
      (item) => item.name === "province"
    );

    return (
      `${nameInvalid ? nameInvalid.message : ""}` ||
      `${addressInvalid ? addressInvalid.message : ""}`
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="select" className="font-bold">
        {label}
      </label>
      <select
        id="select"
        className="outline-none border border-gray-300 py-2 px-6 rounded-md"
        value={reset ? "" : value}
        onChange={(e) =>
          !name
            ? setValue && setValue(e.target.value)
            : setValue((prev) => ({...prev, [name]: e.target.value}))
        }
        onFocus={() => setInvalidFields([])}
      >
        <option value="">-- Chọn {label} --</option>
        {option?.map((item) => (
          <option
            key={
              type === "province"
                ? item.province_id
                : type === "district"
                ? item.district_id
                : item?.code
            }
            value={
              type === "province"
                ? item.province_id
                : type === "district"
                ? item.district_id
                : item?.code
            }
          >
            {type === "province"
              ? item.province_name
              : type === "district"
              ? item.district_name
              : item.value}
          </option>
        ))}
      </select>
      {invalidFields && (
        <small className="text-red-500">{handleErrText()}</small>
      )}
    </div>
  );
};

export default memo(Select);
