import dayjs from 'dayjs'
import { scheduleNew } from '../../services/schedule-new.js'
import { schedulesDay } from '../schedules/load.js'

const formElement = document.querySelector('form')
const selectedDateElement = document.getElementById('date')
const clientNameElement = document.getElementById('client')

const todayDate = dayjs().format('YYYY-MM-DD')

selectedDateElement.value = todayDate
selectedDateElement.min = todayDate

formElement.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const name = clientNameElement.value.trim()

    if (!name) {
      return alert('Informe o nome do cliente')
    }

    const hourSelectedElement = document.querySelector('.hour-selected')

    if (!hourSelectedElement) {
      return alert('Selecione um horário')
    }

    const [selectedHour] = hourSelectedElement.textContent.split(':')

    const scheduleDate = dayjs(selectedDateElement.value).add(
      selectedHour,
      'hour'
    )

    const schedule = {
      id: new Date().getTime().toString(),
      name,
      when: scheduleDate.toISOString(),
    }

    await scheduleNew(schedule)

    await schedulesDay()

    clientNameElement.value = ''
  } catch (error) {
    alert(
      'Não foi possível realizar o agendamento. Tente novamente mais tarde.'
    )

    console.log(error)
  }
}
