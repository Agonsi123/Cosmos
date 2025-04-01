import React from 'react'
import PortSection from '../components/portfolio/PortSection'
import Why from '../components/portfolio/Why'
import Current from '../components/portfolio/Current'
import Past from '../components/portfolio/Past'
import Investment from '../components/Investment'
import Invest from '../components/Invest'

const Portfolio = () => {
  return (
    <div className='font-sanns'>
      <PortSection/>
      <Why/>
      <Current/>
      <Past/>
      <Investment/>
      <Invest/>
      
    </div>
  )
}

export default Portfolio
