import { FC, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchWeatherData } from './weatherSlice'
import styles from './weather.module.css'

type WeatherLocationInputProps = {}
export const WeatherLocationInput: FC<WeatherLocationInputProps> = ({}) => {
  const [location, setLocation] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(fetchWeatherData(location))
  }

  return (
    <form className={styles['weather-location-form']} onSubmit={handleSubmit}>
      <input className={styles['weather-location-input']} value={location} onChange={e => setLocation(e.target.value)} placeholder="enter the city name" />
      <button className={styles['weather-location-submit-btn']} type='submit'>Search</button>
    </form>
  )
}