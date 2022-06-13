// این تابع پرفورمنس خوبی نداشت، بنابراین سلول‌ها درون اچ‌تی‌ام‌ال ساخته میشود
// function weekGenerator() {
//   let weeks = document.querySelector('.weeks')
//   let numberCells = 90 * 52
//   for (let i = 0; i < numberCells; i++) {
//     weeks.innerHTML += '<span></span>'
//   }
// }

function cellsActivation(numberWeeks) {
  let cells = document.querySelectorAll('.weeks span')
  for (let i = 0; i < cells.length; i++) {
    if (i == numberWeeks) break
    cells[i].classList.add('active')
  }
}

function lifeInWeeks(age) {
  let weeksPassed = age * 52
  return weeksPassed
}

// function hideProcessing() {
//   document.querySelector('.processing').classList.add('hidden')
// }

function hideModal() {
  document.querySelector('.modal').classList.remove('active')
}

document.querySelector('.modal-close').addEventListener('click', hideModal)

document.querySelector('.submit').addEventListener('click', function () {
  hideModal()
  let weeksPassed = lifeInWeeks(document.querySelector('.getAge').value)
  // weekGenerator()
  // hideProcessing()
  cellsActivation(weeksPassed)
})
