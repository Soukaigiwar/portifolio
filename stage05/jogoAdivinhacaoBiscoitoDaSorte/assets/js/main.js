const openOtherFortuneCookie = document.querySelector('button')
const fortuneCookie = document.querySelector('.biscoito')
const mainScreen = document.querySelector('.antes')
const resultScreen = document.querySelector('.depois')

fortuneCookie.addEventListener('click', () => {
    mainScreen.classList.toggle('hide')
    resultScreen.classList.toggle('hide')
})

openOtherFortuneCookie.addEventListener('click', () => {
    mainScreen.classList.toggle('hide')
    resultScreen.classList.toggle('hide')
})