import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import range from '../../../assets/range.svg';

const InvestmentDetailsModal = ({setShowInvestmentDetails}) => {
  return (
    <div className="bg-black bg-opacity-80 backdrop-blur-sm fixed h-screen z-5 w-full flex flex-col items-center justify-center inset-0">
      <div className="flex justify-between border-b border-[rgba(0,0,0,0.25)] py-4 px-6 max-w-[500px] w-full rounded-t-xl bg-white relative">
        <h3 className="font-sans text-2xl font-medium text-[#6b911b]">Investment Details</h3>
        <div
          className="cursor-pointer mt-2"
          onClick={() => {
            setShowInvestmentDetails(false);
            // console.log(showPendingUserDetails);
          }}
        >
          <CiCircleRemove className="size-6 " />
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-4 pb-8 px-6 max-w-[500px] w-full rounded-b-xl bg-white">
        <div className="flex flex-col gap-4">
          <h5 className="font-semibold text-base text-[#1e1e1e]">Investment Overview</h5>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Investor:</p>
              <p className="font-medium">John Doe</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Project Name:</p>
              <p className="font-medium">Rice Farming Expansion</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Amount Invested:</p>
              <p className="font-medium">₦500,000</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Investment Date:</p>
              <p className="font-medium">Jan 5, 2025</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Expected ROI:</p>
              <p className="font-medium">25%</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Status:</p>
              <p className="font-medium py-[2px] px-2 bg-[#e2f1fc] rounded-lg">Active</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-semibold text-base text-[#1e1e1e]">Progress & Status</h5>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Current Progress:</p>
              <img src={range} alt="range" />
              <p className="font-medium">60% Completed</p>
            </div>
            <div className="flex gap-2 text-sm text-[rgba(30,30,30,0.75)]">
              <p className="font-normal">Estimated Completion</p>
              <p className="font-medium">Dec 31, 2025</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-semibold text-base text-[#1e1e1e]">Fund Breakdown</h5>
          <div className="flex flex-col ml-5 gap-6">
            <div className="flex gap-[194.5px] font-medium text-sm text-[rgba(30,30,30,0.75)]">
              <p className="">Category</p>
              <p className="">Amount</p>
            </div>
            <div className="flex gap-36 text-sm font-normal text-[rgba(30,30,30,0.75)]">
              <p className="">Initial Investment</p>
              <p className="">₦500,000</p>
            </div>
            <div className="flex gap-[141px] text-sm font-normal text-[rgba(30,30,30,0.75)]">
              <p className="">Expected Returns</p>
              <p className="">₦125,000</p>
            </div>
            <div className="flex gap-[141px] text-sm font-normal text-[rgba(30,30,30,0.75)]">
              <p className="">Total Payout (ROI)</p>
              <p className="">₦625,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentDetailsModal