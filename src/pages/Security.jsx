import React from 'react';
import UsermanagementHeader from '../components/adminDashboard/userManagement/UsermanagementHeader';
import SecurityInsights from '../components/adminDashboard/security/SecurityInsights';
import SecurityTabBar from '../components/adminDashboard/security/SecurityTabBar';
import notification from '../assets/notification.svg';

const Security = () => {
  return (
    <div>
      <UsermanagementHeader
        title="Security & Compliance"
        text="Monitor security alerts, enforce compliance, and track suspicious activities."
        img={<img src={notification} alt="bell" />}
      />
      <SecurityInsights />
      <SecurityTabBar />
    </div>
  );
}

export default Security