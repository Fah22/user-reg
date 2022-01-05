import { configureStore } from '@reduxjs/toolkit'
import registerReducer from '../features/registerUserSlice'

const store = configureStore({
  reducer: registerReducer
})

export default store