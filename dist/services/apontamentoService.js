"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apontamentoRepository_1 = require("../repositories/apontamentoRepository");
exports.default = new class ApontamentoService {
    get() {
        return apontamentoRepository_1.default.find();
    }
    getById(_id) {
        return apontamentoRepository_1.default.findById(_id);
    }
    /**
     * creat
     */
    create(apontamento) {
        apontamento.dataApontamento = new Date();
        apontamento.excluido = false;
        return apontamentoRepository_1.default.create(apontamento);
    }
    /**
     * update
     *
     */
    update(_id, apontamento) {
        return apontamentoRepository_1.default.findByIdAndUpdate(_id, apontamento);
    }
    /**
     * delete
     *
     */
    delete(_id) {
        return apontamentoRepository_1.default.findByIdAndRemove(_id);
    }
};
