export declare class AppError extends Error {
    readonly statusCode: number;
    readonly message: string;
    constructor(message: string, statusCode?: number);
}
