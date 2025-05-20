import React, { useState } from "react";
import SearchSection from "./SearchSection";
import { CiSearch } from "react-icons/ci";
import mix from "../../../assets/mix.png";
import { TbFileExport } from "react-icons/tb";
import PendingUserVerification from "./tabBar/PendingUserVerification";
import ActiveUsers from "./tabBar/ActiveUsers";
import SuspendedUsers from "./tabBar/SuspendedUsers";
// import BulkActionModal from "../components/adminDashboard/userManagement/userManagementModals/BulkActionModal";


const TabBarContainer = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="px-4 mx-2 mt-4">
      <div className="flex">
        <button
          className={`${
            activeTab === "active"
              ? "border-b-4 border-b-[#6b911b] border-t-[rgba(0,0,0,0.3)] border-[0.5px] px-12 rounded-t-lg"
              : "border-[0.5px] border-[rgba(0,0,0,0.3)] py-2.5 px-12 rounded-t-lg bg-[#f8ffeb]"
          }`}
          onClick={() => setActiveTab("active")}
        >
          Active Users
        </button>
        <button
          className={`${
            activeTab === "pending"
              ? "border-b-4 border-b-[#6b911b] border-t-[rgba(0,0,0,0.3)] border-[0.5px] px-3 rounded-t-lg"
              : "border-[0.5px] border-[rgba(0,0,0,0.3)] py-2.5 px-3 rounded-t-lg bg-[#f8ffeb]"
          }`}
          onClick={() => setActiveTab("pending")}
        >
          User Verification Pending
        </button>
        <button
          className={`${
            activeTab === "suspended"
              ? "border-b-4 border-b-[#6b911b] border-t-[rgba(0,0,0,0.3)] border-[0.5px] px-10 rounded-t-lg"
              : "border-[0.5px] border-[rgba(0,0,0,0.3)] py-2.5 px-10 rounded-t-lg bg-[#f8ffeb]"
          }`}
          onClick={() => setActiveTab("suspended")}
        >
          Suspended Users
        </button>
      </div>
      <SearchSection
        tittle="Active Users"
        icon={<CiSearch className="text-[#00000080] mr-2" size={30} />}
        icon2={<img src={mix} alt="mix" />}
        icon3={<TbFileExport />}
        text="Export"
      />
      <div>
        {activeTab === "active" ? (
          <ActiveUsers />
        ) : activeTab === "pending" ? (
          <PendingUserVerification />
        ) : (
          <SuspendedUsers />
        )}
      </div>
      {/* {showBulkModal && <BulkActionModal setShowBulkModal={setShowBulkModal} />} */}
    </div>
  );
};

export default TabBarContainer;
