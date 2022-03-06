import { createSlice } from '@reduxjs/toolkit'

export const switcherSlice = createSlice({
  name: 'switcher',
  initialState: { value: 'dark' },
  reducers: {
    changeMode: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark'
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeMode } = switcherSlice.actions

export default switcherSlice.reducer
