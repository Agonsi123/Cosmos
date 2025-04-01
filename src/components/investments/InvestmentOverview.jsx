import React from "react";
import OverFlowProps from "../dashboards/OverFlowProps";
import vector from "../../assets/vec.png";
import { NavLink } from "react-router-dom";
import PropOverview from "./PropOverview";

const investments = [
  {
    id: 1,
    title: "ACTIVE INVESTMENT",
    balance: 1000,
  },
  {
    id: 2,
    title: "COMPLETED INVESTMENT",
    balance: 5000,
  },
  {
    id: 3,
    title: "UPCOMING LAYOUT",
    balance: 150000,
  },
  {
    id: 4,
    title: "TOTAL ROI EARNED",
    balance: 1200000,
  },
];
const InvestmentOverview = () => {
  return (
    <div className="my-6">
      <div className="flex justify-between items-center">
        <h1>Investment Overview</h1>
        <div className="flex gap-2 bg-bgGray items-center py-1 px-4 rounded text-white">
          <img src={vector} alt="vector" />
          <span>
            <NavLink to="projects">Invest in New Projects</NavLink>
          </span>
        </div>
      </div>

      <ul className=" flex justify-start gap-36 border-b-2 border-dotted py-6 ">
        {investments.map((investment) => (
          <li className="border-l-2  pl-2 first:border-l-0" key={investment.id}>
            <OverFlowProps
              key={investment.id}
              title={investment.title}
              balance={investment.balance}
            />
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default InvestmentOverview;
