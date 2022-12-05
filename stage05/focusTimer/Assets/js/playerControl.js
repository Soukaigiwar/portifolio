export const Controls = {
    buttonPlay: document.querySelector('.button_play'),
    buttonPause: document.querySelector('.button_pause'),
    buttonStop: document.querySelector('.button_stop'),
    buttonReset: document.querySelector('.button_reset'),
    buttonMuted: document.querySelector('.button_muted'),
    buttonUnmuted: document.querySelector('.button_unmuted'),
    togglePlay() {
        Controls.buttonPlay.classList.add('hide')
        Controls.buttonPause.classList.remove('hide')
        Controls.buttonStop.classList.remove('hide')
        Controls.buttonReset.classList.add('hide')
    },
    togglePause() {
        Controls.buttonPlay.classList.remove('hide')
        Controls.buttonPause.classList.add('hide')
    },
    toggleStop() {
        Controls.buttonPlay.classList.remove('hide')
        Controls.buttonPause.classList.add('hide')
        Controls.buttonStop.classList.add('hide')
        Controls.buttonReset.classList.remove('hide')
    },
    resetControl() {
        this.togglePlay()
        this.toggleStop()
    },
    toggleReset() {
        Controls.buttonReset.classList.toggle('hide')
    },
    toggleMuted() {
        Controls.buttonMuted.classList.toggle('hide')
    },
    toggleUnmuted() {
        Controls.buttonUnmuted.classList.toggle('hide')
    },
}
