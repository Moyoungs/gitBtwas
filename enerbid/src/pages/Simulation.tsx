import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setMarketType } from '../store/simulationSlice'

type MarketType = 'DAM' | 'RTM'

export default function SimulationPage() {
  const { marketType } = useParams<{ marketType: MarketType }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const currentMarketType = useAppSelector((s) => s.simulation.marketType)

  // URL → Redux 동기화
  useEffect(() => {
    if (marketType === 'DAM' || marketType === 'RTM') {
      dispatch(setMarketType(marketType))
    }
  }, [marketType])

  const handleMarketTypeChange = (type: MarketType) => {
    dispatch(setMarketType(type))
    navigate(`/simulation/${type}`)
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>

      {/* 좌측 설정 패널 */}
      <aside style={{
        width: '260px',
        borderRight: '1px solid #ddd',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          설정
        </h2>

        {/* MarketType 선택 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '13px', color: '#666' }}>Market Type</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            {(['DAM', 'RTM'] as MarketType[]).map((type) => (
              <button
                key={type}
                onClick={() => handleMarketTypeChange(type)}
                style={{
                  flex: 1,
                  padding: '8px 0',
                  border: '1px solid',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: currentMarketType === type ? 700 : 400,
                  backgroundColor: currentMarketType === type ? '#0078d4' : '#fff',
                  color: currentMarketType === type ? '#fff' : '#333',
                  borderColor: currentMarketType === type ? '#0078d4' : '#ccc',
                  transition: 'all 0.2s',
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* 실행 버튼 */}
        <button
          style={{
            marginTop: 'auto',
            padding: '10px',
            backgroundColor: '#0078d4',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
          onClick={() => alert(`${currentMarketType} 시뮬레이션 실행`)}
        >
          실행
        </button>
      </aside>

      {/* 우측 차트 영역 */}
      <main style={{
        flex: 1,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          {currentMarketType} 시뮬레이션 결과
        </h2>

        {/* 차트 플레이스홀더 */}
        <div style={{
          flex: 1,
          border: '1px dashed #ccc',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#aaa',
          fontSize: '14px',
        }}>
          차트 영역 — ECharts / KendoReact Charts
        </div>
      </main>

    </div>
  )
}