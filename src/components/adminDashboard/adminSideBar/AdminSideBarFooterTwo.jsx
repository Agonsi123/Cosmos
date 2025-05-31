import React from 'react';
import Face2 from "../../../assets/Face2.jpg";
import { SlOptionsVertical } from "react-icons/sl";

const AdminSideBarFooterTwo = () => {
  return (
    <div className="px-2 font-manrope py-[5px]">
      <div className="flex gap-2 items-center">
          <img className="h-9 w-9 rounded-full" src={Face2} alt="face" />
        <div className="flex items-center">
          <div className='flex flex-col'>
            <h2 className="text-[#1E1E1E] font-semibold text-lg">Udo Agonsi</h2>
            <a
              className="text-[#00000080] font-normal text-[13px]"
              href="mailto:agonsiudodirim@gmail.com"
            >
              agonsiudodirim@gmail.com
            </a>
          </div>
          <div className="text-[#00000040]">
            <SlOptionsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBarFooterTwo
