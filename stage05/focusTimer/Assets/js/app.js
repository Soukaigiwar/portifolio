import { Controls } from "./playerControl.js"
import { Timer } from "./timer.js"

Controls.buttonPlay.addEventListener('click', () => {
    Controls.togglePlay()
    Timer.timeout()
})

Controls.buttonPause.addEventListener('click', () => {
    Controls.togglePause()
    Timer.hold()
})

Controls.buttonStop.addEventListener('click', () => {
    Timer.hold()
    Timer.clear()
    Controls.resetControl()
})

Controls.buttonReset.addEventListener('click', () => {
    const minutes = prompt('Quantos minutos?')
    Timer.setMinutes(minutes)
})

Controls.buttonMuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})

Controls.buttonUnmuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})
