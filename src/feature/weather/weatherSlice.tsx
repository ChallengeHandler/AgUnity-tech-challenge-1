import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface WeatherState {
  status: LoadingStatus,
  data: Partial<WeatherData>
}

const initialState: WeatherState = {
  status: 'initiated',
  data: {}
}

export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData', async () => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dffc877b2e7274f0b739016ba89475f5`)
  return res.data
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = 'failed'
        state.data = {}
      })
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = weatherSlice.actions

export default weatherSlice.reducer