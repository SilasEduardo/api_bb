"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=AppError.js.map