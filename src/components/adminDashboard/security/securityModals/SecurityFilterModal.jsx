import React from 'react'

const SecurityFilterModal = ({setShowFilterModal, setStatusFilter, btn1, btn2}) => {
  
  const handleFilterClick = (status) => {
    setStatusFilter(status);
    setShowFilterModal(false);
  };

  return (
    <div className="flex flex-col gap-2 pt-7 pb-4 px-4 rounded-[11px] bg-white shadow-xl absolute top-56 right-16 w-48">
      <div className="flex gap-3 border-b-[0.5px] border-[rgba(0,0,0,0.09)]">
        <input type="checkbox" name="" id="" className="accent-[#6b911b]" />
        <button className="p-2 text-left text-[13px] text-[#424242] font-[600]">{btn1}</button>
      </div>
      <div className="flex gap-3">
        <input type="checkbox" name="" id="" className="accent-[#6b911b]" />
        <button className=" p-2 text-left text-[13px] text-[#424242] font-[600]">{btn2}</button>
      </div>
      <div className="flex gap-2 mt-3">
        <button
          className="px-5 py-1 rounded-[3.34px] text-left text-[13.37px] text-[#ffffff] font-sanns font-[600] bg-[#6b911b]"
          // onClick={() => setShowFilterModal(false)}
          onClick={() => handleFilterClick("status")}
        >
          Apply
        </button>
        <button
          className="px-5 py-1 rounded-[3.34px] text-left text-[13.37px] text-[#6b911b] font-sanns font-[600] border-[0.84px] border-[#6b911b]"
          onClick={() => setShowFilterModal(false)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default SecurityFilterModal