import { hoursLoad } from '../form/hours-load.js'

const selectedDateElement = document.getElementById('date')

export function schedulesDay() {
  hoursLoad({ date: selectedDateElement.value })
}
