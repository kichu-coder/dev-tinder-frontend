import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionReducer from "./connectionSlice"

export const store = configureStore({
  reducer: {
    user : userReducer,
    feed : feedReducer,
    connection : connectionReducer
  },
},
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())