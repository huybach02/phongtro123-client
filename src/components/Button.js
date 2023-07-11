import React from "react";

const Button = ({
  text,
  textColor,
  bgColor,
  styleOther,
  IconAfter,
  IconBefore,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`p-2 ${textColor || "text-black"} ${
        bgColor || "bg-bluePrimary"
      } outline-none rounded-lg flex items-center justify-between gap-2 ${styleOther}`}
      onClick={onClick}
    >
      <span>{IconBefore && <IconBefore size={20} />}</span>
      <span>{text}</span>
      <span>{IconAfter && <IconAfter size={20} />}</span>
    </button>
  );
};

export default Button;
