import React from "react";

const InputReadOnly = ({label, value}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-bold">{label}</span>
      <input
        type="text"
        readOnly
        className="bg-gray-200 outline-none cursor-default p-2 rounded-md border border-gray-300"
        value={value || ""}
      />
    </div>
  );
};

export default InputReadOnly;
