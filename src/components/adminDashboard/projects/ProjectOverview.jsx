import React from 'react';
import { Metric } from '../userManagement/OverviewMetric';
import addCircle from '../../../assets/addCircle.svg';



const cards = [
  {
    id: 1,
    title: "TOTAL PROJECTS",
    figure: 120,
  },
  {
    id: 2,
    title: "ACTIVE PROJECTS",
    figure: 75,
  },
  {
    id: 3,
    title: "PENDING PROJECTS",
    figure: 30,
  },
  {
    id: 4,
    title: "COMPLETED PROJECTS",
    figure: 15,
  },
];

const ProjectOverview = () => {
  return (
     <div className="px-4">
          <div className='flex justify-between'>
            <h1 className="font-sanns font-medium text-[22px] px-1">Project Overview</h1>
            <div className='flex bg-[#6b911b] gap-1 w-40 py-2 pr-4 pl-3 rounded-[4px]'>
                <img src={addCircle} alt="" />
                <button className='text-white'>Add Project</button>
            </div>
          </div>
          <div className="py-3">
            <ul className=" flex justify-start gap-6  border-dotted py-6 ">
              {cards.map((metric) => (
                <li className="border-l-2  pl-2 first:border-l-0 w-full" key={metric.id}>
                  <Metric title={metric.title} figure={metric.figure} />
                </li>
              ))}
            </ul>
          </div>
        </div>
  );
}

export default ProjectOverview