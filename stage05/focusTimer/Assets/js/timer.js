export function Timer() {
    return {
        minutes: document.querySelector('.minutes'),
        seconds: document.querySelector('.seconds'),
    }
}

// export function runTimer(minutes, seconds) {

//     Timer().minutes.innerHTML = String(minutes).padStart(2, "0")
//     Timer().seconds.innerHTML = String(seconds).padStart(2, "0")

//     setTimeout(timeOut, 1000)

//     function timeOut() {
//         if (seconds <= 0) {
//             minutes--
//             seconds = 60
//         }

//         if (minutes < 0) {
//             return
//         }

//         seconds--

//         runTimer(minutes, seconds)
//     }
// }
