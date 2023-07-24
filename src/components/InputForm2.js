import React from "react";

const InputForm2 = ({label, unit, value, setValue, name, small, type}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="title" className="font-bold">
        {label}
      </label>
      <div className="flex items-center">
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
        />
        {unit && (
          <span className="p-2 bg-gray-300 flex-none w-16 flex items-center justify-center border-2 border-gray-300 rounded-tr-md rounded-br-md">
            {unit}
          </span>
        )}
      </div>
      {small && <small className="opacity-70">{small}</small>}
    </div>
  );
};

export default InputForm2;
