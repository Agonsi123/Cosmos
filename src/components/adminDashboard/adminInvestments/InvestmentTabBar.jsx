import React, {useState} from 'react';
import InvestmentBreakdown from './InvestmentBreakdown';
import FinancialTransaction from './FinancialTransaction';

const InvestmentTabBar = () => {
    const [activeTab, setActiveTab] = useState("breakdown");
    // const [statusFilter, setStatusFilter] = useState(null);

  return (
    <div className="px-4 mx-2 mt-4">
      <div className="flex">
        <button
          className={`${
            activeTab === "breakdown"
              ? "border-b-4 border-b-[#6b911b] border-t-[rgba(0,0,0,0.3)] border-[0.5px] px-3 rounded-t-lg"
              : "border-[0.5px] border-[rgba(0,0,0,0.3)] py-2.5 px-3 rounded-t-lg bg-[#f8ffeb]"
          }`}
          onClick={() => setActiveTab("breakdown")}
        >
          Investments Breakdown
        </button>
        <button
          className={`${
            activeTab === "finance"
              ? "border-b-4 border-b-[#6b911b] border-t-[rgba(0,0,0,0.3)] border-[0.5px] px-3 rounded-t-lg"
              : "border-[0.5px] border-[rgba(0,0,0,0.3)] py-2.5 px-3 rounded-t-lg bg-[#f8ffeb]"
          }`}
          onClick={() => setActiveTab("finance")}
        >
          Financial Transactions
        </button>
        
      </div>
      
      <div>
        {activeTab === "breakdown" ? (
          <InvestmentBreakdown
          // statusFilter={statusFilter}
          />
        ) : (
          <FinancialTransaction />
        )}
      </div>
    
    </div>
  );
}

export default InvestmentTabBar