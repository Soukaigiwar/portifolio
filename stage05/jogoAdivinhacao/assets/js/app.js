// capture elements
const numberInput = document.querySelector('#numberInput');
let numberValue = Number(numberInput.value);
//console.log("Debug | numberInput: " + numberInput.value);
const mainWindow = document.querySelector('.mainWindow');
const tryAgainWindow = document.querySelector('.tryAgainWindow');
const btnTry = document.querySelector('#btnTry');
const btnPlayAgain = document.querySelector('#btnPlayAgain');

// generate random number between 0 and 10 (inclusive)
const randomNumber = Math.round(Math.random() * 10);
console.log("Debug | randomNumber: " + randomNumber);
console.log("Debug | numberValue= " + numberValue);

// attempts counter
let countAttempts = 1;

// event listener
document.addEventListener('keydown', (e) => {
    let keyPressed = e.key;
    console.log(keyPressed);


    // ###################################################################################
    // falta corrigir o keypressed para exibir na caixa de texto o valor correto
    // ###################################################################################





















    switch (keyPressed) {
        case 'ArrowUp':
            if (numberValue >= 10) {
                numberValue = 10;
            } else {
            console.log("numberValue= " + numberValue);
                numberValue++;
            }
            break;
            case 'ArrowDown':
                if (numberValue < 0) {
                    numberValue = 0;
                }
                console.log("numberValue= " + numberValue);
                numberValue--;
            break;
        case 'Enter':
            if (mainWindow.classList.contains('hide')) {
                handleTryClick(e);
            }
            if (tryAgainWindow.classList.contains('hide')) {
                console.log('aqui no try again');
                handleResetClick(e);
            }
            break;
    };
});



























// btnPlayAgain.addEventListener('keydown', (e) => {
//     if (e.key == 'Enter' && mainWindow.classList.contains('hide')) {
//         handleResetClick();
//     };
// });

btnTry.addEventListener('click', handleTryClick);
btnPlayAgain.addEventListener('click', handleResetClick);

function handleTryClick(e) {
    e.preventDefault();

    //console.log("aqui tryclick");

    if (randomNumber === Number(numberInput.value)) {
        toggleScreen();
        tryAgainWindow.querySelector('h2')
            .innerText = `Acertou em ${countAttempts} tentativa(s)`;
    };

    countAttempts++;
};

// reset game

function handleResetClick(e) {
    toggleScreen();
    countAttempts = 1;
};

function toggleScreen() {
    mainWindow.classList.toggle("hide");
    tryAgainWindow.classList.toggle("hide");
};


