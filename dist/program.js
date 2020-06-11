"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = require("./startUp");
const { port } = require('./infra/config');
startUp_1.default.app.listen(port, function () {
    console.log(`Servidor executando na porta ${port}`);
});
