import React from 'react';
import UsermanagementHeader from '../components/adminDashboard/userManagement/UsermanagementHeader';
import notification from '../assets/notification.svg';
import SettingsTabBar from '../components/adminDashboard/settings/SettingsTabBar';

const AdminSettings = () => {
  return (
    <div>
      <UsermanagementHeader
        title="Settings"
        text="Your account settings, all in one place."
        img={<img src={notification} alt="bell" />}
      />
      <div className='px-4'>
        <h1 className="font-sanns font-medium text-[22px] px-1">Account Settings</h1>
      </div>
      <SettingsTabBar/>
    </div>
  );
}

export default AdminSettings