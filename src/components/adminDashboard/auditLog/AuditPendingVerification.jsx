import React, {useContext} from 'react';
import ArrowLineUpRight from '../../../assets/ArrowLineUpRight.svg';
import AuditPagination from './AuditPagination';
import AuditIssueDetailsModal from './AuditIssueDetailsModal';
import { AppContext } from '../../../context/Index';

const AuditPendingVerification = () => {
    // const [showAuditIssueDetails, setShowAuditIssueDetails] = useState(false);
    const {showAuditIssueDetails, setShowAuditIssueDetails} = useContext(AppContext);

    const userData = [
      {
        date: "Jan 05,2025",
        time: "3:27AM",
        name: "April Dave",
        action: "Approval",
        user: "Piper Mills",
        color: "bg-[#ecfdf3] text-[#0227a4b]",
      },
      {
        date: "Jan 05,2025",
        time: "4:36PM",
        name: "Rice Black",
        action: "Rejection",
        user: "Cocoa Sheen",
        color: "bg-[#fee2d5] text-[#7a0204]",
      },
      {
        date: "Jan 05,2025",
        time: "2:45PM",
        name: "Cocoa Sheen",
        action: "Approval",
        user: "Peter Cass",
        color: "bg-[#ecfdf3] text-[#0227a4b]",
      },
      {
        date: "Jan 05,2025",
        time: "5:54AM",
        name: "Suliat Nton",
        action: "Suspension",
        user: "Adeolu Nelson",
        color: "bg-[#fef9c3] text-[#713f12]",
      },
      {
        date: "Jan 05,2025",
        time: "6:63AM",
        name: "Adeolu Nelson",
        action: "Approval",
        user: "Suliat Nton",
        color: "bg-[#ecfdf3] text-[#0227a4b]",
      },
      {
        date: "Jan 05,2025",
        time: "7:32PM",
        name: "Bean Kyle",
        action: "Rejection",
        user: "Bean Kyle",
        color: "bg-[#fee2d5] text-[#7a0204]",
      },
      {
        date: "Jan 05,2025",
        time: "8:21AM",
        name: "Peter Cass",
        action: "Suspension",
        user: "Rice Black",
        color: "bg-[#fef9c3] text-[#713f12]",
      },
      {
        date: "Jan 05,2025",
        time: "10:17PM",
        name: "Piper Mills",
        action: "Approval",
        user: "April Dave",
        color: "bg-[#ecfdf3] text-[#0227a4b]",
      },
    ];

  return (
    <>
      <div className="py-6 overflow-x-auto relative">
        <table width={"100%"}>
          <thead className="shadow-sm">
            <tr className="font-sans text-[#4F5144] text-sm font-light flex w-full">
              <th className=" flex-1 text-left p-6 lg:block">DATE</th>
              <th className=" flex-1 text-left p-6 ">TIME OF ACTION</th>
              <th className=" flex-1 text-left p-6">ADMIN NAME</th>
              <th className=" flex-1 text-center p-6">ACTION TYPE</th>
              <th className=" flex-1 text-left p-6">AFFECTED USER</th>
              <th className=" flex-1 text-left p-6"></th>
            </tr>
          </thead>

          <tbody>
            {userData.map((data, index) => (
              <tr className="border-b border-gray-110 flex items-center w-full" key={index}>
                <td className="flex-1 text-sm px-6 hidden lg:block">{data.date}</td>
                <td className="font-sanns px-6 text-sm flex-1">{data.time}</td>
                <td className="font-sanns px-6 text-sm flex-1 text-left">{data.name}</td>
                <td className="text-center px-6 flex-1">
                  <span className={`font-sanns px-2 py-1 rounded-lg text-sm ${data.color}`}>
                    {data.action}
                  </span>
                </td>
                <td className="font-sanns px-6 text-sm flex-1 text-left">{data.user}</td>
                <td
                  className="font-sanns pl-9 text-sm flex-1 text-right"
                  onClick={() => setShowAuditIssueDetails(true)}
                >
                  <img src={ArrowLineUpRight} alt="Arrow line upright" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AuditPagination />
      </div>

      {/* Detailed Audit Issue modal */}

      {showAuditIssueDetails && (
        <AuditIssueDetailsModal setShowAuditIssueDetails={setShowAuditIssueDetails} />
      )}
    </>
  );
}

export default AuditPendingVerification