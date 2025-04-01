import React from 'react'

const SectionProps = ({title}) => {
  return (
    <div>
        <div className="bg-sectionImg  md:h-auto w-full h-auto bg-center bg-black bg-cover bg-no-repeat bg-opacity-50 bg-blend-overlay  ">
          <p className="font-merriweather font-bold text-4xl text-white text-center py-32">{title}</p>
      
      </div>
      
    </div>
  )
}

export default SectionProps
