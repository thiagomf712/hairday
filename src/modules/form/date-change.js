import { schedulesDay } from '../schedules/load.js'

const selectedDateElement = document.getElementById('date')

selectedDateElement.onchange = () => schedulesDay()
