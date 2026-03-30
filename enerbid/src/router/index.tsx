import { createBrowserRouter } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import MainLayout from '../layouts/MainLayout'

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
    ],
  },
])