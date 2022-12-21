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
    Sound.bgMusicForest()
    Sound.buttonClick()
    Themes.forest()
})

Env.volumeForest.addEventListener('input', () => {
    Sound.bgAudioForest.volume = Env.volumeForest.value
})

Env.buttonRain.addEventListener('click', () => {
    Sound.bgMusicRain()
    Sound.buttonClick()
    Themes.rain()
})

Env.buttonRain.addEventListener('input', () => {
    Sound.bgAudioRain.volume = Env.volumeRain.value
})

Env.buttonCoffee.addEventListener('click', () => {
    Sound.bgMusicCoffee()
    Sound.buttonClick()
    Themes.coffee()
})

Env.buttonCoffee.addEventListener('input', () => {
    Sound.bgAudioCoffee.volume = Env.volumeCoffee.value
})

Env.buttonFireplace.addEventListener('click', () => {
    Sound.bgMusicFireplace()
    Sound.buttonClick()
    Themes.fireplace()
})

Env.buttonFireplace.addEventListener('input', () => {
    Sound.bgAudioFireplace.volume = Env.volumeFireplace.value
})
