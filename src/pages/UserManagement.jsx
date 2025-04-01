import React, { useState } from "react";
import UsermanagementHeader from "../components/adminDashboard/userManagement/UsermanagementHeader";
import OverviewMetric from "../components/adminDashboard/userManagement/OverviewMetric";
import TabBarContainer from "../components/adminDashboard/userManagement/TabBarContainer";


const UserManagement = () => {

    

  return (
    <div>
        <UsermanagementHeader />
        <OverviewMetric />
        <TabBarContainer />
        
    </div>
  );
};

export default UserManagement;
