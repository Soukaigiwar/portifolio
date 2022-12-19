import { Env } from "./env.js"

export const Controls = {
    togglePlay() {
        Env.buttonPlay.classList.add('hide')
        Env.buttonPause.classList.remove('hide')
        Env.buttonStop.classList.remove('hide')
    },
    togglePause() {
        Env.buttonPlay.classList.remove('hide')
        Env.buttonPause.classList.add('hide')
    },
    toggleStop() {
        Env.buttonPlay.classList.remove('hide')
        Env.buttonPause.classList.add('hide')
    },
    resetControl() {
        this.togglePlay()
        this.toggleStop()
    },
    toggleMuted() {
        Env.buttonMuted.classList.toggle('hide')
    },
    toggleUnmuted() {
        Env.buttonUnmuted.classList.toggle('hide')
    },
}
