import React, {memo, useEffect, useState} from "react";
import icons from "../utils/icons";
import {getNumber} from "../utils/getNumber";
import {getCodeFromMinMax} from "../utils/getCodes";

const {HiArrowNarrowLeft} = icons;

const Modal = ({
  setIsShowModal,
  title,
  content,
  name,
  handleSubmit,
  query,
  arrMinMax,
  defaultText,
}) => {
  const [persent1, setPersent1] = useState(
    (name === "price"
      ? arrMinMax?.priceArr && arrMinMax?.priceArr[0]
      : arrMinMax?.areaArr && arrMinMax?.areaArr[0]) || 0
  );
  const [persent2, setPersent2] = useState(
    (name === "price"
      ? arrMinMax?.priceArr && arrMinMax?.priceArr[1]
      : arrMinMax?.areaArr && arrMinMax?.areaArr[1]) || 100
  );
  const [isActive, setIsAvtive] = useState("");

  const handleClickOutside = (e) => {
    e.stopPropagation();
    setIsShowModal(false);
  };

  const handleClickOnside = (e) => {
    e.stopPropagation();
    setIsShowModal(true);
  };

  useEffect(() => {
    const activeTrackElement = document.getElementById("track-active");
    if (activeTrackElement) {
      if (persent2 < persent1) {
        activeTrackElement.style.left = `${persent2}%`;
        activeTrackElement.style.right = `${100 - persent1}%`;
      } else {
        activeTrackElement.style.left = `${persent1}%`;
        activeTrackElement.style.right = `${100 - persent2}%`;
      }
    }
  }, [persent1, persent2]);

  const handleClickTrack = (e, value) => {
    e.stopPropagation();
    const activeTrackElement = document.getElementById("track-active");
    const trackElement = document.getElementById("track");
    const trackValue = trackElement.getBoundingClientRect();
    let percent = value
      ? value
      : Math.round(((e.clientX - trackValue.left) / trackValue.width) * 100);
    if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
      activeTrackElement.style.left = `${percent}%`;
      setPersent1(percent);
    } else {
      activeTrackElement.style.right = `${100 - percent}%`;
      setPersent2(percent);
    }
  };

  const handleClick = (value) => {
    setIsAvtive(value);
    let arrMaxMin = getNumber(value);
    if (arrMaxMin.length === 1) {
      if (+arrMaxMin[0] === 1 || +arrMaxMin[0] === 20) {
        setPersent1(0);
        setPersent2(convertToPercent(+arrMaxMin[0]));
      }
      if (+arrMaxMin[0] === 15 || +arrMaxMin[0] === 90) {
        setPersent1(100);
        setPersent2(100);
      }
    } else {
      setPersent1(convertToPercent(+arrMaxMin[0]));
      setPersent2(convertToPercent(+arrMaxMin[1]));
    }
  };

  const handleBeforeSubmit = (e) => {
    let arrMinMax =
      persent1 === persent2 && persent1 === 100
        ? [convertToTarget(persent1 <= persent2 ? persent1 : persent2), 9999999]
        : persent1 < persent2
        ? [convertToTarget(persent1), convertToTarget(persent2)]
        : [convertToTarget(persent2), convertToTarget(persent1)];
    // const gaps = getCodeFromMinMax(arrMinMax, content);
    handleSubmit(
      e,
      {
        [`${name}Number`]: arrMinMax,
        [name]: `Từ ${arrMinMax[0]} ${
          persent1 === persent2 && persent1 === 100
            ? `${name === "price" ? "triệu trở lên" : "m2 trở lên"}`
            : `đến ${arrMinMax[1]} ${name === "price" ? "triệu" : "m2"}`
        }`,
      },
      {
        [`${name}Arr`]: [persent1, persent2],
      }
    );
  };
  const convertToTarget = (percent) => {
    return name === "price"
      ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
      : Math.ceil(Math.round(percent * 0.9) / 5) * 5;
  };
  const convertToPercent = (value) => {
    let target = name === "price" ? 15 : 90;
    return Math.floor((value / target) * 100);
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10 flex items-center justify-center"
    >
      <div
        onClick={handleClickOnside}
        className="w-[700px] h-[500px] bg-white rounded-lg relative"
      >
        <div className="h-[45px] border-b border-l-greyPrimary flex items-center justify-around relative">
          <div
            onClick={handleClickOutside}
            className="absolute left-2 top-1 cursor-pointer"
          >
            <HiArrowNarrowLeft size={40} />
          </div>
          <span className="uppercase font-bold">{title}</span>
        </div>
        {(name === "category" || name === "province") && (
          <div className="p-4 flex flex-col ">
            <span className="flex items-center gap-2 py-3 border-b border-l-greyPrimary last:border-none">
              <input
                type="radio"
                name={name}
                id={defaultText}
                value={defaultText || ""}
                className="cursor-pointer"
                onClick={(e) =>
                  handleSubmit(e, {
                    [name]: defaultText,
                    [`${name}Code`]: null,
                  })
                }
                defaultChecked={!query[`${name}Code`] ? true : false}
              />
              <label className="cursor-pointer" htmlFor={defaultText}>
                {defaultText}
              </label>
            </span>
            {content?.map((item) => (
              <span
                key={item.code}
                className="flex items-center gap-2 py-3 border-b border-l-greyPrimary last:border-none"
              >
                <input
                  type="radio"
                  name={name}
                  id={item.code}
                  value={item.code}
                  className="cursor-pointer"
                  onClick={(e) =>
                    handleSubmit(e, {
                      [name]: item.value,
                      [`${name}Code`]: item.code,
                    })
                  }
                  defaultChecked={
                    item.code === query[`${name}Code`] ? true : false
                  }
                />
                <label className="cursor-pointer" htmlFor={item.code}>
                  {item.value}
                </label>
              </span>
            ))}
          </div>
        )}
        {(name === "price" || name === "area") && (
          <>
            <div className="p-12 pt-[100px]">
              <div className="flex flex-col items-center justify-center relative">
                <div className="z-30 absolute top-[-70px] font-bold text-[22px] text-hover">
                  {persent1 === 100 && persent2 === 100
                    ? `${name === "price" ? "Trên 15 triệu" : "Trên 90m2"}`
                    : `Từ ${
                        persent1 <= persent2
                          ? convertToTarget(persent1)
                          : convertToTarget(persent2)
                      } - ${
                        persent2 >= persent1
                          ? convertToTarget(persent2)
                          : convertToTarget(persent1)
                      } ${name === "price" ? "triệu" : "m2"}`}
                </div>
                <div
                  onClick={handleClickTrack}
                  id="track"
                  className="slider-track w-full h-[6px] bg-gray-300 absolute top-0 bottom-0 rounded-full cursor-pointer"
                ></div>
                <div
                  onClick={handleClickTrack}
                  id="track-active"
                  className="slider-track-active h-[6px] bg-orange-500 absolute top-0 bottom-0 rounded-full cursor-pointer"
                ></div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={persent1}
                  className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                  onChange={(e) => {
                    setPersent1(+e.target.value);
                    isActive && setIsAvtive("");
                  }}
                />
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={persent2}
                  className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                  onChange={(e) => {
                    setPersent2(+e.target.value);
                    isActive && setIsAvtive("");
                  }}
                />
                <div className="absolute z-30 top-7 left-0 right-0 flex justify-between items-center">
                  <span
                    className="ml-[-2px] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClickTrack(e, 0);
                    }}
                  >
                    0
                  </span>
                  <span
                    className={`cursor-pointer ${
                      name === "price" ? "mr-[-14px]" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClickTrack(e, 100);
                    }}
                  >
                    {name === "price" ? "15 triệu+" : "90"}
                  </span>
                </div>
              </div>
            </div>
            <div className="px-12 py-8 flex flex-col gap-5">
              <span className="font-bold">Chọn nhanh</span>
              <div className="flex items-center flex-wrap w-full gap-3">
                {content?.map((item) => (
                  <button
                    key={item.code}
                    className={`px-8 py-1 rounded-md cursor-pointer ${
                      isActive === item.value
                        ? "bg-bluePrimary text-white"
                        : "bg-greyPrimary text-black"
                    }`}
                    onClick={() => handleClick(item.value)}
                  >
                    {item.value}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="w-full absolute bottom-0 py-3 bg-[#ffa500] font-bold rounded-bl-lg rounded-br-lg"
              onClick={handleBeforeSubmit}
            >
              ÁP DỤNG
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Modal);
