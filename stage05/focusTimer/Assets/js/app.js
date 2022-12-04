import { Controls } from "./playerControl.js"
import { Timer } from "./timer.js"

let setMinutes = Timer.getMinutes
const deltaTime = .01

function timeout() {
    setTimeout(function () {
        let seconds = Timer.seconds.textContent
        let minutes = Timer.minutes.textContent

        if (seconds <= 0) {
            seconds = 60
            minutes--
        }

        if (minutes < 0) {
            Controls.resetControl()
            Timer.handleTimerDisplay(setMinutes, 0)
            return
        }

        --seconds
        Timer.handleTimerDisplay(minutes, seconds)

        timeout()
    }, 1000 * deltaTime)
}

Controls.buttonPlay.addEventListener('click', () => {
    Controls.togglePlay()
    timeout()
})

Controls.buttonPause.addEventListener('click', () => {
    Controls.togglePause()
})

Controls.buttonStop.addEventListener('click', () => {
    Controls.resetControl()
})

Controls.buttonReset.addEventListener('click', () => {
    console.log(Timer.getMinutes);
    Timer.getMinutes = prompt('Quantos minutos?')
    console.log(Timer.getMinutes);
    // if (Timer.getMinutes) {
    //     Timer.handleTimerDisplay(Timer.getMinutes, 0)
    // } 
    // else {
    //     Timer.handleTimerDisplay(getMinutes, 0)
    // }
})

Controls.buttonMuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})

Controls.buttonUnmuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})
