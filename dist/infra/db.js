"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { db_url } = require('./config');
class Database {
    static createConnection() {
        mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
            console.log("MongoDB conected");
        })
            .catch(error => {
            console.log(`MongoDB error conect ${error} `);
        });
    }
}
exports.default = Database;
