import React from "react";
import InvestmentHeader from "../components/investments/InvestmentHeader";
import InvestmentOverview from "../components/investments/InvestmentOverview";
import InvestmentPorfolio from "../components/investments/InvestmentPorfolio";
import { Outlet, useLocation } from "react-router-dom";
import Pagination from "../components/investments/newprojects/Pagination";

const Investment = () => {
  const location = useLocation();

  // Only show the Investment Overview if not on the 'projects' page
  const showInvestmentContent = location.pathname === "/sidebar/investments";

  return (
    <div>
      <div className="px-4">
        {showInvestmentContent && (
          <>
            <InvestmentHeader />
            <InvestmentOverview />
            <InvestmentPorfolio />
            <Pagination/>
          </>
        )}
      </div>
      <Outlet /> {/* This will render child routes like 'projects' */}
    </div>
  );
};

export default Investment;
