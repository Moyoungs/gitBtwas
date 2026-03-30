import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

type NavItem = {
  label: string
  icon: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Dashboard',       icon: '🏠', path: '/' },
  { label: 'Simulation',  icon: '📊', path: '/simulation' },
  { label: 'Benchmark',       icon: '📈', path: '/benchmark' },
]

export default function MainLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* 사이드바 */}
      <aside style={{
        width: collapsed ? '60px' : '220px',
        backgroundColor: '#1a1a2e',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.2s',
        overflow: 'hidden',
      }}>

        {/* 로고 영역 */}
        <div style={{
          padding: '20px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          borderBottom: '1px solid #2a2a4a',
          minHeight: '60px',
        }}>
          {!collapsed && (
            <span style={{ fontWeight: 700, fontSize: '15px', whiteSpace: 'nowrap' }}>
              ⚡ ERCOT SIM
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              background: 'none',
              border: 'none',
              color: '#aaa',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '0',
            }}
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>

        {/* 네비게이션 */}
        <nav style={{
          flex: 1,
          padding: '12px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              title={collapsed ? item.label : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: collapsed ? '12px 0' : '12px 16px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                background: isActive(item.path) ? '#0078d4' : 'none',
                border: 'none',
                borderRadius: '6px',
                color: isActive(item.path) ? '#fff' : '#bbb',
                cursor: 'pointer',
                fontSize: '14px',
                margin: '0 8px',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.path))
                  e.currentTarget.style.backgroundColor = '#2a2a4a'
              }}
              onMouseLeave={(e) => {
                if (!isActive(item.path))
                  e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* 하단 유저 영역 */}
        {!collapsed && (
          <div style={{
            padding: '16px',
            borderTop: '1px solid #2a2a4a',
            fontSize: '12px',
            color: '#666',
          }}>
            ERCOT v1.0.0
          </div>
        )}
      </aside>

      {/* 메인 콘텐츠 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* 상단 헤더 */}
        <header style={{
          height: '60px',
          borderBottom: '1px solid #e0e0e0',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          fontSize: '15px',
          fontWeight: 600,
          color: '#333',
        }}>
          {navItems.find((n) => isActive(n.path))?.label ?? 'ERCOT SIM'}
        </header>

        {/* 페이지 콘텐츠 */}
        <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#f5f5f5' }}>
          <Outlet />
        </main>

      </div>
    </div>
  )
}