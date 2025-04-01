import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import PropOverview from "./PropOverview";

const overviewdata = [
  {
    name: "April Maze Cycle",
    status: "active",
    amount: 100000,
    roi: 20,
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
  },
  {
    name: "Rice Platform",
    status: "completed",
    amount: 100000,
    roi: 20,
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
  },
  {
    name: "Cocoa Season",
    status: "pending",
    amount: 100000,
    roi: 20,
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
  },

  {
    name: "Cassava Cycle",
    status: "completed",
    amount: 100000,
    roi: 20,
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
  },
  {
    name: "Tomato Projec",
    status: "pending",
    amount: 100000,
    roi: 20,
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
  },
  {
    name: "Bean Cycle",
    status: "completed",
    amount: 100000,
    roi: 20,
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
  },
  {
    name: "Plantain Season",
    status: "pending",
    amount: 100000,
    roi: 20,
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
  },
  {
    name: "Pepper Season",
    status: "completed",
    amount: 100000,
    roi: 20,
    // color: "text-[#02487A] bg-[#E2F1FC]",
    startdate: "Jan 05 2025",
    enddate: "Jan 06 2025",
  },
];

const InvestmentPorfolio = () => {
  return (
    <div className="pb-4">
      <div>
        <PropOverview name="Investment Portfolio" />
      </div>
      <table>
        <thead className="bg-[#0000000D] shadow-md">
          <tr className="font-sans text-[#4F5144] font-medium text-sm">
            <th className=" py-2 w-1/5 text-left">Project Name</th>
            <th className=" py-2 w-1/6 text-left">Status</th>
            <th className=" py-2 w-1/6 text-left">Investment Amount</th>
            <th className=" py-2 w-1/5 text-left">ROI (Projected)</th>
            <th className=" py-2 w-1/6 text-left">Start Date</th>
            <th className=" py-2 w-1/6 text-left">End Date</th>
          </tr>
        </thead>

        <tbody>
          {overviewdata.map((data, index) => (
            <tr
              className=" text-[#4F5144] space-y-8 text-sm font-normal border-b border-gray-300"
              key={index}
            >
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.name}
              </td>
              <td>
                <span
                  className={`${
                    data.status === "active"
                      ? "text-[#E2F1FC] bg-[#02487A]"
                      : data.status === "completed"
                      ? "text-[#027A48] bg-[#ECFDF3]"
                      : data.status === "pending"
                      ? "text-[#713F12] bg-[#FEF9C3]"
                      : "text-gray-500 bg-gray-200"
                  } px-2 py-1 rounded-md`}
                >
                  {data.status}
                </span>
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
              ₦{data.amount}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.roi}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.startdate}
              </td>
              <td className="font-sanns font-normal text-sm text-[#4F5144]">
                {data.enddate}
              </td>
              <BsThreeDotsVertical className="" />
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentPorfolio;
