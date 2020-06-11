"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ApontamentoSchema = new mongoose.Schema({
    tipoApontamento: { type: String },
    mesApontamento: { type: String },
    descricao: { type: String },
    diaApontamento: { type: Number },
    valor: { type: String },
    formaPagamento: { type: String },
    excluido: { type: Boolean },
    dataApontamento: { type: Date },
    numeroMes: { type: Number } //numero do mes do apontamento
});
exports.default = ApontamentoSchema;
