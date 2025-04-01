import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

const AdminPagination = () => {
  return (
     <div className="flex pb-8 pt-2 justify-between items-center">
          <div className="flex gap-2 items-center px-5 rounded-md py-1 border-[1px] border-[#D0D5DD]">
            <div>
              <GrLinkPrevious />
            </div>
            <button>Previous</button>
          </div>
          <div className="flex gap-2 items-center">
            <button className="bg-bgGray py-1 px-3 rounded-md text-white">1</button>
            <button className=" text-[#667085]">2</button>
            <button className=" text-[#667085]">3</button>
            <span className=" text-[#667085]"><BsThreeDots/></span>
            <button className=" text-[#667085]">4</button>
            <button className=" text-[#667085]">5</button>
            <button className=" text-[#667085]">6</button>
            
          </div>
          <div className="flex gap-2 px-5 rounded-md py-1 items-center border-[1px] border-[#D0D5DD]">
            <div>
              <GrLinkNext />
            </div>
            <button>Next</button>
          </div>
        </div>
  )
}

export default AdminPagination
