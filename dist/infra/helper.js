"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new class Helper {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
    }
};
