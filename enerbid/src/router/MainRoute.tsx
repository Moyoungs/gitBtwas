import { createBrowserRouter } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import MainLayout from '../layouts/MainLayout'
import SimulationPage from '@/pages/Simulation'
import Benchmark from '@/pages/BenchMark'
import { lazy, Suspense } from 'react'
import NotFoundComponent from '@/pages/NotFoundComponent'

// const mainBidLayout = lazy(() => import("../layouts/MainLayout.tsx"));



const router = [
  {
    path: '/',
    element: (<Suspense><MainLayout /></Suspense>),
    name : '메인',
    children: [
      {
        path : "*",
        Element : <NotFoundComponent/>,

      },
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
      {
        path: 'benchmark',
        element: <Benchmark />,
      },
    ],
  },
];


const mainRoute = createBrowserRouter(router);

export default mainRoute;