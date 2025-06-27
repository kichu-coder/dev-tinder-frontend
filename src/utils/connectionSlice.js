import { createSlice } from '@reduxjs/toolkit'

const initialState = null;

export const connectionSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addConnections : (state, action) => {
      return action.payload
    },
    removeConnections : (state, action) => null,
  },
})

// Action creators are generated for each case reducer function
export const { addConnections,removeConnections  } = connectionSlice.actions

export default connectionSlice.reducer