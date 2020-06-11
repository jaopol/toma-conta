import * as mongoose from "mongoose";
import ApontamentoSchema from "../models/apontamentoSchema";

//Cria a Collection no mongo
export default mongoose.model( "apontamento", ApontamentoSchema )
