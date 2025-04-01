import React from 'react'

import MetricAdmin from './MetricProps';


const cards = [
    {
      id: 1,
      title: "TOTAL ACTIVE USERS",
      balance: 162370,
    },
    {
      id: 2,
      title: "TOTAL FUND INVESTED",
      balance: 750500000,
    },
    {
      id: 3,
      title: "RETURNS GENERATED",
      balance: 500000,
    },
    {
      id: 4,
      title: "WITHDRAWALS PROCESSED",
      balance: 500000,
    },
  ];
const AdminMetric = () => {
  return (
    <div className="px-4">
    <h1 className="font-sanns font-medium text-[22px]">Key Metrics</h1>
    <div className="py-3" >
      <ul className=" flex justify-start gap-12 border-b-2 border-dotted py-6 ">
        {cards.map((metric) => (
          <li className="border-l pl-1 first:border-l-0"  key={metric.id}>
            <MetricAdmin title={metric.title} balance={metric.balance} />

          </li>
          
        ))}
      </ul>
      
    </div>

    
  </div>
  )
}

export default AdminMetric
