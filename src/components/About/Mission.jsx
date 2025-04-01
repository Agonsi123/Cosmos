import React from 'react'
// import WorkLoad from '../WorkLoad'
// import HowItWorksProps from '../HowItWorksProps';
import missionone from "../../assets/m1.png";
import missiontwo from "../../assets/missiontwo.png"
import missionthree from "../../assets/missionthree.png"

const missionData = [
    {
        id:1,
        title:"Empower farmers",
        text:"Empower farmers through technology and collaboration",
        image: missionone

    },
    {
        id:2,
        title:"Connect investors",
        text:"Connect investors with sustainable agriculture projects",
        image:missiontwo

    },
    {
        id:3,
        title:"Build the future",
        text:"Build a sustainable future for agriculture and communities",
        image: missionthree

    },

]

const Mission = () => {
  return (
    <div>
        <div className='md:px-16 px-8 md:py-16 py-10 lg:px-28'>
            <h1 className='font-semibold text-header text-center py-4 md:py-6 md:text-4xl font-sanns'>
                Our Mission
            </h1>
            <div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        missionData.map((data)  => (
                            <li className="list-none py-2"  key={data.id}>
            <WorkLoad title={data.title} text={data.text} image={data.image} />
          </li>
                        ))
                    }
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Mission

const WorkLoad = ({ title, text, image }) => {
    return (
      <div className="flex items-center gap-2 shadow-md py-4 px-2 justify-center lg:gap-4 border-[1px] border-[#E3E3E3] rounded-lg">
        <div className='w'>
          <img className="lg:w-[150px] lg:h-[80px] w-[100px] h-[60px]" src={image} alt="image" />
        </div>
        <div className='w-full'>
          <h1 className="font-sanns font-semibold text-xs md:text-lg lg:text-lg">{title}</h1>
          <p className="font-sanns font-normal text-xs text-[#9B9D8E] lg:text-sm">{text}</p>
        </div>
      </div>
    );
  };
