import React, { useState, useRef, useEffect } from 'react';
import SecurityFilterModal from './securityModals/SecurityFilterModal';
import { BsThreeDotsVertical } from "react-icons/bs";
import InvestmentPagination from "../adminInvestments/InvestmentPagination";
import SearchSection from "../userManagement/SearchSection";
import { CiSearch } from "react-icons/ci";
import mix from "../../../assets/mix.png";
import { TbFileExport } from "react-icons/tb";
import SecurityAlertMActionModal from './securityModals/SecurityAlertMActionModal';
import SecurityAlertDetails from './securityModals/SecurityAlertDetails';


const userData = [
  {
    alertType: "Unusual Login Attempt",
    userName: "John Doe",
    date: "Jan 10, 2025",
    status: "Resolved",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    alertType: "Multiple Failed Transactions",
    userName: "Jane Smith",
    date: "Jan 10, 2025",
    status: "Resolved",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    alertType: "Unauthorized IP Access",
    userName: "Alex Tolu",
    date: "Jan 10, 2025",
    status: "Pending",
    color: "bg-[#fef9c3] text-[#713f12]",
  },
  {
    alertType: "Suspicious Device Login",
    userName: "Lisa Effiong",
    date: "Jan 10, 2025",
    status: "Resolved",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    alertType: "Excessive Password Resets",
    userName: "Michael Kingsley",
    date: "Jan 10, 2025",
    status: "Pending",
    color: "bg-[#fef9c3] text-[#713f12]",
  },
  {
    alertType: "Unusual High Transaction",
    userName: "Emma Chidioke",
    date: "Jan 10, 2025",
    status: "Resolved",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    alertType: "Unusual High Transaction",
    userName: "Chris Bassey",
    date: "Jan 10, 2025",
    status: "Pending",
    color: "bg-[#fef9c3] text-[#713f12]",
  },
  {
    alertType: "Multiple Account Logins",
    userName: "David OLana",
    date: "Jan 10, 2025",
    status: "Resolved",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
];


const SecurityAlert = () => {

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

    const [statusFilter, setStatusFilter] = useState(null);

    const SfilterModal = ({setShowFilterModal}) => (
        <SecurityFilterModal
            setShowFilterModal={setShowFilterModal}
            setStatusFilter={setStatusFilter}
            btn1="Resolved"
            btn2="Pending"
        />
    );

    const aLertModal = ({setActiveModal}) => (
      <SecurityAlertDetails
      setActiveModal={setActiveModal}
      />
    );


  return (
    <div>
      <SearchSection
        tittle="All Security Alerts"
        icon={<CiSearch className="text-[#00000080] mr-2" size={30} />}
        icon2={<img src={mix} alt="mix" />}
        icon3={<TbFileExport />}
        text="Export"
        FilterModalComponent={SfilterModal}
      />
      <div className="py-6 overflow-x-auto">
        <table width={"100%"}>
          <thead className="shadow-sm">
            <tr className="font-sans text-[#4F5144] text-xs font-light flex w-full">
              <th className=" flex-1 text-left py-3 px-5 lg:block">Alert Type</th>
              <th className=" flex-1 text-left py-3 px-5">User Name</th>
              <th className=" flex-1 text-left py-3 px-5">Date</th>
              <th className=" flex-1 text-center py-3 px-5">Status</th>
              <th className=" flex-1 text-right py-3 px-5"></th>
            </tr>
          </thead>

          <tbody>
            {userData.map((data, index) => (
              <tr
                className="font-sanns text-xs border-b border-gray-110 flex items-center w-full"
                key={index}
              >
                <td className="flex-1 p-4 text-left hidden lg:block">{data.alertType}</td>
                <td className="p-4 text-left flex-1">{data.userName}</td>
                <td className="p-4 text-left flex-1">{data.date}</td>
                <td className="p-4 text-center flex-1">
                  <span className={`font-sanns px-2 py-1 rounded-lg text-xs ${data.color}`}>
                    {data.status}
                  </span>
                </td>
                <td className="pl-6 text-sm flex-1 text-right">
                  <div
                    onClick={() => handleClick(index)}
                    className="three-dots-button p-2 mr-7 hover:bg-gray-100 rounded-full inline-block"
                  >
                    <BsThreeDotsVertical />
                  </div>
                </td>

                {/* Security Alert moreAction modal */}
                {openRowIndex === index && (
                    <div ref={(el) => setMenuRef(el, index)} className="absolute right-14 mt-2 ">
                        <SecurityAlertMActionModal 
                          btn1="Resolved"
                          btn2="Pending"
                          AlertDetailsComponent={aLertModal}
                        />
                    </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <InvestmentPagination />
      </div>
    </div>
  );
}

export default SecurityAlert