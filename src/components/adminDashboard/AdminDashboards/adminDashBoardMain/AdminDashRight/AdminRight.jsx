import React from "react";
import { CiSearch } from "react-icons/ci";
import one from "../../../../../assets/Framef.png"
import two from "../../../../../assets/Frames.png"
import three from "../../../../../assets/Framet.png"
import four from "../../../../../assets/Framefo.png"
import five from "../../../../../assets/Framefive.png"
import six from "../../../../../assets/Framesix.png"
import seven from "../../../../../assets/Framese.png"
import eight from "../../../../../assets/Frameight.png"
import nine from "../../../../../assets/Framenine.png"
import Track from "./AdminTrack";

const tracks = [
  {
    id: 1,
    image: one,
    title: "New User Registered",
    p: "sample@email.com ",
    x: "Verification Pending",
    time: "11:30"
  },
  {
    id: 2,
    image: two,
    title: "New User Verifie",
    p: "adaEden@email.com",
    x: "Adam Eden",
    time: "12:30"
  },
  {
    id: 3,
    image: three,
    title: "New Investment",
    p: "Sarah Lee Invested New ",
    x:"Investment in Rice",
    time: "2:30"
  },
  {
    id: 4,
    image: four,
    title: "Withdrawal",
    p: "Aminata withdrew",
    x: "ROI for second quarter",
    time: "3:00"
  },
  {
    id: 5,
    image: five,
    title: "Market Price Update",
    p: "Maize price increased by 10% in",
    x: " local markets.",
    time: "3:30"
  },
  {
    id: 6,
    image: six,
    title: "Issue reported",
    p: "layefa@gmail.com",
    x: " just reported an issue",
    time: "Monday"
  },
  {
    id: 7,
    image: seven,
    title: "Land preparation started",
    p: "Wheat Farming Project began soil preparation.",
    time: "Tues"
  },
  {
    id: 8,
    image: eight,
    title: "New Project launched",
    p: "Rice Farming Cycle 5 is now open for funding",
    time: "Weds"
  },
  {
    id: 9,
    image: nine,
    title: "Market Update",
    p: "Cocoa prices increased by 8",
    time: "1w"
  },
  {
    id: 10,
    image: nine,
    title: "Issue Reported",
    p: "layefa@gmail.com just",
     x: " reported an issue",
    time: "1w"
  },
  {
    id: 11,
    image: nine,
    title: "Land Preparation Started",
    p: "Wheat Farming Project",
    x: " began soil preparation",
    time: "1w"
  },
  {
    id: 12,
    image: nine,
    title: "New Project Launched",
    p: "Rice Farming Cycle 5 is now open",
    x: " for funding",
    time: "1w"
  },
]

const AdminRight = () => {
  return (
    <div className="py-3 pl-4 border-l-[2px] border-[#00000012]">
      <h1 className="font-sanns font-semibold text-base">Recent Activities</h1>
      <p className="font-sanns text-[#00000080] text-[13px] font-normal">
        5 new activities today
      </p>
      <div className="flex gap-4 items-center py-3">
        <div className="bg-[#FA9E734D] text-[#FA9E73] px-2 py-[2px] rounded-md font-medium text-[13px]">
          Today
        </div>
        <div className="text-[#00000080] font-medium text-[13px]">
          Yesterday
        </div>
        <div className="text-[#00000080] font-medium text-[13px]">
          This week
        </div>
      </div>

      <div className="border-[1px] py-1 mt-3 border-[#00000026]  w- relative rounded flex items-center">
        <CiSearch className="text-[#00000080] mr-2" size={20} />
        <input
          type="search"
          name=""
          id=""
          placeholder="Search..."
          className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
        />
      
      </div>
      <div className="py-6">
      <ul className="space-y-4" >
        {
          tracks.map((track) => (
            <li  key={track.id}>
              <Track track={track}/>
            </li>

          ))
        }
      </ul>
      </div>
    </div>
  );
};

export default AdminRight;