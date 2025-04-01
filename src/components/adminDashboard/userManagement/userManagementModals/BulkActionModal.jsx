import React, { useState } from 'react';
import WarningModal from './WarningModal';
import { GiOrange, GiSandsOfTime } from "react-icons/gi";
import { CiCircleCheck, CiCircleRemove, CiWarning } from "react-icons/ci";

const BulkActionModal = ({setShowBulkModal}) => {

    const [active, setActive] = useState('delete');


  return (
    <div
      className="bg-[rgba(16,24,40,0.05)] backdrop-blur-md fixed min-h-screen z-10 w-[100%] top-0 left-0"
        onClick={() => setShowBulkModal(false)}
    >
      <div className="flex flex-col gap-2 py-8 px-4 rounded-xl bg-white shadow-lg absolute top-[30%] right-[35%]">
        <div
          className={`${
            active === "reactivate"
              ? "bg-[#fbe2e2] p-2 rounded-md text-[#b20000]"
              : "border-b-[0.5px] border-[rgba(0,0,0,0.25)] p-2"
          }`}
          onClick={() => setActive("reactivate")}
        >
          <h5>Reactivate Selected Accounts</h5>
        </div>
        <div
          className={`${
            active === "suspend"
              ? "bg-[#fbe2e2] p-2 rounded-md text-[#b20000]"
              : "border-b-[0.5px] border-[rgba(0,0,0,0.25)] p-2"
          }`}
          onClick={() => setActive("suspend")}
        >
          <h5>Suspend Selected Accounts</h5>
        </div>
        <div
          className={`${
            active === "delete"
              ? "bg-[#fbe2e2] p-2 rounded-md text-[#b20000]"
              : "border-b-[0.5px] border-[rgba(0,0,0,0.25)] p-2"
          }`}
          onClick={() => setActive("delete")}
        >
          <h5>Delete Selected Accounts</h5>
        </div>
      </div>
      {/* <div>
        {active === "reactivate" ? (
          <WarningModal
            icon1={<GiSandsOfTime />}
            icon2={<CiCircleRemove />}
            text="Are you sure you want to reactivate 12 selected user accounts?"
            btnText="Yes, Reactivate Users"
            bgColor="green"
            
          />
        ) : active === "suspend" ? (
          <WarningModal
            icon1={<GiSandsOfTime />}
            icon2={<CiCircleRemove />}
            text="Are you sure you want to suspend 12 selected user accounts?"
            btnText="Yes, Please Suspend"
            bgColor="orange"
            
          />
        ) : (
          <WarningModal
            icon1={<CiWarning />}
            icon2={<CiCircleRemove />}
            text="Are you sure you want to delete 12 selected user accounts?"
            btnText="Yes, Please Delete"
            bgColor="red"
            
          />
        )}
      </div> */}
    </div>
  );
}

export default BulkActionModal