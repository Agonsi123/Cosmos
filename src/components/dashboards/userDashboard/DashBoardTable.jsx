import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const notifications = [
  {
    title: "Cocoa Price Soaring",
    category: "Market Changes",
    date: "Oct 18, 2025",
    time: "2 hours ago",
  },
  {
    title: "Vegetable farm season kicked off",
    category: "Crop progress",
    date: "Jan 14, 2025",
    time: "3 hours ago",
  },
  {
    title: "Cocoa monthly payment disbursed",
    category: "Disbursement",
    date: "Oct 14, 2025",
    time: "4 hours ago",
  },
  {
    title: "New message from admin",
    category: "Admin",
    date: "Oct 10, 2025",
    time: "5 hours ago",
  },
  {
    title: "Inflation hit yam market",
    category: "Market Changes",
    date: "Nov 18, 2025",
    time: "7 hours ago",
  },
  {
    title: "Plantain plantation",
    category: "Crop progress",
    date: "Oct 28, 2025",
    time: "2 hours ago",
  },
  {
    title: "Watch videos",
    category: "Admin",
    date: "Oct 18, 2025",
    time: "2 hours ago",
  },
];

const NotificationsTable = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="w-full ">
          <tbody className="">
            {notifications.map((notification, index) => (

              <tr
                key={index}
                className={` ${
                  index % 2 === 0 ? "bg-[#EAECF0]" : ""
                }`}
              >
                <td className="py-4 px-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="text-[#101828] text-[15.61px] font-sanns font-normal">{notification.title}</td>
                <td className="text-[#667085] text-[15.61px] font-sanns font-normal">{notification.category}</td>
                <td className="text-[#667085] text-[15.61px] font-sanns font-normal">{notification.date}</td>
                <td className="text-[#667085] text-[15.61px] font-sanns font-normal">{notification.time}</td>
                <td className="p-2">
                  <button>
                    <RiDeleteBin5Line  />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationsTable;
