"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    port: process.env.PORT,
    db_url: process.env.DB_URL
};
