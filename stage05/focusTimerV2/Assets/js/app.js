import { Controls } from "./playerControl.js"
import { Timer } from "./timer.js"
import { Env } from "./env.js"
import { Sound } from "./sounds.js"
import { Themes } from "./themes.js"

Env.buttonPlay.addEventListener('click', () => {
    Sound.buttonClick()
    Controls.togglePlay()
    Timer.timeout()
})

Env.buttonPause.addEventListener('click', () => {
    Sound.buttonClick()
    Controls.togglePause()
    Timer.hold()
})

Env.buttonStop.addEventListener('click', () => {
    Sound.buttonClick()
    Timer.hold()
    Timer.clear()
    Controls.resetControl()
})

Env.buttonPlusFiveMinutes.addEventListener('click', () => {
    Sound.buttonClick()
    Controls.plusFiveMinutes()
})

Env.buttonMinusFiveMinutes.addEventListener('click', () => {
    Sound.buttonClick()
    Controls.minusFiveMinutes()
})

Env.buttonForest.addEventListener('click', () => {
    Sound.buttonClick()
    Themes.forest()
})

Env.buttonRain.addEventListener('click', () => {
    Sound.buttonClick()
    Themes.rain()
})

Env.buttonCoffee.addEventListener('click', () => {
    Sound.buttonClick()
    Themes.coffee()
})

Env.buttonFireplace.addEventListener('click', () => {
    Sound.buttonClick()
    Themes.fireplace()
})
