export const Modal = {
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