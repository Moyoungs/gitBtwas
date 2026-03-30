import { useState } from 'react'
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartTitle,
} from '@progress/kendo-react-charts'
import { DropDownList } from '@progress/kendo-react-dropdowns'
import { DatePicker } from '@progress/kendo-react-dateinputs'
import { Card, CardHeader, CardTitle, CardBody } from '@progress/kendo-react-layout'

type MarketType = 'DAM' | 'RTM' | 'ALL'

const marketTypes: MarketType[] = ['ALL', 'DAM', 'RTM']

const mockChartData = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  simulated: [120, 135, 98, 145, 160, 130],
  actual:    [115, 140, 102, 138, 155, 125],
}

const kpiData = [
  { label: 'Total Simulated', value: '788 MWh', color: '#0078d4' },
  { label: 'Total Actual',    value: '775 MWh', color: '#107c10' },
  { label: 'Avg Diff',        value: '+1.7%',   color: '#d83b01' },
  { label: 'O.K Rate',        value: '94.2%',   color: '#8764b8' },
]

export default function Benchmark() {
  const [selectedMarket, setSelectedMarket] = useState<MarketType>('ALL')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* 좌측 필터 패널 */}
      <aside style={{
        width: '240px',
        borderRight: '1px solid #e0e0e0',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        backgroundColor: '#fafafa',
      }}>
        <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>
          필터
        </h2>

        {/* Market Type */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '12px', color: '#666' }}>Market Type</label>
          <DropDownList
            data={marketTypes}
            value={selectedMarket}
            onChange={(e) => setSelectedMarket(e.value)}
          />
        </div>

        {/* 시작일 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '12px', color: '#666' }}>시작일</label>
          <DatePicker
            value={startDate}
            onChange={(e) => setStartDate(e.value)}
            format="yyyy-MM-dd"
          />
        </div>

        {/* 종료일 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '12px', color: '#666' }}>종료일</label>
          <DatePicker
            value={endDate}
            onChange={(e) => setEndDate(e.value)}
            format="yyyy-MM-dd"
          />
        </div>

        {/* 조회 버튼 */}
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
          onClick={() => alert(`${selectedMarket} 조회`)}
        >
          조회
        </button>
      </aside>

      {/* 우측 메인 영역 */}
      <main style={{
        flex: 1,
        padding: '24px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>

        <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 700 }}>
          Benchmark Dashboard
        </h2>

        {/* KPI 카드 */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {kpiData.map((kpi) => (
            <Card key={kpi.label} style={{ flex: 1 }}>
              <CardHeader>
                <CardTitle style={{ fontSize: '12px', color: '#666' }}>
                  {kpi.label}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <p style={{
                  margin: 0,
                  fontSize: '22px',
                  fontWeight: 700,
                  color: kpi.color,
                }}>
                  {kpi.value}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* 비교 차트 */}
        <Card>
          <CardHeader>
            <CardTitle>Simulated vs Actual ({selectedMarket})</CardTitle>
          </CardHeader>
          <CardBody>
            <Chart style={{ height: 320 }}>
              <ChartTitle text="" />
              <ChartLegend position="top" />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={mockChartData.categories} />
              </ChartCategoryAxis>
              <ChartSeries>
                <ChartSeriesItem
                  type="line"
                  name="Simulated"
                  data={mockChartData.simulated}
                  color="#0078d4"
                />
                <ChartSeriesItem
                  type="line"
                  name="Actual"
                  data={mockChartData.actual}
                  color="#107c10"
                />
              </ChartSeries>
            </Chart>
          </CardBody>
        </Card>

      </main>
    </div>
  )
}