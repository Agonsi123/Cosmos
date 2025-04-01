import React from "react";
import bell from "../../../assets/bell.png";
import wave from "../../../assets/wave.png";
import face from "../../../assets/face.jpeg";
import { CiSearch } from "react-icons/ci";
import ProgressIndicator from "./ProgressBar";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";

const UserDashBoardHeader = () => {
  return (
    <div className="px-4 py-8">
      <div className=" flex justify-between gap-96 items-center ">
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={face} alt="face" />
          <div>
            <h2 className="text-[#1E1E1E] font-semibold text-lg">
              Ojiteli Kosi
            </h2>
            <div className="flex items-center gap-3">
              <p className="text-[#00000080] font-normal text-sm">
                Welcome back to Cosmos
              </p>
              <img src={wave} alt="wave" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <button className="text-[#1BA019] mt-4"><IoIosNotifications size={25}/></button>
          </div>
          <div className="border-[1px] py-1 mt-3 border-[#1BA019] relative rounded flex items-center">
            <CiSearch className="text-[#1BA019] mr-2" size={20} />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className=" placeholder:text-[#1BA019] placeholder:font-medium placeholder:text-base"
            />
          </div>
        </div>
      </div>
      <h1 className="font-sanns py-6 font-medium text-base">
        Verification Process..{" "}
        <span className="text-[#1BA019] text-2xl">75%</span>
      </h1>
      <div className="">
        <ProgressIndicator progress={75} />
      </div>
      <div className="flex justify-between py-4 items-center space-x-3">
        <div className="relative border-2 w-full rounded-lg py-1.5 pl-2 ">
          <select className="appearance-none" name="timeframe" id="timeframe">
            <option value="time"><span className="font-sanns font-medium text-base text-[#000000B2]" >Investment:</span> <span className="font-sanns font-medium text-base text-[#000000]">Active</span></option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <RiArrowDownSFill/>
          </div>
        </div>
        <div className="relative border-2 w-full rounded-lg py-1.5 pl-2 ">
          <select className="appearance-none" name="timeframe" id="timeframe">
            <option value="time"><span className="font-sanns font-medium text-base text-[#000000B2]" >Crops:</span> <span className="font-sanns font-medium text-base text-[#000000]">All</span></option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <RiArrowDownSFill/>
          </div>
        </div>
        <div className="relative border-2 w-full rounded-lg py-6 pl-2 ">
          <select className="appearance-none" name="timeframe" id="timeframe">
            <option value="time"><span className="font-sanns font-medium text-base text-[#000000B2]" >Timeframe:</span> <span className="font-sanns font-medium text-base text-[#000000]">All-time</span></option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <RiArrowDownSFill/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserDashBoardHeader;
