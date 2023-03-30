class AppError {
    message
    statusCode

    constructor(nessage, statusCode = 400) {
        this.message = this.message
        this.statusCode  = statusCode
    }
}

module.exports = AppError