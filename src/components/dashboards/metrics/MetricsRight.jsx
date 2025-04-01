import React from "react";
import { CiSearch } from "react-icons/ci";
import one from "../../../assets/Framef.png"
import two from "../../../assets/Frames.png"
import three from "../../../assets/Framet.png"
import four from "../../../assets/Framefo.png"
import five from "../../../assets/Framefive.png"
import six from "../../../assets/Framesix.png"
import seven from "../../../assets/Framese.png"
import eight from "../../../assets/Frameight.png"
import nine from "../../../assets/Framenine.png"

const tracks = [
  {
    id: 1,
    image: one,
    title: "Maize Harvested",
    p: "Farmland: Green Valley Farms Yield: 200 Tons.",
    time: "11:30"
  },
  {
    id: 2,
    image: two,
    title: "Investor Milestone",
    p: "100th investor joined the 'Rice Farming Project'",
    time: "12:30"
  },
  {
    id: 3,
    image: three,
    title: "Crop Growth update",
    p: "Cassava Plantation reached 80% maturity.",
    time: "2:30"
  },
  {
    id: 4,
    image: four,
    title: "ROI credited",
    p: "Soybean Investment credited to wallets.",
    time: "3:00"
  },
  {
    id: 5,
    image: five,
    title: "Market Price Update",
    p: "Maize price increased by 10% in local markets.",
    time: "3:30"
  },
  {
    id: 6,
    image: six,
    title: "Tomato yield double",
    p: "Initial yield reports look promising",
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
]

const MetricsRight = () => {
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
      <ul className="space-y-8" >
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

export default MetricsRight;


const Track = ({track}) => {
  return <li className="flex font-sanns ">
    <div className="relative">
      <img className="]" src={track.image} alt={track.image} />
      <div className="w-[2px] h-8 bg-[#00000012] absolute top-6 left-2"></div>
    </div>
    <div className="px-2">
      <h1 className="text-[#1E1E1E] font-medium text-sm">{track.title}</h1>
      <p className="text-xs font-normal text-[#00000080]">{track.p}</p>
    </div>
    <div>
      <p className="text-[13px] font-normal text-[#0000004F]">{track.time}</p>
    </div>
  </li>
}