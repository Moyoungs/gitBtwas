import { createBrowserRouter } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import MainLayout from '../layouts/MainLayout'
import SimulationPage from '@/pages/Simulation'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: 'dashBoard',
        element: <DashBoard />,
      },
      {
        path: 'simulation',
        element: <SimulationPage />,
      },
    ],
  },
])