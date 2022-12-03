import { Controls } from "./playerControl.js"
import { Timer } from "./timer.js"

let minutesOnTimer = Timer().minutes
let secondsOnTimer = Timer().seconds

let setMinutes = Number(minutesOnTimer.textContent)

function timeout() {
    setTimeout(function () {
        let seconds = Number(secondsOnTimer.textContent)
        let minutes = Number(minutesOnTimer.textContent)

        if (seconds <= 0) {
            seconds = 60
            minutes--
        }

        if (minutes < 0) {
            Controls.togglePause()
            Controls.toggleStop()
            minutesOnTimer.textContent = String(setMinutes).padStart(2, "0")
            return
        }

        --seconds
        secondsOnTimer.textContent = String(seconds).padStart(2, "0")
        minutesOnTimer.textContent = String(minutes).padStart(2, "0")

        timeout()
    }, 20)
}

Controls.buttonPlay.addEventListener('click', () => {
    Controls.togglePlay()
    //runTimer(minutes, seconds)
    timeout()
})

Controls.buttonPause.addEventListener('click', () => {
    Controls.togglePause()
})

Controls.buttonStop.addEventListener('click', () => {
    Controls.toggleStop()
})

Controls.buttonReset.addEventListener('click', () => {
    setMinutes = prompt('Quantos minutos?')
    minutesOnTimer.textContent = setMinutes.padStart(2, "0")
})

Controls.buttonMuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})

Controls.buttonUnmuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})
