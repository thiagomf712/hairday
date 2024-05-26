import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js'
import { hoursLoad } from '../form/hours-load.js'
import { scheduleShow } from './show.js'

const selectedDateElement = document.getElementById('date')

export async function schedulesDay() {
  const date = selectedDateElement.value

  const dailySchedules = await scheduleFetchByDay({ date })

  scheduleShow({ dailySchedules })

  hoursLoad({ date, dailySchedules })
}
