import React from 'react';
import UsermanagementHeader from "../components/adminDashboard/userManagement/UsermanagementHeader";
import notification from '../assets/notification.svg';
import ActivitySummary from '../components/adminDashboard/auditLog/ActivitySummary';
import AuditSearchSection from '../components/adminDashboard/auditLog/AuditSearchSection';
import { CiSearch } from "react-icons/ci";
import sharpPlus from '../assets/sharpPlus.svg';
import AuditPendingVerification from '../components/adminDashboard/auditLog/AuditPendingVerification';

const AuditLog = () => {
  return (
    <div>
        <UsermanagementHeader
            title="Audit Log"
            text="Track and review system activities in real time."
            img={<img src={notification} alt="bell" />}
        />
        <ActivitySummary/>
        <AuditSearchSection
            tittle="Admin Activity Log & History"
            icon={<CiSearch className="text-[#00000080] mr-2" size={30} />}
            icon2={<img src={sharpPlus} alt="sharpPlus" />}
        />
        <AuditPendingVerification/>
    </div>
  );
}

export default AuditLog