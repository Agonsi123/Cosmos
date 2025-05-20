import React from 'react';
import { Metric } from '../userManagement/OverviewMetric';

const InvestmentOverview = () => {

    const cards = [
      {
        id: 1,
        title: "TOTAL FUNDS INVESTED",
        figure: "₦250,000,000",
      },
      {
        id: 2,
        title: "TOTAL RETURNS GENERATED",
        figure: "₦75,000,000",
      },
      {
        id: 3,
        title: "TOTAL WITHDRAW",
        figure: "₦100, 000,000",
      },
      {
        id: 4,
        title: "ACTIVE INVESTORS",
        figure: 5200,
      },
    ];
  return (
    <div className="px-4">
                <h1 className="font-sanns font-medium text-[22px] px-1">Investment Overview</h1>
                <div className="py-3" >
                    <ul className=" flex justify-start gap-20 border-b-2 border-dotted py-6 ">
                        {cards.map((metric) => (
                            <li className="border-l-2  pl-2 first:border-l-0"  key={metric.id}>
                                <Metric title={metric.title} figure={metric.figure} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
  )
}

export default InvestmentOverview