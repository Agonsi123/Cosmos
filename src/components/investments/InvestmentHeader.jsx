import React from 'react'
import DashBoardsHeader from "../../components/dashboards/DashBoardsHeader"
import bell from "../../assets/bell.png"

const InvestmentHeader = () => {
  return (
    <div>
      <DashBoardsHeader title="Investment" text="Manage and track all your investments easily" image={bell}/>
      </div>
      
  )
}

export default InvestmentHeader
