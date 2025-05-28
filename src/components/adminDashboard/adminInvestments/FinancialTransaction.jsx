import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchSection from "../userManagement/SearchSection";
import { CiSearch } from "react-icons/ci";
import mix from "../../../assets/mix.png";
import { TbFileExport } from "react-icons/tb";
import InvestmentPagination from "./InvestmentPagination";

const FinancialTransaction = () => {

  const userData = [
    {
      transactionId: "TXN001234",
      userName: "John Doe",
      type: "Wallet Deposit",
      amount: "₦1,000,000",
      date: "Jan 10, 2025",
      status: "Success",
      color: "bg-[#ecfdf3] text-[#027a48]",
    },
    {
      transactionId: "TXN001235",
      userName: "Jane Smith",
      type: "Investment",
      amount: "₦500,000",
      date: "Jan 10, 2025",
      status: "Success",
      color: "bg-[#ecfdf3] text-[#027a48]",
    },
    {
      transactionId: "TXN001236",
      userName: "David Johnson",
      type: "ROI Payout",
      amount: "₦150,000",
      date: "Jan 10, 2025",
      status: "Pending",
      color: "bg-[#fef9c3] text-[#713f12]",
    },
    {
      transactionId: "TXN001237",
      userName: "Sarah Williams",
      type: "Withdrawal",
      amount: "₦200,000",
      date: "Jan 10, 2025",
      status: "Success",
      color: "bg-[#ecfdf3] text-[#027a48]",
    },
    {
      transactionId: "TXN001238",
      userName: "Michael Brown",
      type: "Investment",
      amount: "₦800,000",
      date: "Jan 10, 2025",
      status: "Pending",
      color: "bg-[#fef9c3] text-[#713f12]",
    },
    {
      transactionId: "TXN001239",
      userName: "Tracy Okoro",
      type: "Investment",
      amount: "₦200,000",
      date: "Jan 10, 2025",
      status: "Success",
      color: "bg-[#ecfdf3] text-[#027a48]",
    },
    {
      transactionId: "TXN001240",
      userName: "Akpan David",
      type: "ROI Payout",
      amount: "₦100,000",
      date: "Jan 10, 2025",
      status: "Pending",
      color: "bg-[#fef9c3] text-[#713f12]",
    },
    {
      transactionId: "TXN001241",
      userName: "OLa Benson",
      type: "Wallet Deposit",
      amount: "₦500,000",
      date: "Jan 10, 2025",
      status: "Success",
      color: "bg-[#ecfdf3] text-[#027a48]",
    },
  ];

  return (
    <>
      <SearchSection
        tittle="All Transactions"
        icon={<CiSearch className="text-[#00000080] mr-2" size={30} />}
        icon2={<img src={mix} alt="mix" />}
        icon3={<TbFileExport />}
        text="Export"
        // FilterModalComponent={SfilterModal}
      />
      <div className="py-6 overflow-x-auto relative">
        <table width={"100%"}>
          <thead className="shadow-sm">
            <tr className="font-sans text-[#4F5144] text-xs font-light flex w-full">
              <th className=" flex-1 text-left px-5 lg:block">Transaction ID</th>
              <th className=" flex-1 text-left px-5">User Name</th>
              <th className=" flex-1 text-left px-5">Transaction Type</th>
              <th className=" flex-1 text-left px-5">Amount</th>
              <th className=" flex-1 text-left px-5">Date</th>
              <th className=" flex-1 text-center px-5">Status</th>
              <th className=" flex-1 text-right px-5"></th>
            </tr>
          </thead>

          <tbody>
            {userData.map((data, index) => (
              <tr
                className="font-sanns text-xs border-b border-gray-110 flex items-center w-full"
                key={index}
              >
                <td className="flex-1 p-4 text-left hidden lg:block">{data.transactionId}</td>
                <td className="p-4 text-left flex-1">{data.userName}</td>
                <td className="p-4 text-left flex-1">{data.type}</td>
                <td className="p-4 text-left flex-1">{data.amount}</td>
                <td className="p-4 text-left flex-1">{data.date}</td>
                <td className="p-4 text-center flex-1">
                  <span className={`font-sanns px-2 py-1 rounded-lg text-xs ${data.color}`}>
                    {data.status}
                  </span>
                </td>
                <td
                  className="pl-6 text-sm flex-1 text-right"
                  // onClick={() => setShowAuditIssueDetails(true)}
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
    </>
  );
}

export default FinancialTransaction