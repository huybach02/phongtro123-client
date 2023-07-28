import React from "react";

const InputReadOnly = ({label, value, flexRow, isPhoneNumber}) => {
  return (
    <div
      className={`${!flexRow ? "flex flex-col gap-1" : "flex justify-between"}`}
    >
      <span className="font-bold w-[200px] flex-none">{label}</span>
      <div className="flex-auto flex flex-col">
        <input
          type="text"
          readOnly
          className="bg-gray-200 outline-none cursor-default p-2 rounded-md border border-gray-300 "
          value={value || ""}
        />
        {isPhoneNumber && (
          <span className="text-bluePrimary w-fit py-3 block hover:underline cursor-pointer">
            Đổi số điện thoại
          </span>
        )}
      </div>
    </div>
  );
};

export default InputReadOnly;
