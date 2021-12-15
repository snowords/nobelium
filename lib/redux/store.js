import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import switcherReducer from './switcher/switcherSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    switcher: switcherReducer
  },
  devTools: true
})
