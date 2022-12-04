export const Timer = {
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
    getMinutes: document.querySelector('.minutes').textContent,
    handleTimerDisplay(minutes, seconds) {
        return {
            minutes: this.minutes.innerHTML = String(minutes).padStart(2, "0"),
            seconds: this.seconds.innerHTML = String(seconds).padStart(2, "0")
        }
    }
}
