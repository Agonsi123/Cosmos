
import MetricsHeader from '../components/dashboards/metrics/MetricsHeader'
import MetricsMain from '../components/dashboards/metrics/MetricsMain'

const Overview = () => {
  return (
    <div className=' px-4'>
      <div>
      <MetricsHeader/>
      </div>
      <div>
      <MetricsMain/>
      </div>
      
    </div>
  )
}

export default Overview
