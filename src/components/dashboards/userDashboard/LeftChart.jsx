import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", earnings: 18000 },
  { name: "Feb", earnings: 10000 },
  { name: "Mar", earnings: 9000 },
  { name: "Apr", earnings: 16000 },
  { name: "May", earnings: 32000 },
  { name: "Jun", earnings: 47000 },
  { name: "Jul", earnings: 19000 },
  { name: "Aug", earnings: 21000 },
  { name: "Sep", earnings: 23000 },
  { name: "Oct", earnings: 45000 },
  { name: "Nov", earnings: 57000 },
  { name: "Dec", earnings: 60000 },
];

const LeftChart = () => {
  return (
    <div className="h-96 mt-14   w-1/2  rounded-2xl shadow-xl pl-8">
      <div className="flex py-6 justify-between items-center">
      <h2 className="text-[#4D4D4D] text-sm font-semibold "> Earnings Balance</h2>
      <div className="text-[#1BA019]">
      <RiArrowDownSLine size={20}/>
      </div>
      

      </div>
      <hr />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 40, right: 10, left: -10, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6B7280" }} />
          <YAxis tick={{ fontSize: 10, fill: "#6B7280" }} />
          <Tooltip cursor={{ fill: "#F2F7FF" }} />
          <Bar dataKey="earnings" fill="#1BA019" barSize={15} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeftChart;
