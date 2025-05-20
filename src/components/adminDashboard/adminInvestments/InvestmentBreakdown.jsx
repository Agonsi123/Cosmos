import React, {useState} from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import InvestmentPagination from "./InvestmentPagination";
import InvestmentDetailsModal from './InvestmentDetailsModal';
import { data } from 'autoprefixer';



const userData = [
  {
    investorName: "John Doe",
    projectName: "April Maize Cycle",
    amount: "₦500,000",
    roi: "25%",
    date: "Jan 10, 2025",
    status: "Active",
    color: "bg-[#e2f1fc] text-[#02487a]",
  },
  {
    investorName: "Jane Smith",
    projectName: "Rice Platform",
    amount: "₦1,200,000",
    roi: "20%",
    date: "Jan 10, 2025",
    status: "Completed",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    investorName: "David Johnson",
    projectName: "Cocoa Season",
    amount: "₦800,000",
    roi: "30%",
    date: "Jan 10, 2025",
    status: "Pending",
    color: "bg-[#fef9c3] text-[#713f12]",
  },
  {
    investorName: "Sarah Williams",
    projectName: "Cassava Cycle",
    amount: "₦600,000",
    roi: "22%",
    date: "Jan 10, 2025",
    status: "Completed",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    investorName: "Michael Brown",
    projectName: "Tomato Project",
    amount: "₦500,000",
    roi: "18%",
    date: "Jan 10, 2025",
    status: "Active",
    color: "bg-[#e2f1fc] text-[#02487a]",
  },
  {
    investorName: "Tracy Okoro",
    projectName: "Bean Cycle",
    amount: "₦450,000",
    roi: "28%",
    date: "Jan 10, 2025",
    status: "Completed",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    investorName: "Akpan David",
    projectName: "Plantain Season",
    amount: "₦300,000",
    roi: "24%",
    date: "Jan 10, 2025",
    status: "Pending",
    color: "bg-[#fef9c3] text-[#713f12]",
  },
  {
    investorName: "Ola Benson",
    projectName: "Pepper Season",
    amount: "₦500,000",
    roi: "26%",
    date: "Jan 10, 2025",
    status: "Completed",
    color: "bg-[#ecfdf3] text-[#027a48]",
    },
  ];


const InvestmentBreakdown = ({statusFilter}) => {

  const [showInvestmentDetails, setShowInvestmentDetails] = useState(false);

  
    const filteredUserData = statusFilter
    ? userData.filter(data => data.status === statusFilter)
    : userData;


    return (
    <>
      <div className="py-6 overflow-x-auto relative">
        <table width={"100%"}>
          <thead className="shadow-sm">
            <tr className="font-sans text-[#4F5144] text-xs font-light flex w-full">
              <th className=" flex-1 text-left px-5 lg:block">Investor Name</th>
              <th className=" flex-1 text-left px-5">Project Name</th>
              <th className=" flex-1 text-left px-5">Amount Invested</th>
              <th className=" flex-1 text-left px-5">Expected ROI</th>
              <th className=" flex-1 text-left px-5">Investment date</th>
              <th className=" flex-1 text-center px-5">Status</th>
              <th className=" flex-1 text-right px-5"></th>
            </tr>
          </thead>

          <tbody>
            {filteredUserData.map((data, index) => (
              <tr
                className="font-sanns text-xs border-b border-gray-110 flex items-center w-full"
                key={index}
              >
                <td className="flex-1 p-4 text-left hidden lg:block">{data.investorName}</td>
                <td className="p-4 text-left flex-1">{data.projectName}</td>
                <td className="p-4 text-left flex-1">{data.amount}</td>
                <td className="p-4 text-left flex-1">{data.roi}</td>
                <td className="p-4 text-left flex-1">{data.date}</td>
                <td className="p-4 text-center flex-1">
                  <span className={`font-sanns px-2 py-1 rounded-lg text-xs ${data.color}`}>
                    {data.status}
                  </span>
                </td>
                <td
                  className="pl-6 text-sm flex-1 text-right"
                  onClick={() => setShowInvestmentDetails(true)}
                >
                  <div className="three-dots-button p-2 hover:bg-gray-100 rounded-full inline-block">
                    <BsThreeDotsVertical />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <InvestmentPagination />
      </div>

      {/* Investment Details Modal */}
      {showInvestmentDetails && (
        <InvestmentDetailsModal setShowInvestmentDetails={setShowInvestmentDetails}/>
      )}
    </>
  );
}

export default InvestmentBreakdown