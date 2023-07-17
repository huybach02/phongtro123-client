import React, {useEffect, useState} from "react";
import icons from "../utils/icons";

const {HiArrowNarrowLeft} = icons;

const Modal = ({setIsShowModal, title, content, name}) => {
  const [persent1, setPersent1] = useState(0);
  const [persent2, setPersent2] = useState(100);

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

  const handleClickTrack = (e) => {
    e.stopPropagation();
    const activeTrackElement = document.getElementById("track-active");
    const trackElement = document.getElementById("track");
    const trackValue = trackElement.getBoundingClientRect();
    let percent = Math.round(
      ((e.clientX - trackValue.left) / trackValue.width) * 100
    );
    if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
      activeTrackElement.style.left = `${percent}%`;
      setPersent1(percent);
    } else {
      activeTrackElement.style.right = `${100 - percent}%`;
      setPersent2(percent);
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10 flex items-center justify-center"
    >
      <div onClick={handleClickOnside} className="w-1/3 bg-white rounded-lg">
        <div className="h-[45px] border-b border-l-greyPrimary flex items-center justify-around relative">
          <div
            onClick={handleClickOutside}
            className="absolute left-2 top-1 cursor-pointer"
          >
            <HiArrowNarrowLeft size={40} />
          </div>
          <span className="uppercase font-bold">{title}</span>
        </div>
        {(name === "categories" || name === "provinces") && (
          <div className="p-4 flex flex-col ">
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
                />
                <label className="cursor-pointer" htmlFor={item.code}>
                  {item.value}
                </label>
              </span>
            ))}
          </div>
        )}
        {(name === "prices" || name === "areas") && (
          <div className="p-12">
            <div className="flex flex-col items-center justify-center relative">
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
                onChange={(e) => setPersent1(+e.target.value)}
              />
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={persent2}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => setPersent2(+e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
