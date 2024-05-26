import dayjs from 'dayjs'

import { openingHours } from '../../utils/opening-hours.js'
import { hoursClick } from './hours-click.js'

const hoursListElement = document.getElementById('hours')

export function hoursLoad({ date, dailySchedules }) {
  hoursListElement.innerHTML = ''

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format('HH')
  )

  const opening = openingHours.map((hourText) => {
    const [hour, _] = hourText.split(':')

    const isHourPast = dayjs(date).add(hour, 'hour').isBefore(dayjs())

    const isHourTaken = unavailableHours.includes(hour)

    return {
      hour,
      available: !isHourPast && !isHourTaken,
    }
  })

  opening
    .sort((a, b) => a.hour.localeCompare(b.hour))
    .forEach(({ hour, available }) => {
      const li = document.createElement('li')
      li.classList.add('hour')
      li.classList.add(available ? 'hour-available' : 'hour-unavailable')

      li.textContent = `${hour}:00`

      if (hour === '09') {
        hourHeaderAdd('Manhã')
      } else if (hour === '13') {
        hourHeaderAdd('Tarde')
      } else if (hour === '18') {
        hourHeaderAdd('Noite')
      }

      hoursListElement.append(li)
    })

  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement('li')
  header.classList.add('hour-period')
  header.textContent = title

  hoursListElement.append(header)
}
