import React from "react";
import { CiSearch } from "react-icons/ci";
import mix from "../../../assets/mix.png"

const ProjectOverview = () => {
  return (
    <div className="py-8 flex justify-between  items-center w-full ">
      <h1 className="w-full font-sanns font-medium text-xl">
        Project Overview
      </h1>
      <div className="flex justify-between items-center">
        <div className="border-[1px] py-1.5 border-[#00000026] w-full relative rounded flex gap-4 items-center">
          <CiSearch className="text-[#00000080] mr-2" size={30} />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className=" placeholder:text-[#00000080] placeholder:font-medium placeholder:text-base"
          />

        </div>
        <div className=" absolute right-[300px]">
          <img src={mix} alt="mix" />
        </div>
        
      </div>
    </div>
  );
};

export default ProjectOverview;
