import React, {useState, useContext, useRef, useEffect} from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import UserManagePagination from '../UserManagePagination';
import MoreActionModal from '../userManagementModals/MoreActionModal';
import {AppContext} from '../../../../context/Index';
import PendingUserDetails from '../userManagementModals/PendingUserDetails';

const SuspendedUsers = () => {
  const {showPendingUserDetails, setShowPendingUserDetails} = useContext(AppContext);

  const [openRowIndex, setOpenRowIndex] = useState(null);
    const [lastClickedIndex, setLastClickedIndex] = useState(null);
  
    // useRef
    const menuRefs = useRef([]);
  
    const setMenuRef = (element, index) => {
      menuRefs.current[index] = element;
    };
  
  //Function to handle click
    const handleClick = (index) => {
      if (openRowIndex === index) {
        //Click on same index (toggle off)
        setOpenRowIndex(null);
        setLastClickedIndex(null);
      }else if (lastClickedIndex !== index) {
        //switch to new index, update lastClicked, don't open immediately
        setOpenRowIndex(null); //close the currently open modal
        setLastClickedIndex(index);
      } else {
        //On second click open new index(modal)
        setOpenRowIndex(index);
        setLastClickedIndex(index);
      }
    };
    
    // Detect click outside dropdown
    useEffect(() => {
      const handleOutsideClick = (event) => {
        const clickedInsideAny = menuRefs.current.some(
          (ref) => ref && ref.contains(event.target)
        );
  
        const clickedOnButton = event.target.closest('.three-dots-button');
  
        if (!clickedInsideAny && !clickedOnButton) {
          setOpenRowIndex(null);
          setLastClickedIndex(null);
        }
      };
  
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);
  
    //Reset both states on unmount
    useEffect(() => {
      return () => {
        setOpenRowIndex(null);
        setLastClickedIndex(null);
      };
    }, []);

  const userData = [
    {
      reg: 12345,
      name: "Adeolu Nelson",
      email: "adeolun@gmail.com",
      inv: 2,
      date: "Jan 05, 2025",
      doc: "View",
    },
    {
      reg: 67890,
      name: "Piper Mills",
      email: "Millsp@gmail.com",
      inv: 5,
      date: "Jan 05, 2025",
      doc: "View",
    },
    {
      reg: 89012,
      name: "Cocoa Sheen",
      email: "Cocoa@gmail.com",
      inv: 7,
      date: "Jan 05, 2025",
      doc: "View",
    },
    {
      reg: 34567,
      name: "Peter Cass",
      email: "Peter@gmail.com",
      inv: 1,
      date: "Jan 05, 2025",
      doc: "View",
    },
    {
      reg: 45678,
      name: "Suliat Nton",
      email: "Suliat@gmail.com",
      inv: 22,
      date: "Jan 05, 2025",
      doc: "View",
    },
    {
      reg: 23456,
      name: "Bean Kyle",
      email: "Kyle@gmail.com",
      inv: 3,
      date: "Jan 05, 2025",
      doc: "View",
    },
    {
      reg: 78901,
      name: "Rice Black",
      email: "Rice@gmail.com",
      inv: 25,
      date: "Jan 05, 2025",
      doc: "View",
    },
    {
      reg: 56789,
      name: "April Dave",
      email: "April@gmail.com",
      inv: 20,
      date: "Jan 05, 2025",
      doc: "View",
    },
  ];

  return (
    <>
      <div className="py-6 overflow-x-auto">
        <table className="min-w-full">
          <thead className="shadow-sm">
            <tr className="font-sans text-[#4F5144] font-medium text-[14px]">
              <th className=" py-2 w-1/6"></th>
              <th className=" py-2 w-1/5 text-left">REG NO</th>
              <th className=" py-2 w-1/6 text-left">USER NAME</th>
              <th className=" py-2 w-1/6 text-left">USER EMAIL</th>
              <th className=" py-2 w-1/6 text-left"># OF INV</th>
              <th className=" py-2 w-1/6 text-left">DATE REGISTERED</th>
              <th className=" py-2 w-1/7 text-center">DOCUMENT</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((data, index) => (
              <tr className="border-b border-gray-110" key={index}>
                <td className="font-sanns font-normal text-sm text-[#4F5144] px-6 py-[24px]">
                  <input
                    className=" border border-[#b0babf] bg-[#f6f8f9]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144] py-[24px]">
                  {data.reg}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144] py-[24px]">
                  {data.name}
                </td>
                <td className="font-sanns font-normal text-[14px] text-[#4F5144] py-[24px]">
                  {data.email}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144] px-6 py-[24px]">
                  {data.inv}
                </td>
                <td className="font-sanns font-normal text-sm text-[#4F5144] py-[24px]">
                  {data.date}
                </td>
                <td className="font-sanns font-bold text-sm text-gray-600 py-[24px]">
                  <span
                    className="bg-[#e6e6e6] px-2 py-1 rounded-full text-center cursor-pointer"
                    onClick={() => setShowPendingUserDetails(true)}
                  >
                    {data.doc}
                  </span>
                </td>
                <td className="text-[#98a2b3] cursor-pointer">
                  <div
                    onClick={() => handleClick(index)}
                    className="three-dots-button p-2 hover:bg-gray-100 rounded-full inline-block"
                  >
                    <BsThreeDotsVertical />
                  </div>
                </td>

                {/* more action modal */}
                {openRowIndex === index && (
                  <div ref={(el) => setMenuRef(el, index)} className="absolute right-14 mt-2 ">
                    <MoreActionModal />
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <UserManagePagination />
      </div>

      {/* Pending user details modal */}
      {showPendingUserDetails && (
        <PendingUserDetails setShowPendingUserDetails={setShowPendingUserDetails} />
      )}
    </>
  );
}

export default SuspendedUsers