import { scheduleCancel } from '../../services/schedule-cancel.js'
import { schedulesDay } from './load'

const periodsListElements = document.querySelectorAll('.period')

periodsListElements.forEach((periodElement) => {
  periodElement.addEventListener('click', async (event) => {
    if (event.target.classList.contains('cancel-icon')) {
      const itemElement = event.target.closest('li')
      const { id } = itemElement.dataset

      if (id) {
        const isConfirm = confirm('Deseja realmente cancelar o agendamento?')

        if (isConfirm) {
          await scheduleCancel({ id })

          await schedulesDay()
        }
      }
    }
  })
})
