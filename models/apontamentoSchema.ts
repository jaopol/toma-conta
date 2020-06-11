import * as mongoose from "mongoose";

const ApontamentoSchema = new mongoose.Schema({
    tipoApontamento: {type:String}, //Despesa ou Credito
    mesApontamento: {type:String}, //Mês do apontamento
    descricao: {type:String}, //Descrição - EX.: Restaurante, padaria, salario, cerveja...
    diaApontamento: {type:Number}, // O dia mês
    valor: {type:String}, //Valor 
    formaPagamento: {type:String}, //Forma de pagamento - Cartão Debito/credito, dinheiro
    excluido: {type:Boolean}, //Se excluido = true
    dataApontamento: {type:Date}, //Data do pontamento
    numeroMes: {type:Number} //numero do mes do apontamento
});

export default ApontamentoSchema;