import React, { useState, useRef, useEffect } from 'react';
import { GrLinkNext, GrLinkUp, GrLinkPrevious } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import BulkActionModal from './userManagementModals/BulkActionModal';


const UserManagePagination = () => {

  const [showBulkModal, setShowBulkModal] = useState(false);

  //Add ref to modal and button 
  const bulkModalRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  //Detect outside click
   useEffect(() => {
     const handleOutsideClick = (event) => {
      const clickedOutsideModal = bulkModalRef.current && !bulkModalRef.current.contains(event.target);
      const clickedOutsideButton =
        buttonWrapperRef.current && !buttonWrapperRef.current.contains(event.target);

       if (showBulkModal && clickedOutsideModal && clickedOutsideButton) {
         // Close the open modal
         setShowBulkModal(false); 
       }
     };

     document.addEventListener("mousedown", handleOutsideClick);
     return () => {
       document.removeEventListener("mousedown", handleOutsideClick);
     };
   }, [showBulkModal]);



  return (
    <div className="flex justify-between gap-6 pt-2">
      <div className="flex gap-[130px] items-center bg-[#f8f8f8] px-5 py-2">
        <div className="flex gap-2 items-center px-5 rounded-md py-1 border-[1px] border-[#D0D5DD] bg-[#ffffff] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
          <div>
            <GrLinkPrevious className="size-3.5" />
          </div>
          <button className="text-[14px] font-[500] text-[#344054]">Previous</button>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-bgGray py-1 px-3 rounded-md text-white text-[14px]">1</button>
          <button className=" text-[#667085] py-1 px-3 rounded-md text-[14px]">2</button>
          <button className=" text-[#667085] py-1 px-3 rounded-md text-[14px]">3</button>
          <span className=" text-[#667085] py-1 px-3 rounded-md text-[14px]">
            <BsThreeDots />
          </span>
          <button className=" text-[#667085] py-1 px-3 rounded-md text-[14px]">8</button>
          <button className=" text-[#667085] py-1 px-3 rounded-md text-[14px]">9</button>
          <button className=" text-[#667085] py-1 px-3 rounded-md text-[14px]">10</button>
        </div>
        <div className="flex gap-2 px-3 rounded-md py-1 items-center border-[1px] border-[#D0D5DD]">
          <button className="text-[14px] font-[500] text-[#344054]">Next</button>
          <div>
            <GrLinkNext className="size-3.5" />
          </div>
        </div>
      </div>
      <div className="bg-[#f8f8f8] px-4 py-2" ref={buttonWrapperRef}>
        <div
          className="flex gap-2 items-center px-3 rounded-md py-1 border-[1px] border-[#D0D5DD] bg-[#ffffff] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
          onClick={() => setShowBulkModal(prev => !prev)}
        >
          <div className="cursor-pointer">
            <GrLinkUp className="size-3.5" />
          </div>
          <button className="text-[14px] font-[500] text-[#344054]">Bulk Action</button>
        </div>
      </div>
      
      {showBulkModal && (
        <div 
        ref={bulkModalRef} 
        className="absolute right-14 -mt-48 ">
          <BulkActionModal setShowBulkModal={setShowBulkModal} />
        </div>
      )}
    </div>
  );
}

export default UserManagePagination