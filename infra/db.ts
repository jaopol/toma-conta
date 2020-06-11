import * as mongoose from "mongoose";

const { db_url } = require( './config' );

export default class Database{

    public static createConnection(){
        
        mongoose.connect( db_url , { useNewUrlParser: true, useUnifiedTopology: true } );
    }

   

}