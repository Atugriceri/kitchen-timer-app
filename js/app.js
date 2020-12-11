document.querySelector('#time-check-form').addEventListener('submit', timeCheck)
const SET_RESET = document.querySelector('#set-time')
const HOUR = document.querySelector('#hour')
const MINUTE = document.querySelector('#minute')
const SECOND = document.querySelector('#second')
const COUNTDOWN = document.querySelector('#countdown')
const BUTTON_DIV = document.querySelector('#stopContinueDiv')

let startCountdown;

function startInterval() {
  startCountdown = setInterval(function() {
    countdown()
     }, 1000)
}

function stopInterval() {
  clearInterval(startCountdown);
}

SET_RESET.addEventListener('click', function(){
  if (SET_RESET.innerHTML === 'SET') {
      startInterval()

  } else if (SET_RESET.innerHTML === 'RESET') {
      stopInterval()
  } 
})



function timeCheck(event) {
  event.preventDefault()
}

function addButton() { // Stop and continue buttons adding and class list settings
  let button = document.createElement('button')
  button.classList.add('btn', 'btn-secondary')
  button.name = ('stop')
  button.innerHTML = 'STOP'
  BUTTON_DIV.prepend(button)

  button.addEventListener('click', () => {
    if (button.innerHTML === 'STOP') {
      button.classList.remove('btn-secondary')
      button.classList.add('btn-danger')
      button.name = ('continue')
      button.innerHTML = 'CONTINUE'
      stopInterval()
    } 
    else if (button.innerHTML === 'CONTINUE') {
      button.classList.remove('btn-danger')
      button.classList.add('btn', 'btn-secondary')
      button.name = ('stop')
      button.innerHTML = 'STOP'
      startInterval()
    }
  })
}

SET_RESET.addEventListener('click', () => { // Set and reset buttons class list settings
  // If the user doesn't enter a value, run the alert function and don't add a button
  if (SET_RESET.innerHTML === 'SET') {
    if (HOUR.value > 0 || MINUTE.value > 0 || SECOND.value > 0) {
      addButton()
      SET_RESET.innerHTML = 'RESET'
      SET_RESET.classList.remove('btn-primary')
      SET_RESET.classList.add('btn-success')
    } else {
        stopInterval()
    }
      
  } else if (SET_RESET.innerHTML === 'RESET') {
      SET_RESET.innerHTML = 'SET'
      SET_RESET.classList.remove('btn-success')
      SET_RESET.classList.add('btn-primary')
      HOUR.value = 0
      MINUTE.value = 0
      SECOND.value = 0
      BUTTON_DIV.innerHTML = ``
  }
})


function countdown() {
  if (SECOND.value > 0){
      SECOND.value--
  } else if (MINUTE.value > 0 && SECOND.value == 0){
      SECOND.value = 59
      MINUTE.value--
  } else if(HOUR.value > 0 && MINUTE.value == 0){
      MINUTE.value = 60
      HOUR.value--
  }
    return
}

