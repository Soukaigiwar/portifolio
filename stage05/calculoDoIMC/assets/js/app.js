// Capture elements
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const btnCalc = document.querySelector('#calc');
// const btnClose = document.querySelector('#closeModal');

const Modal = {
    errorMessage: document.querySelector('.error-label'),
    wrapper: document.querySelector('.modal-wrapper'),
    resultMessage: document.querySelector('h2'),
    btnClose: document.querySelector('#closeModal'),
    showModalWrapper() {
        Modal.wrapper.classList.add('show');
    },
    hideModalWrapper() {
        Modal.wrapper.classList.remove('show');
    },
    showErrorMessage() {
        Modal.errorMessage.classList.add('show');
    },
    hideErrorMessage() {
        Modal.errorMessage.classList.remove('show');
    },
}

// handle close button on result popup (modal)
Modal.btnClose.onclick = () => {
    inputWeight.value = '';
    inputHeight.value = '';
    Modal.hideModalWrapper();
};

// handle escape key from keyboard
document.addEventListener('keydown', (event) => {
    let keyPressed = event.key;

    if (keyPressed === 'Escape' && Modal.wrapper.classList.contains('show')) {
        inputWeight.value = '';
        inputHeight.value = '';
        Modal.wrapper.classList.remove('show');
    };
});

// Handle form submit
form.onsubmit = event => {
    event.preventDefault();

    if (inputWeight.value < 1 || inputHeight.value < 1) {
        Modal.showErrorMessage();

        setTimeout(() => { Modal.hideErrorMessage(); }, 4000);
    } else {
        showResult();
    }
}

// Calculate IMC
function calculateIMC(weight, height) {
    return Math.round(calc = weight / ((height/100) ** 2));
}

// Show popup (modal) with IMC calculate result
function showResult() {
    const result = calculateIMC(inputWeight.value, inputHeight.value);
        
    Modal.showModalWrapper();
    Modal.resultMessage.innerText = `Seu IMC é de ${result}`;
}
