import dayjs from 'dayjs'

const periodMorningElement = document.getElementById('period-morning')
const periodAfternoonElement = document.getElementById('period-afternoon')
const periodNightElement = document.getElementById('period-night')

export function scheduleShow({ dailySchedules }) {
  try {
    periodMorningElement.innerHTML = ''
    periodAfternoonElement.innerHTML = ''
    periodNightElement.innerHTML = ''

    dailySchedules.forEach((schedule) => {
      const scheduleElement = document.createElement('li')
      scheduleElement.setAttribute('data-id', schedule.id)

      const hourElement = document.createElement('strong')
      hourElement.textContent = dayjs(schedule.when).format('HH:mm')

      const nameElement = document.createElement('span')
      nameElement.textContent = schedule.name

      const cancelElement = document.createElement('img')
      cancelElement.classList.add('cancel-icon')
      cancelElement.setAttribute('src', './src/assets/cancel.svg')
      cancelElement.setAttribute('alt', 'Cancelar')

      scheduleElement.append(hourElement, nameElement, cancelElement)

      const hour = dayjs(schedule.when).hour()

      if (hour < 12) {
        periodMorningElement.appendChild(scheduleElement)
      } else if (hour < 18) {
        periodAfternoonElement.appendChild(scheduleElement)
      } else {
        periodNightElement.appendChild(scheduleElement)
      }
    })
  } catch (error) {
    console.log(error)
    alert('Não foi possível exibir os agendamentos')
  }
}
