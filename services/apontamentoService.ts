import ApontamentoRepository from "../repositories/apontamentoRepository";

export default new class ApontamentoService{

    public get(){
        return ApontamentoRepository.find();
    }

    public getById( _id ){
        return ApontamentoRepository.findById( _id );
    }

    /**
     * creat
     */
    public create( apontamento ) {
        apontamento.dataApontamento = new Date();
        apontamento.excluido = false;
        return ApontamentoRepository.create( apontamento );
    }

    /**
     * update
     * 
     */
    public update( _id, apontamento ) {
        return ApontamentoRepository.findByIdAndUpdate( _id, apontamento );
    }

    /**
     * delete
     * 
     */
    public delete( _id ) {
        return ApontamentoRepository.findByIdAndRemove( _id );
    }

}

