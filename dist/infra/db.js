"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { db_url } = require('./config');
class Database {
    //private static DB_URL = "mongodb+srv://adminAponta:adminAponta@tomaconta-4m8mx.mongodb.net/apontamento?retryWrites=true&w=majority";
    static createConnection() {
        mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });
        // mongoose.connect('mongodb://yourusername:yourpassword@ds121825.mlab.com:11025/yourmongodb', {useNewUrlParser: true});
        // mongoose.connection.once('open', function(){
        //   console.log('Conection has been made!');
        // }).on('error', function(error){
        //     console.log('Error is: ', error);
        // });
    }
}
exports.default = Database;
