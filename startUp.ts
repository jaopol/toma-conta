import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import database from "./infra/db";
import apontamentoController from "./controllers/apontamentoController";

class StartUp{

    public app: express.Application;
    private _db = database;

    constructor(){
        this.app = express();
        this._db.createConnection();

        this.middler();
        this.routes();
    }

    enableCors(){
        const options: cors.CorsOptions = {
            methods: "GET, POST, OPTIONS, PUT, DELETE",
            origin: "*"
        }
        this.app.use( cors( options ) );
    }

    middler(){
        this.enableCors();
        this.app.use( bodyParser.json() );
        this.app.use( bodyParser.urlencoded( { extended : false } ) );

    }

    routes(){
        
        this.app.route( "/" ).get( (req, resp) => {
            resp.send( { versao: "0.0.1" } );
        } )

        this.app.route( "/api/v1/apontamento" ).get( apontamentoController.get );
        this.app.route( "/api/v1/apontamento/:id" ).get( apontamentoController.getById );
        this.app.route( "/api/v1/apontamento" ).post( apontamentoController.create );
        this.app.route( "/api/v1/apontamento/:id" ).put( apontamentoController.update );
        this.app.route( "/api/v1/apontamento/:id" ).delete( apontamentoController.delete );
        
    }
} 

export default new StartUp;