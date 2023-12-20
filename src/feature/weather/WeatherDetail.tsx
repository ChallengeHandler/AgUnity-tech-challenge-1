
import { FC } from 'react'
import type { RootState } from '../../app/store'
import { useAppSelector } from '../../app/hooks'
import styles from './weather.module.css'

type WeatherDetailProps = {}
export const WeatherDetail: FC<WeatherDetailProps> = () => {
  const { status, data, error } = useAppSelector((state: RootState) => state.weather)

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
        : status === 'failed'
        ? (
          <div>{error?.message}</div>
        )
        : (
          <div>No data</div>
        )
      }
    </div>
  )
}