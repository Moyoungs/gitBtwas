import { configureStore } from '@reduxjs/toolkit'
import simulationReducer from './simulationSlice'

export const store = configureStore({
  reducer: {
    simulation: simulationReducer,
  },
})

// 타입 export (컴포넌트에서 사용)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch