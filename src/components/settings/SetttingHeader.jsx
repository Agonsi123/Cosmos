import React from 'react'
import bell from "../../assets/bell.png"
import DashBoardsHeader from '../dashboards/DashBoardsHeader'

const SetttingHeader = () => {
  return (
    <div>
        <DashBoardsHeader title="Settings" text="Your account settings, all in one place" image={bell}/>
      
    </div>
  )
}

export default SetttingHeader
