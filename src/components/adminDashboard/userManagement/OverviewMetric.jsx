import React from 'react';
// import { Metric } from '../../dashboards/metrics/Cards';

const OverviewMetric = () => {

    const cards = [
        {
            id: 1,
            title: "TOTAL ACTIVE USERS",
            figure: 162370,
        },
        {
            id: 2,
            title: "PENDING VERIFICATIONS",
            figure: 1230,
        },
        {
            id: 3,
            title: "SUSPENDED USERS",
            figure: 73,
        },
    ];

    return (
        <div className="px-4">
            <h1 className="font-sanns font-medium text-[22px] px-1">User Overview Metric</h1>
            <div className="py-3" >
                <ul className=" flex justify-start gap-36 border-b-2 border-dotted py-6 ">
                    {cards.map((metric) => (
                        <li className="border-l-2  pl-2 first:border-l-0"  key={metric.id}>
                            <Metric title={metric.title} figure={metric.figure} />
        
                        </li>
                    
                    ))}
                </ul>
                
            </div>
        
            
        </div>
    );
};

export default OverviewMetric;

export const Metric = ({ title, figure }) => {
  return <div className="space-y-2" >
    <h2 className="font-manrope text-xs font-medium text-[#00000080]">{title}</h2>
    <p className="text-[#1E1E1ECC] text-xl font-semibold">{figure}</p>
  </div>
};