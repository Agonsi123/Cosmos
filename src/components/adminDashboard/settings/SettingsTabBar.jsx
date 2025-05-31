import React, {useState} from 'react';
import ProfileManage from './ProfileManage';
import NotifyPreference from './NotifyPreference';

const SettingsTabBar = () => {
    const [activeTab, setActiveTab] = useState("profile");


  return (
    <div className="px-5 mt-4 flex gap-6 bg-white">
      <div className="flex flex-col items-start gap-6">
        <button
          className={`${
            activeTab === "profile"
              ? "border-l-4 border-l-[#6b911b] p-3 bg-[#fcfcfc] text-base text-[#141414] font-normal font-sanns"
              : "p-4 text-base text-[#141414] font-normal font-sanns"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Manage Profile
        </button>
        <button
          className={`${
            activeTab === "preference"
              ? "border-l-4 border-l-[#6b911b] p-3 bg-[#fcfcfc] text-base text-[#141414] font-normal font-sanns"
              : "p-4 text-base text-[#141414] font-normal font-interr"
          }`}
          onClick={() => setActiveTab("preference")}
        >
          Notification <span className="font-sanns">Preference</span>
        </button>
      </div>
      <div className="border border-[#00000010] rounded-lg px-6 pt-12 w-[750px]">
        {activeTab === "profile" ? <ProfileManage /> : <NotifyPreference />}
      </div>
    </div>
  );
}

export default SettingsTabBar