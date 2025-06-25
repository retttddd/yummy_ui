// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type OrderItem = {
  name: string
  price: number
  imageUrl: string
  size: string
}

export type CounterState = {
  positions: OrderItem[],
}

export type CounterActions = {
  addPosition: (item: OrderItem) => void
  removePosition: (index: number) => void
  clearOrder: () => void
}

export type CounterStore = CounterState & CounterActions

export const initCounterStore = (): CounterState => {
  return {
    positions: [],
  }
}

export const defaultInitState: CounterState = {
  positions: [],
}

export const createCounterStore = (
  initState: CounterState = defaultInitState
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,

    addPosition: (item) =>
      set((state) => ({
        positions: [...state.positions, item],
      })),

    removePosition: (index) =>
      set((state) => {
        const itemToRemove = state.positions[index]
        if (!itemToRemove) return state
        const updatedPositions = state.positions.filter((_, i) => i !== index)
        return {
          positions: updatedPositions,
        }
      }),

    clearOrder: () => set(() => ({
      positions: [],
    })),
  }))
}
