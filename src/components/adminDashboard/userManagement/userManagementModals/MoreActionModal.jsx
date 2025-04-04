import React from 'react'

const MoreActionModal = ({setShowMoreAction}) => {
    
  return (
    <div
      className="bg-[rgba(16,24,40,0.05)] backdrop-blur-md fixed min-h-screen z-10 w-[100%] top-0 left-0"
      onClick={() => setShowMoreAction(false)}
    >
      <div className="flex flex-col gap-2 py-8 px-4 rounded-xl bg-white shadow-lg absolute top-[30%] right-[35%]">
        <button className="border-b-[0.5px] border-[rgba(0,0,0,0.25)] p-2 text-left text-sm font-[600]">
          Reactivate User
        </button>
        <button className="border-b-[0.5px] border-[rgba(0,0,0,0.25)] p-2 text-left text-sm font-[600]">
          Suspended User
        </button>
        <button className="bg-[#6b911b] py-2 px-10 rounded-md text-white">
          <h5>View User Details</h5>
        </button>
      </div>
    </div>
  );
}

export default MoreActionModal