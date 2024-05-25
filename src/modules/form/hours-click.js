export function hoursClick() {
  const hoursElements = document.querySelectorAll('.hour-available')

  hoursElements.forEach((hourElement) => {
    hourElement.addEventListener('click', (selected) => {
      const selectedHourElement = document.querySelector('.hour-selected')

      if (selectedHourElement) {
        selectedHourElement.classList.remove('hour-selected')
      }

      hourElement.classList.add('hour-selected')
    })
  })
}
