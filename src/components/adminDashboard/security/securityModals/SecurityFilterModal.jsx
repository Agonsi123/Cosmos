import React from 'react'

const SecurityFilterModal = ({setShowFilterModal, setStatusFilter}) => {
    // const handleFilterClick = (status) => {
    //   setStatusFilter(status);
    //   setShowFilterModal(false);
    // };


  return (
    <div className="flex flex-col gap-2 py-7 px-4 rounded-[11px] bg-white shadow-xl absolute top-56 right-16 w-48">
      <div className="flex gap-3 border-b-[0.5px] border-[rgba(0,0,0,0.09)]">
        <input type="checkbox" name="" id="" className="accent-[#6b911b]" />
        <button
          className="p-2 text-left text-[13px] text-[#424242] font-[600]"
        // onClick={() => setStatusFilter("status")}
            // onClick={() => handleFilterClick("Resolved")}
        >
          Resolved
        </button>
      </div>
      <div className="flex gap-3">
        <input type="checkbox" name="" id="" className="accent-[#6b911b]" />
        <button
          className=" p-2 text-left text-[13px] text-[#424242] font-[600]"
          //   onClick={() => handleFilterClick("Pending")}
        >
          Pending
        </button>
      </div>
      <div className="flex gap-2">
        <button
          className="px-4 py-1 rounded-sm text-left text-[13px] text-[#424242] font-[600] bg-[#6b911b]"
          onClick={() => setShowFilterModal(false)}
        >
          Apply
        </button>
        <button
          className="px-4 py-1 rounded-sm text-left text-[13px] text-[#424242] font-[600] border border-[#6b911b]"
          onClick={() => setShowFilterModal(false)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default SecurityFilterModal