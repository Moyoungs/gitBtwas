import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { useSimulationStore } from '../store'

export default function DashBoard() {
  const { marketType } = useParams()
//   const setMarketType = useSimulationStore((s) => s.setMarketType)

  // URL → Zustand 동기화 (마운트 시)
  useEffect(() => {
    if (marketType === 'DAM' || marketType === 'RTM') {
    //   setMarketType(marketType)
    }
  }, [marketType])

  return <div>Simulation Page</div>
}