import React from "react";
import Face2 from "../../../assets/Face2.jpg";
import { SlOptionsVertical } from "react-icons/sl";

const SideFooterTwo = () => {
  return (
    <div className="px-2 font-manrope py-[5px]">
      <div className="flex gap-8  items-center">
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={Face2} alt="face" />
          <h2 className="text-[#1E1E1E] font-semibold text-lg">Udo Agonsi</h2>
        </div>
        <div className="text-[#00000040]">
          <SlOptionsVertical />
        </div>
      </div>
      <a
        className="text-[#00000080] font-normal text-sm"
        href="mailto:agonsiudodirim@gmail.com"
      >
        agonsiudodirim@gmail.com
      </a>
    </div>
  );
};

export default SideFooterTwo;
