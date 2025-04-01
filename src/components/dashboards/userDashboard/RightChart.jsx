import React from "react";

const RightChart = ({ name, percentage, color, img }) => {
  return (
    <div className="py-6  px-4 ">
      <div className="flex gap-3 items-center text-sm  font-medium">
        <img src={img} alt="" />
        <div className="w-full space-x-2">
          <span>{name}</span>
          <div className="w-full bg-gradient-to-r from-[#FFBF1A] to-[#FF4080]  rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${color}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
        <span className="font-medium w-full text-sm">{percentage}% to goal</span>
      </div>
    </div>
  );
};

export default RightChart;
