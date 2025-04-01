import React from "react";
import path from "../../../assets/path.png";
import pathh from "../../../assets/Pathh.png";

const paths = [
  {
    id: 1,
    title: "Account Balance",
    Amount: 5000,
    img: path,
  },

  {
    id: 2,
    title: "Monthly Earnings",
    Amount: 500,
    img: path,
  },
  {
    id: 3,
    title: "Projected ROI",
    Amount: 2000,
    img: path,
  },
  {
    id: 4,
    title: "Projected Earnings",
    Amount: 5000,
    img: path,
  },
];
const Path = () => {
  return (
    <div>
      <div className="border-[#1BA019] px-4 rounded-lg">
        <ul className="flex  gap-16 items-center justify-between">
          {paths.map((path) => {
            return (
              <li
                className="border-[#1BA019] px-3  w-full rounded-lg border-[1px]"
                key={path.id}
              >
                <div className="py-3 space-y-2 text-left">
                  <p className="text-[#000000] font-semibold">{path.title}</p>
                  <p className="text-[#000000] font-semibold">{path.Amount}</p>
                  <div className="relative">
                    <img
                      className="text-[#1BA019] "
                      src={path.img}
                      alt="path"
                    />
                    <img
                      className="absolute top-0 right-4"
                      src={pathh}
                      alt="h"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Path;
