import React, {useState} from 'react';
import SecurityAlert from './SecurityAlert';
import ComplianceKyc from './ComplianceKyc';
import FlagedTransaction from './FlagedTransaction';


const SecurityTabBar = () => {

    const [activeTab, setActiveTab] = useState("alert");

  return (
    <div className="px-4 mx-2 mt-4">
      <div className="flex">
        <button
          className={`${
            activeTab === "alert"
              ? "border-b-4 border-b-[#6b911b] border-t-[rgba(0,0,0,0.3)] border-[0.5px] px-8 rounded-t-lg"
              : "border-[0.5px] border-[rgba(0,0,0,0.3)] py-2.5 px-8 rounded-t-lg bg-[#f8ffeb]"
          }`}
          onClick={() => setActiveTab("alert")}
        >
          Security Alerts
        </button>
        <button
          className={`${
            activeTab === "kyc"
              ? "border-b-4 border-b-[#6b911b] border-t-[rgba(0,0,0,0.3)] border-[0.5px] px-4 rounded-t-lg"
              : "border-[0.5px] border-[rgba(0,0,0,0.3)] py-2.5 px-4 rounded-t-lg bg-[#f8ffeb]"
          }`}
          onClick={() => setActiveTab("kyc")}
        >
          Compliance & KYC
        </button>
        <button
          className={`${
            activeTab === "flaged"
              ? "border-b-4 border-b-[#6b911b] border-t-[rgba(0,0,0,0.3)] border-[0.5px] px-3 rounded-t-lg"
              : "border-[0.5px] border-[rgba(0,0,0,0.3)] py-2.5 px-3 rounded-t-lg bg-[#f8ffeb]"
          }`}
          onClick={() => setActiveTab("flaged")}
        >
          Flagged Transactions
        </button>
      </div>
      
      <div>
        {activeTab === "alert" ? (
            <SecurityAlert 
          />
        ) : activeTab === "kyc" ? (
            <ComplianceKyc />
        ) : (
            <FlagedTransaction/>
        )}
      </div>
    </div>
  );
}

export default SecurityTabBar