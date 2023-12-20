import { FC, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchWeatherData } from './weatherSlice'

type WeatherLocationInputProps = {}
export const WeatherLocationInput: FC<WeatherLocationInputProps> = ({}) => {
  const [location, setLocation] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(fetchWeatherData(location))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={location} onChange={e => setLocation(e.target.value)} placeholder="enter the city name" />
      <button type='submit'>Search</button>
    </form>
  )
}