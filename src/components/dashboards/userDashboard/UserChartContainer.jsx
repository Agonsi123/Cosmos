import React from 'react'
import LeftChart from './LeftChart'
// import RightChart from './RightChart'
import Right from './Right'

const UserChartContainer = () => {
  return (
    <div className='flex gap-4'>
      <LeftChart/>
      <Right/>
    </div>
  )
}

export default UserChartContainer
