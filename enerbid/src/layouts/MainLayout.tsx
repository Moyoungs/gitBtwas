import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      {/* 공통 헤더, 사이드바 등 */}
      <main>
        <Outlet />  {/* 자식 페이지가 여기 렌더링 */}
      </main>
    </div>
  )
}