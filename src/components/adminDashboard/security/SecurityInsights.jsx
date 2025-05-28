import React from 'react';
import { Metric } from '../userManagement/OverviewMetric';


const cards = [
  {
    id: 1,
    title: "ACTIVE SECURITY ALERTS",
    figure: "20",
  },
  {
    id: 2,
    title: "FLAGGED TRANSACTIONS",
    figure: "8",
  },
  {
    id: 3,
    title: "PENDIND VERIFICATION",
    figure: "20",
  },
  {
    id: 4,
    title: "COMPLIANCE CHECKS",
    figure: "95%",
  },
];

const SecurityInsights = () => {
  return (
    <div className="px-4">
                    <h1 className="font-sanns font-medium text-[22px] px-1">Security Insights</h1>
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
  );
}

export default SecurityInsights