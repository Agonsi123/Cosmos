import React from 'react';
import UsermanagementHeader from "../components/adminDashboard/userManagement/UsermanagementHeader";
import notification from '../assets/notification.svg';
import ActivitySummary from '../components/adminDashboard/auditLog/ActivitySummary';

const AuditLog = () => {
  return (
    <div>
        <UsermanagementHeader
            title="Audit Log"
            text="Track and review system activities in real time."
            img={<img src={notification} alt="bell" />}
        />
        <ActivitySummary/>
    </div>
  );
}

export default AuditLog