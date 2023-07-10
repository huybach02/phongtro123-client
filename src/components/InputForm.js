import React from "react";

const InputForm = ({
  label,
  value,
  setValue,
  type,
  invalidFields,
  setInvalidFields,
}) => {
  return (
    <div>
      <label htmlFor="phone" className="text-[14px] font-semibold">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="w-full outline-none bg-input p-2 rounded-lg mt-2"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({...prev, [type]: e.target.value}))
        }
        onFocus={() => setInvalidFields([])}
      />
      {invalidFields.length > 0 &&
        invalidFields.some((item) => item.name === type) && (
          <span className="text-red-500 italic text-[14px]">
            {invalidFields.find((item) => item.name === type)?.message}
          </span>
        )}
    </div>
  );
};

export default InputForm;
