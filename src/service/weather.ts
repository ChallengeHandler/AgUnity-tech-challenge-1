import axios from 'axios'

export const getWeatherDataByLocation = async (location: string): Promise<WeatherData> => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
  return res.data
}