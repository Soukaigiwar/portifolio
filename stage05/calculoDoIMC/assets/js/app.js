// Capture elements
const form = document.querySelector('form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const btnCalc = document.querySelector('#calc');
const btnClose = document.querySelector('#closeModal');

const Modal = {
    errorMessage: document.querySelector('.error-label'),
    wrapper: document.querySelector('.modal-wrapper'),
    resultMessage: document.querySelector('h2'),
    
    // mesma coisa que:
    // toggle: () => {errorLabel.classList.toggle('show')},
    toggle() {
        Modal.errorMessage.classList.toggle('show');
    },
}

// handle close button on result popup (modal)
btnClose.onclick = () => {
    weightInput.value = '';
    heightInput.value = '';
    Modal.wrapper.classList.toggle('show');
};

// Handle form submit
form.onsubmit = event => {
    event.preventDefault();

    if (weightInput.value < 1 || heightInput.value < 1) {
        Modal.toggle();

        setTimeout(() => { Modal.toggle(); }, 4000);
    } else {
        showResult();
    }
}

// Calculate IMC
function IMCCalculate(weight, height) {
    return Math.round(calc = weight / ((height/100) ** 2));
}

// Show popup (modal) with IMC calculate result
function showResult() {
    const result = IMCCalculate(weightInput.value, heightInput.value);
        
    Modal.wrapper.classList.add('show');
    Modal.resultMessage.innerText = `Seu IMC é de ${result}`;
}
