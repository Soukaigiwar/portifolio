const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("JWT Token inválido.", 401);
    };

    const [, token] = authHeader.split(" ");

    try {
        //const { sub } = verify(token, authConfig.jwt.secret);
        const { sub: user_id } = verify(token, authConfig.jwt.secret);

        
        request.user = {
            id: Number(user_id)
        };
        
        console.log(request.user);
        return next();

    } catch (error) {
        throw new AppError("JWT Token não informado.", 401);
    };
};

module.exports = ensureAuthenticated;
