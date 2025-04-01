import React from 'react'
import Card from './Cards'
import RoiGrowth from './RoiGrowth'
import Graph from './Graph'
import ProjectOverview from './ProjectOverview'
import TableOverview from './TableOverview'

const ContainerCard = () => {
  return (
    <div>
      <Card/>
      <div className='shadow-lg'>
      <RoiGrowth/>
      <Graph/>
      </div>
      <ProjectOverview/>
      <TableOverview/>
    </div>
  )
}

export default ContainerCard
