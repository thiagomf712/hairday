import dayjs from 'dayjs'
import { apiConfig } from './api-config.js'

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    const schedules = await response.json()

    const dailySchedules = schedules.filter((schedule) =>
      dayjs(schedule.when).isSame(date, 'day')
    )

    return dailySchedules
  } catch (error) {
    console.log(error)

    alert(
      'Não foi possível buscar os agendamentos. Tente novamente mais tarde.'
    )
  }
}
