import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import { getWeatherDataByLocation } from '../../service/weather'

export interface WeatherState {
  status: LoadingStatus,
  data?: WeatherData,
  error?: SerializedError
}

const initialState: WeatherState = {
  status: 'initiated',
}

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (location: string) => {
    return getWeatherDataByLocation(location)
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state, action) => {
        state.status = 'loading'
        state.data = undefined
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = weatherSlice.actions

export default weatherSlice.reducer