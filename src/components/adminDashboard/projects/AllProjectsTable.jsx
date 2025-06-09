import React, {useState} from 'react';
import SearchSection from '../userManagement/SearchSection';
import { CiSearch } from "react-icons/ci";
import mix from "../../../assets/mix.png";
import { TbFileExport } from "react-icons/tb";
import InvestmentPagination from '../adminInvestments/InvestmentPagination';
import { BsThreeDotsVertical } from "react-icons/bs";


const projectData = [
  {
    name: "April Maize Cycle",
    fundGoals: "#5,000,000",
    minInvest: "₦100,000",
    roi: "25%",
    amtRaise: "₦3,800,000",
    startDate: "Jan 05, 2025",
    endDate: "Jan 10, 2025",
    status: "Active",
    color: "bg-[#e2f1fc] text-[#02487a]",
  },
  {
    name: "Rice Platform",
    fundGoals: "#3,000,000",
    minInvest: "₦50,000",
    roi: "20%",
    amtRaise: "₦1,200,000",
    startDate: "Jan 05, 2025",
    endDate: "Jan 10, 2025",
    status: "Completed",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    name: "Cocoa Season",
    fundGoals: "#7,500,000",
    minInvest: "₦150,000",
    roi: "30%",
    amtRaise: "₦7,500,000",
    startDate: "Jan 05, 2025",
    endDate: "Jan 10, 2025",
    status: "Pending",
    color: "bg-[#fef9c3] text-[#713f12]",
  },
  {
    name: "Cassava Cycle",
    fundGoals: "#4,200,000",
    minInvest: "₦80,000",
    roi: "22%",
    amtRaise: "₦2,500,000",
    startDate: "Jan 05, 2025",
    endDate: "Jan 10, 2025",
    status: "Completed",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    name: "Tomato Project",
    fundGoals: "#2,500,000",
    minInvest: "₦60,000",
    roi: "18%",
    amtRaise: "₦500,000",
    startDate: "Jan 05, 2025",
    endDate: "Jan 10, 2025",
    status: "Active",
    color: "bg-[#e2f1fc] text-[#02487a]",
  },
  {
    name: "Bean Cycle",
    fundGoals: "#6,000,000",
    minInvest: "₦120,000",
    roi: "28%",
    amtRaise: "₦6,000,000",
    startDate: "Jan 05, 2025",
    endDate: "Jan 10, 2025",
    status: "Completed",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
  {
    name: "Plantain Season",
    fundGoals: "#4,500,000",
    minInvest: "₦90,000",
    roi: "24%",
    amtRaise: "₦3,800,000",
    startDate: "Jan 05, 2025",
    endDate: "Jan 10, 2025",
    status: "Pending",
    color: "bg-[#fef9c3] text-[#713f12]",
  },
  {
    name: "Pepper Season",
    fundGoals: "#2,500,000",
    minInvest: "₦60,000",
    roi: "26%",
    amtRaise: "₦500,000",
    startDate: "Jan 05, 2025",
    endDate: "Jan 10, 2025",
    status: "Completed",
    color: "bg-[#ecfdf3] text-[#027a48]",
  },
];

const AllProjectsTable = () => {
    const [projectStatusFilter, setProjectStatusFilter] = useState(null);

    const filteredProjectData = projectStatusFilter
      ? projectData.filter((data) => data.status === projectStatusFilter)
      : projectData;


  return (
    <>
      <SearchSection
        tittle="All Projects"
        icon={<CiSearch className="text-[#00000080] mr-2" size={30} />}
        icon2={<img src={mix} alt="mix" />}
        icon3={<TbFileExport />}
        text="Export"
        // FilterModalComponent={SfilterModal}
      />
      <div className="py-6 overflow-x-auto">
        <table width={"100%"}>
          <thead className="shadow-sm">
            <tr className="font-sans text-[#4F5144] text-xs font-light flex w-full">
              <th className=" flex-1 text-left px-3  lg:block">ProjectName</th>
              <th className=" flex-1 text-left px-3 ">Funding Goals</th>
              <th className=" flex-1 text-left px-3 ">Min. Investment</th>
              <th className=" flex-1 text-left px-3 ">ROI</th>
              <th className=" flex-1 text-left px-3 ">Amount Raised</th>
              <th className=" flex-1 text-left px-3 ">Start Date</th>
              <th className=" flex-1 text-left px-3 ">End Date</th>
              <th className=" flex-1 text-center px-3 ">Status</th>
              <th className=" flex-1 text-right px-2 "></th>
            </tr>
          </thead>

          <tbody>
            {filteredProjectData.map((data, index) => (
              <tr
                className="font-sanns text-xs border-b border-gray-110 flex items-center w-full"
                key={index}
              >
                <td className="flex-1 py-5 px-2 text-left hidden lg:block">{data.name}</td>
                <td className="py-5 px-2 text-left flex-1">{data.fundGoals}</td>
                <td className="py-5 px-2 text-left flex-1">{data.minInvest}</td>
                <td className="py-5 px-2 text-left flex-1">{data.roi}</td>
                <td className="py-5 px-2 text-left flex-1">{data.amtRaise}</td>
                <td className="py-5 px-2 text-left flex-1">{data.startDate}</td>
                <td className="py-5 px-2 text-left flex-1">{data.endDate}</td>
                <td className="py-5 px-2 text-center flex-1">
                  <span className={`font-sanns px-2 py-1 rounded-lg text-xs ${data.color}`}>
                    {data.status}
                  </span>
                </td>
                <td
                  className="text-sm flex-1 text-right"
                //   onClick={() => setShowInvestmentDetails(true)}
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

export default AllProjectsTable