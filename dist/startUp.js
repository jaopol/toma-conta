"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db_1 = require("./infra/db");
const apontamentoController_1 = require("./controllers/apontamentoController");
class StartUp {
    constructor() {
        this._db = db_1.default;
        this.app = express();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET, POST, OPTIONS, PUT, DELETE",
            origin: "*"
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, resp) => {
            resp.send({ versao: "0.0.1" });
        });
        this.app.route("/api/v1/apontamento").get(apontamentoController_1.default.get);
        this.app.route("/api/v1/apontamento/:id").get(apontamentoController_1.default.getById);
        this.app.route("/api/v1/apontamento").post(apontamentoController_1.default.create);
        this.app.route("/api/v1/apontamento/:id").put(apontamentoController_1.default.update);
        this.app.route("/api/v1/apontamento/:id").delete(apontamentoController_1.default.delete);
    }
}
exports.default = new StartUp;
