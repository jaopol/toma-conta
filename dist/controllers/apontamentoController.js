"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const apontamentoService_1 = require("../services/apontamentoService");
const helper_1 = require("../infra/helper");
exports.default = new class ApontamentoController {
    /**
     * get
     */
    get(req, res) {
        apontamentoService_1.default.get()
            .then(apontamento => helper_1.default.sendResponse(res, HttpStatus.OK, apontamento))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    /**
     * getById
     */
    getById(req, res) {
        const _id = req.params.id;
        apontamentoService_1.default.getById(_id)
            .then(apontamento => helper_1.default.sendResponse(res, HttpStatus.OK, apontamento))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    /**
     * create
     */
    create(req, res) {
        let entity = req.body;
        apontamentoService_1.default.create(entity)
            .then(apontamento => helper_1.default.sendResponse(res, HttpStatus.OK, "Apontamento cadastrado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    /**
     * update
     */
    update(req, res) {
        const _id = req.params.id;
        let entity = req.body;
        apontamentoService_1.default.update(_id, entity)
            .then(apontamento => helper_1.default.sendResponse(res, HttpStatus.OK, "Apontamento atualizado com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    /**
     * delete
     */
    delete(req, res) {
        const _id = req.params.id;
        apontamentoService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "Apontamento excluido com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
};
