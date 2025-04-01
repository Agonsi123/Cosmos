import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const data = [
  { name: "JAN", uv: 20000 },
  { name: "FEB", uv: 30000 },
  { name: "MAR", uv: 25000 },
  { name: "APR", uv: 28000 },
  { name: "MAY", uv: 22000 },
  { name: "JUN", uv: 33000 },
  { name: "JUL", uv: 40000 },
  { name: "AUG", uv: 26000 },
  { name: "SEP", uv: 27000 },
  { name: "OCT", uv: 31000 },
  { name: "NOV", uv: 29000 },
  { name: "DEC", uv: 35000 }
];

const AdminGraph = () => {
  return (
    <div className="h-64 py-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#B5D278" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6B911B" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Dashed Bottom Border */}
          

          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fill: "gray", fontSize: 12 }} />
          <Tooltip />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#B5D278"
            fill="url(#colorUv)"
            // dot={{ fill: "#4A7C12", strokeWidth: 2, r: 4 }} // Dots on points
          />
        </AreaChart>
      </ResponsiveContainer>
      <h1 className="font-semibold text-sm text-center">MONTHS</h1>
    </div>
  );
};

export default AdminGraph;
