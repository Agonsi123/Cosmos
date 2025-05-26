import React from 'react'

const FilterModal = ({setShowFilterModal, setStatusFilter}) => {
  const handleFilterClick = (status) => {
    setStatusFilter(status);
    setShowFilterModal(false);
  };

  return (
    <div className="flex flex-col gap-2 py-7 px-4 rounded-[11px] bg-white shadow-xl absolute top-56 right-16 w-52">
      <button
        className="border-b-[0.5px] border-[rgba(0,0,0,0.09)] p-2 text-left text-[13px] text-[#424242] font-[600]"
        onClick={() => handleFilterClick("Active")}
      >
        Active
      </button>
      <button
        className="border-b-[0.5px] border-[rgba(0,0,0,0.09)] p-2 text-left text-[13px] text-[#424242] font-[600]"
        onClick={() => handleFilterClick("Pending")}
      >
        Pending
      </button>
      <button
        className="border-b-[0.5px] border-[rgba(0,0,0,0.09)] p-2 text-left text-[13px] text-[#424242] font-[600]"
        onClick={() => handleFilterClick("Completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterModal