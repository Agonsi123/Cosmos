import React from 'react';
import ToggleButton from './ToggleButton';

const NotifyPreference = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-sanns font-medium text-xl text-[#1e1e1e]">
        Edit Your Notification Preference
      </h3>

      {/* Security Alert */}
      <div className="font-sanns flex flex-col gap-4">
        <h5 className="font-medium text-lg text-[#1e1e1e]">Security Alerts</h5>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">Unusual login attempts</p>
          <ToggleButton />
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">Password change confirmation</p>
          <ToggleButton />
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">Suspicious account activity</p>
          <ToggleButton />
        </div>
      </div>

      {/* Transaction Notifications */}
      <div className="font-sanns flex flex-col gap-4">
        <h5 className="font-medium text-lg text-[#1e1e1e]">Transaction Notifications</h5>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">Payment successful</p>
          <ToggleButton />
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">Payment failed</p>
          <ToggleButton />
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">Flagged transactions</p>
          <ToggleButton />
        </div>
      </div>

      {/* User Activity */}
      <div className="font-sanns flex flex-col gap-4">
        <h5 className="font-medium text-lg text-[#1e1e1e]">User Activity</h5>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">New user sign</p>
          <ToggleButton />
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">Profile update</p>
          <ToggleButton />
        </div>
        <div className="flex justify-between">
          <p className="font-normal text-base text-[#1e1e1e70]">Account verification reminders</p>
          <ToggleButton />
        </div>
      </div>
      <div className="bg-[#6b911b] py-[6px] px-[10px] w-32 rounded my-10 ">
        <button className="text-white text-base font-sanns font-medium">Save Changes</button>
      </div>
    </div>
  );
};

export default NotifyPreference

