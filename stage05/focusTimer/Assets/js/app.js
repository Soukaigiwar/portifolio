import { Controls } from "./playerControl.js"
import { runTimer } from "./timer.js"

let minutes
let seconds = 0

Controls.buttonPlay.addEventListener('click', () => {
    Controls.togglePlay()
    runTimer(minutes, seconds)
})

Controls.buttonPause.addEventListener('click', () => {
    minutes = document.querySelector('.minutes').innerHTML
    seconds = document.querySelector('.seconds').innerHTML
    clearTimeout()
    Controls.togglePause()
})

Controls.buttonStop.addEventListener('click', () => {
    Controls.toggleStop()
})

Controls.buttonReset.addEventListener('click', () => {
    minutes = prompt('Quantos minutos?')
})

Controls.buttonMuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})

Controls.buttonUnmuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})
