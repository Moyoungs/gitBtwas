import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setMarketType } from '../store/simulationSlice'

type MarketType = 'DAM' | 'RTM'

const menuItems: { type: MarketType; label: string; description: string }[] = [
  {
    type: 'DAM',
    label: 'DAM 시뮬레이션',
    description: 'Day-Ahead Market 정산 시뮬레이션',
  },
  {
    type: 'RTM',
    label: 'RTM 시뮬레이션',
    description: 'Real-Time Market 정산 시뮬레이션',
  },
]

export default function SimulationPage() {
  const { marketType } = useParams<{ marketType: MarketType }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
//   const currentMarketType = useAppSelector((s) => s.simulation.marketType)

  // URL → Redux 동기화
  useEffect(() => {
    if (marketType === 'DAM' || marketType === 'RTM') {
      dispatch(setMarketType(marketType))
    }
  }, [marketType])

//   const handleMarketTypeChange = (type: MarketType) => {
//     dispatch(setMarketType(type))
//     navigate(`/simulation/${type}`)
//   }

//   const navigate = useNavigate()
  
    return (
      <div style={{
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
  
        {/* 헤더 */}
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>
            시뮬레이션 페이지
          </h1>
          <p style={{ margin: '8px 0 0', color: '#666', fontSize: '14px' }}>
            시뮬레이션 유형을 선택하세요
          </p>
        </div>
  
        {/* 카드 버튼 목록 */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {menuItems.map((item) => (
            <button
              key={item.type}
            //   onClick={() => navigate(`/simulation`)}
              onClick={() => navigate(`/simulation/${item.type}`)}
              style={{
                width: '200px',
                padding: '24px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                transition: 'all 0.2s',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0078d4'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,120,212,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#ddd'
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'
              }}
            >
              <span style={{
                fontSize: '24px',
              }}>
                {item.type === 'DAM' ? '📊' : '⚡'}
              </span>
              <span style={{ fontWeight: 600, fontSize: '15px' }}>
                {item.label}
              </span>
              <span style={{ fontSize: '12px', color: '#888' }}>
                {item.description}
              </span>
            </button>
          ))}
        </div>
  
      </div>
    )
}