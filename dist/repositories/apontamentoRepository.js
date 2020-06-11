"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const apontamentoSchema_1 = require("../models/apontamentoSchema");
//Cria a Collection no mongo
exports.default = mongoose.model("apontamento", apontamentoSchema_1.default);
