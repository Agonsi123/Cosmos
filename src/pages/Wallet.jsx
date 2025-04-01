import React from 'react'
import InvestmentHeader from '../components/investments/InvestmentHeader'
import OverFlowProps from '../components/dashboards/OverFlowProps'
import WalletOverview from '../components/wallet/WalletOverview'
import WalletTable from '../components/wallet/WalletTable'
import Pagination from '../components/investments/newprojects/Pagination'

const Wallet = () => {
  return (
    <div className='p-4'>
      <InvestmentHeader/>
      <WalletOverview/>
      <WalletTable/>
      <Pagination/>
      
    </div>
  )
}

export default Wallet
