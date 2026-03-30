import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type MarketType = 'DAM' | 'RTM'

interface SimulationState {
  marketType: MarketType
  selectedDate: string
  selectedNode: string
}

const initialState: SimulationState = {
  marketType: 'DAM',
  selectedDate: '',
  selectedNode: '',
}

const simulationSlice = createSlice({
  name: 'simulation',
  initialState,
  reducers: {
    setMarketType(state, action: PayloadAction<MarketType>) {
      state.marketType = action.payload
    },
    setSelectedDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload
    },
    setSelectedNode(state, action: PayloadAction<string>) {
      state.selectedNode = action.payload
    },
    reset() {
      return initialState
    },
  },
})

export const { setMarketType, setSelectedDate, setSelectedNode, reset } =
  simulationSlice.actions

export default simulationSlice.reducer