import React from 'react';
import UsermanagementHeader from '../components/adminDashboard/userManagement/UsermanagementHeader';
import InvestmentOverview from '../components/adminDashboard/adminInvestments/InvestmentOverview';
import InvestmentTabBar from '../components/adminDashboard/adminInvestments/InvestmentTabBar';
import notification from '../assets/notification.svg';

const AdminInvestments = () => {
  return (
    <div>
      <UsermanagementHeader
        title="Investment & Fund Tracking Page"
        text="Track investments, monitor funds, and manage transactions seamlessly."
        img={<img src={notification} alt="bell" />}
      />
      <InvestmentOverview />
      <InvestmentTabBar />
    </div>
  );
}

export default AdminInvestments