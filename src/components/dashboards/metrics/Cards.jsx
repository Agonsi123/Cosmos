import React from "react";

const cards = [
  {
    id: 1,
    title: "TOTAL BALANCE",
    balance: 2500000,
  },
  {
    id: 2,
    title: "ONGOING PROJECTS",
    balance: 5,
  },
  {
    id: 3,
    title: "TOTAL ROI",
    balance: 500000,
  },
];

const Card = () => {
  return (
    <div className="">
      <h1 className="font-sanns font-medium text-[22px]">Key Metrics</h1>
      <div className="py-3" >
        <ul className=" flex justify-start gap-36 border-b-2 border-dotted py-6 ">
          {cards.map((metric) => (
            <li className="border-l-2  pl-2 first:border-l-0"  key={metric.id}>
              <Metric title={metric.title} balance={metric.balance} />

            </li>
            
          ))}
        </ul>
        
      </div>

      
    </div>
  );
};

export default Card;

export const Metric = ({ title, balance }) => {
  return <div className="space-y-2" >
    <h2 className="font-manrope text-xs font-medium text-[#00000080]">{title}</h2>
    <p className="text-[#1E1E1ECC] text-xl font-semibold">₦{balance}</p>
  </div>
};
