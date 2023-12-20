
import React, { FC, useEffect, ReactNode } from 'react'
import type { RootState } from '../../app/store'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchWeatherData } from './weatherSlice'

type WeatherDetailProps = {}
export const WeatherDetail: FC<WeatherDetailProps> = () => {
  const count = useAppSelector((state: RootState) => state.weather.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWeatherData())
  }, [])

  return (
    <div>
      <div>
        <span>{Object.keys(count).length && count as ReactNode}</span>
      </div>
    </div>
  )
}