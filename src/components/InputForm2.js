import React from "react";

const InputForm2 = ({
  label,
  unit,
  value,
  setValue,
  name,
  small,
  type,
  invalidFields,
  setInvalidFields,
  flexRow,
}) => {
  return (
    <div
      className={`${
        !flexRow ? "flex flex-col gap-1" : "flex items-center justify-between"
      }`}
    >
      <label htmlFor="title" className="font-bold w-[200px] flex-none">
        {label}
      </label>
      <div className="flex items-center flex-auto">
        <input
          type={type || "text"}
          id="title"
          className={`outline-none border border-gray-300 py-2 px-2 flex-auto ${
            unit ? "rounded-tl-md rounded-bl-md" : "rounded-md"
          }`}
          value={value}
          onChange={(e) =>
            setValue((prev) => ({...prev, [name]: e.target.value}))
          }
          onFocus={() => setInvalidFields && setInvalidFields([])}
        />
        {unit && (
          <span className="p-2 bg-gray-300 flex-none w-16 flex items-center justify-center border-2 border-gray-300 rounded-tr-md rounded-br-md">
            {unit}
          </span>
        )}
      </div>
      {small && <small className="opacity-70">{small}</small>}
      <small className="text-red-500">
        {invalidFields?.some((item) => item.name === name) &&
          invalidFields?.find((item) => item.name === name)?.message}
      </small>
    </div>
  );
};

export default InputForm2;
