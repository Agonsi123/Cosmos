import React, { useState } from "react";
import UsermanagementHeader from "../components/adminDashboard/userManagement/UsermanagementHeader";
import OverviewMetric from "../components/adminDashboard/userManagement/OverviewMetric";
import TabBarContainer from "../components/adminDashboard/userManagement/TabBarContainer";
import notification from '../assets/notification.svg';


const UserManagement = () => {

    

  return (
    <div>
      <UsermanagementHeader
        title="User Management"
        text="View, manage, and oversea user accounts."
        img={<img src={notification} alt="bell" />}
      />
      <OverviewMetric />
      <TabBarContainer />
    </div>
  );
};

export default UserManagement;
