import { Controls } from "./playerControl.js"
import { Timer } from "./timer.js"
import { Env } from "./env.js"

Env.buttonPlay.addEventListener('click', () => {
    Controls.togglePlay()
    Timer.timeout()
})

Env.buttonPause.addEventListener('click', () => {
    Controls.togglePause()
    Timer.hold()
})

Env.buttonStop.addEventListener('click', () => {
    Timer.hold()
    Timer.clear()
    Controls.resetControl()
})

Env.buttonReset.addEventListener('click', () => {
    const minutes = prompt('Quantos minutos?')
    Timer.setMinutes(minutes)
})

Env.buttonMuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})

Env.buttonUnmuted.addEventListener('click', () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
})
