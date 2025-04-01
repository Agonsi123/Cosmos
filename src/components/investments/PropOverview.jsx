import React from 'react'
import { CiSearch } from 'react-icons/ci'

const PropOverview = ({name}) => {
  return (
    <div className="flex justify-between pb-4 items-center">
      <h1>{name}</h1>
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
    </div>
  )
}

export default PropOverview
