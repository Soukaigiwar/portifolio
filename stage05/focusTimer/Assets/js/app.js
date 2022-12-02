import { Controls } from "./playerControl.js";

Controls.buttonPlay.onclick = () => {
    Controls.togglePlay()
    //Controls.togglePause()
    //Controls.toggleStop()
}

Controls.buttonPause.onclick = () => {
    // Controls.togglePlay()
    Controls.togglePause()
}

Controls.buttonStop.onclick = () => {
    Controls.toggleStop()
    Controls.toggleReset()
}

Controls.buttonReset.onclick = () => {
    Controls.applyReset()
}
Controls.buttonMuted.onclick = () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
}

Controls.buttonUnmuted.onclick = () => {
    Controls.toggleMuted()
    Controls.toggleUnmuted()
}
