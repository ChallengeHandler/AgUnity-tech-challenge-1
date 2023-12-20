
import React, { FC, useEffect, ReactNode } from 'react'
import type { RootState } from '../../app/store'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchWeatherData } from './weatherSlice'
import styles from './weather.module.css'

type WeatherDetailProps = {}
export const WeatherDetail: FC<WeatherDetailProps> = () => {
  const { status, data } = useAppSelector((state: RootState) => state.weather)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWeatherData())
  }, [])

  return (
    <div className={styles["weather-detail"]}>
      {
        status === 'succeeded' && data
          ? (
            <>
              <div className={styles["weather-location"]}>
                Weather data for {data.name}
              </div>
              <pre className={styles["weather-data"]}>
              {JSON.stringify(data, null, 2)}
              </pre>
            </>
          )
          : (
            <div>No data</div>
          )
      }
    </div>
  )
}