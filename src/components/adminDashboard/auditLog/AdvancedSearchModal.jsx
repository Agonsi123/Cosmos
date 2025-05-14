import React from 'react';
import advanceFilter from '../../../assets/advanceFilter.svg';
import userAdmin from '../../../assets/userAdmin.svg';
import navigationArrow from '../../../assets/navigationArrow.svg';
import calendarIcon from '../../../assets/calendarIcon.svg';
import arrowDown from '../../../assets/arrowDown.svg';

const AdvancedSearchModal = () => {
  return (
    <div className="bg-white absolute flex flex-col gap-4 py-6 px-8 top-12 right-10 rounded shadow-xl">
      <div className="flex gap-2">
        <img src={advanceFilter} alt="Filter Icon" />
        <h6 className="font-semibold text-lg text-[#1e1e1e]">Advance search and filter</h6>
      </div>

      {/* Section 2 Admin name/Action Type/Search by date */}
      <div className="flex gap-4 border-t border-[#00000020]">

        {/* Column 1 Admin name */}
        <div className="flex flex-col py-2 gap-2">
          <div className="flex gap-2">
            <img src={userAdmin} alt="userAdmin" />
            <label htmlFor="" className="font-semibold text-xs text-[#1e1e1e]">
              Admin Name
            </label>
          </div>
          <input
            type="text"
            name=""
            placeholder="Search by admin name"
            className="placeholder:font-medium placeholder:text-[10px] placeholder:text-[#7c8593] border border-[#cccccc] bg-[#f8f8f8] rounded-[4px] p-2 w-[315px]"
          />
        </div>

        {/* Column 2 Action Type */}
        <div className="flex flex-col py-2 gap-2">
          <div className="flex gap-2">
            <img src={navigationArrow} alt="userAdmin" />
            <label htmlFor="" className="font-semibold text-xs text-[#1e1e1e]">
              Action Type
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name=""
              placeholder="Search action type"
              className="placeholder:font-medium placeholder:text-[10px] placeholder:text-[#7c8593] border border-[#cccccc] bg-[#f8f8f8] rounded-[4px] p-2 w-[315px]"
            />
            <img src={arrowDown} alt="Arrow Icon" className="absolute right-4 top-5" />
          </div>
        </div>

        {/* column 3 Search by date */}
        <div className="flex flex-col py-2 gap-2">
          <div className="flex gap-2">
            <img src={calendarIcon} alt="userAdmin" />
            <label htmlFor="" className="font-semibold text-xs text-[#1e1e1e]">
              Search By Date
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name=""
              placeholder="Select date (range)"
              className="placeholder:font-medium placeholder:text-[10px] placeholder:text-[#7c8593] border border-[#cccccc] bg-[#f8f8f8] rounded-[4px] p-2 w-[315px]"
            />
            <img src={arrowDown} alt="Arrow Icon" className="absolute right-4 top-5" />
          </div>
        </div>
      </div>

      {/* Section 3 Date of Action/ sort by */}
      <div className='flex gap-32'>

        {/* Date of action column */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src={calendarIcon} alt="Calender Icon" />
            <p className="font-semibold text-xs text-[#475466]">Date of action</p>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p className="font-normal text-xs text-[#757f8d]">Today</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p className="font-normal text-xs text-[#757f8d]">7 Days Ago</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p className="font-normal text-xs text-[#757f8d]">This Month</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p className="font-normal text-xs text-[#757f8d]">Custom</p>
            </div>
          </div>
        </div>

        {/* Sort by column */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src={calendarIcon} alt="Calender Icon" />
            <p className="font-semibold text-xs text-[#475466]">Sort by</p>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p className="font-normal text-xs text-[#757f8d]">New to Old</p>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="" id="" />
              <p className="font-normal text-xs text-[#757f8d]">Old to New</p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedSearchModal

