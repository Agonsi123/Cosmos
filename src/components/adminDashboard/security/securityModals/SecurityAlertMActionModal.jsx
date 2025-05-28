import React, {useState} from 'react';
import arrowRight from '../../../../assets/arrowRight.svg';
import { CiCircleRemove } from "react-icons/ci";




const SecurityAlertMActionModal = ({AlertDetailsComponent, btn1, btn2}) => {

    const [activeModal, setActiveModal] = useState("actionM");


  return (
    <>
      <div className="flex flex-col gap-2 py-7 px-4 rounded-[11px] bg-white shadow-xl absolute top-0 right-5 w-40">
        <button
          className="p-2 text-center text-[13px] text-[#424242] font-[600] border-b-[0.5px] border-[rgba(0,0,0,0.09)]"
          onClick={() => setActiveModal("alertDetails")}
        >
          View Details
        </button>
        <div className="flex gap-3">
          <img src={arrowRight} alt="arrow" />
          <button
            className=" p-2 text-left text-[13px] text-[#424242] font-[600]"
            onClick={() => setActiveModal("markStatus")}
          >
            Mark Status
          </button>
        </div>
      </div>

      {/* Modal for security details */}
      {activeModal === "alertDetails" ? (
        <div>
          {AlertDetailsComponent && (
            <AlertDetailsComponent
              setActiveModal={setActiveModal}
            />
          )}
        </div>
        
      ) : null}

      {/* modal for */}
      {activeModal === "markStatus" ? (
        <div className="flex flex-col gap-2 py-7 px-4 rounded-[11px] bg-white shadow-xl absolute top-20 right-40 w-40">
          <div className="flex gap-3 border-b-[0.5px] border-[rgba(0,0,0,0.09)]">
            <input type="radio" name="" id="" className='accent-[#6b911b]'/>
            <button
              className="p-2 text-center text-[13px] text-[#424242] font-[600] "
              // onClick={() => setActiveModal("alertDetails")}
            >
              {/* Resolved */}
              {btn1}
            </button>
          </div>
          <div className="flex gap-3">
            <input type="radio" name="" id="" className='accent-[#6b911b]'/>
            <button
              className=" p-2 text-left text-[13px] text-[#424242] font-[600]"
              // onClick={() => setActiveModal("markStatus")}
            >
              {/* Pending */}
              {btn2}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SecurityAlertMActionModal