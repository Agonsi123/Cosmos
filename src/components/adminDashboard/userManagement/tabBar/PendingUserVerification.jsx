import React, { useRef, useState, useEffect, useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserManagePagination from '../UserManagePagination';
import MoreActionModal from '../userManagementModals/MoreActionModal';
import PendingUserDetails from '../userManagementModals/PendingUserDetails';
import {AppContext} from '../../../../context/Index';




const PendingUserVerification = () => {

  // Initial state of modals

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
        reg: 67890,
        name: "April Dave",
        email: "April@gmail.com",
        inv: 2,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 12345,
        name: "Rice Black",
        email: "Rice@gmail.com",
        inv: 25,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 23456,
        name: "Cocoa Sheen",
        email: "Cocoa@gmail.com",
        inv: 7,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 89012,
        name: "Suliat Nton",
        email: "Suliat@gmail.com",
        inv: 8,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 34567,
        name: "Adeolu Nelson",
        email: "Adeolu@gmail.com",
        inv: 22,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 45678,
        name: "Bean Kyle",
        email: "Kyle@gmail.com",
        inv: 4,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 56789,
        name: "Peter Cass",
        email: "Peter@gmail.com",
        inv: 25,
        date: "Jan 05, 2025",
        doc: "View",
      },
      {
        reg: 78901,
        name: "Piper Mills",
        email: "Millsp@gmail.com",
        inv: 2,
        date: "Jan 05, 2025",
        doc: "View",
      },
    ];

  return (
    <>
      <div className="py-6 overflow-x-auto">
        <table width={"100%"}>
          <thead className="shadow-sm">
            <tr className="font-sans text-[#4F5144] text-sm font-light flex items-center w-full">
              <th className=" flex-1 p-4 lg:block"></th>
              <th className=" flex-1 text-left p-4 ">REG NO</th>
              <th className=" flex-1 text-left p-4">USER NAME</th>
              <th className=" flex-1 text-left p-4">USER EMAIL</th>
              <th className=" flex-1 text-center p-4"># OF INV</th>
              <th className=" flex-1 text-left p-4">DATE REGISTERED</th>
              <th className=" flex-1 text-right p-4">DOCUMENT</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((data, index) => (
              <tr className="border-b border-gray-110 flex items-center w-full" key={index}>
                <td className="flex-1 text-sm p-4 hidden lg:block">
                  <input
                    className=" border border-[#b0babf] bg-[#f6f8f9]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                </td>
                <td className="font-sanns p-4 text-sm flex-1">{data.reg}</td>
                <td className="font-sanns p-4 text-sm flex-1 text-left">{data.name}</td>
                <td className="font-sanns p-4 text-sm flex-1">{data.email}</td>
                <td className="font-sanns p-4 text-sm flex-1 text-center">{data.inv}</td>
                <td className="font-sanns p-4 text-sm flex-1 text-center">{data.date}</td>
                <td className="font-sanns p-4 flex-1 text-right font-bold text-sm text-gray-600">
                  <span
                    className="bg-[#e6e6e6] px-2 py-1 rounded-full text-center cursor-pointer"
                    onClick={() => {
                      setShowPendingUserDetails(true);
                      console.log("Hello world");
                    }}
                  >
                    {data.doc}
                  </span>
                </td>
                <td className="text-[#98a2b3] cursor-pointer">
                  <div
                    onClick={() => handleClick(index)}
                    className="three-dots-button p-2 hover:bg-gray-100 rounded-full inline-block"
                  >
                    <BsThreeDotsVertical className="" />
                  </div>
                </td>
                {/* More Action modal 3 Dots */}
                
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

export default PendingUserVerification;
