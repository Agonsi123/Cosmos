import React from 'react';
import { Metric } from '../userManagement/OverviewMetric';
import addCircle from '../../../assets/addCircle.svg';


const ActivitySummary = () => {

    const cards = [
      {
        id: 1,
        title: "TOTAL ADMIN ACTIONS LOGGED",
        figure: 370,
      },
      {
        id: 2,
        title: "ACTIONS IN THE LAST 24 HOURS",
        figure: 30,
      },
      {
        id: 3,
        title: "MOST FREQUENT ACTION TYPE",
        figure: 7,
      },
    ];
  return (
    <div className="px-4">
      <div className='flex justify-between'>
        <h1 className="font-sanns font-medium text-[22px] px-1">Activity Summary</h1>
        <div className='flex bg-[#6b911b] gap-1 w-40 py-2 pr-4 pl-3 rounded-[4px]'>
            <img src={addCircle} alt="" />
            <button className='text-white'>Download Log</button>
        </div>
      </div>
      <div className="py-3">
        <ul className=" flex justify-start gap-6  border-dotted py-6 ">
          {cards.map((metric) => (
            <li className="border-l-2  pl-2 first:border-l-0 w-[130px]" key={metric.id}>
              <Metric title={metric.title} figure={metric.figure} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActivitySummary