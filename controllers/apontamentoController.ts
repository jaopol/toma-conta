import * as HttpStatus from "http-status";

import ApontamentoService from "../services/apontamentoService";
import Helper from "../infra/helper";


export default new class ApontamentoController{

    /**
     * get
     */
    public get( req, res ) {
        ApontamentoService.get()
        .then( apontamento => Helper.sendResponse( res, HttpStatus.OK, apontamento ) )
        .catch( error => console.error.bind( console, `Error ${error}` ) );
    }

    /**
     * getById
     */
    public getById( req, res ) {
        const _id = req.params.id;
        ApontamentoService.getById( _id )
        .then( apontamento => Helper.sendResponse( res, HttpStatus.OK, apontamento ) )
        .catch( error => console.error.bind( console, `Error ${error}` ) );
    }

    /**
     * create
     */
    public create( req, res ) {
        let entity = req.body;

        ApontamentoService.create( entity )
        .then( apontamento => Helper.sendResponse( res, HttpStatus.OK, "Apontamento cadastrado com sucesso!" ) )
        .catch( error => console.error.bind( console, `Error ${error}` ) );
    }

    /**
     * update
     */
    public update( req, res ) {

        const _id = req.params.id;
        let entity = req.body;
        ApontamentoService.update( _id, entity )
        .then( apontamento => Helper.sendResponse( res, HttpStatus.OK, "Apontamento atualizado com sucesso!" ) )
        .catch( error => console.error.bind( console, `Error ${error}` ) );
    }

    /**
     * delete
     */
    public delete( req, res ) {
        const _id = req.params.id;
    
        ApontamentoService.delete( _id )
        .then( () => Helper.sendResponse( res, HttpStatus.OK, "Apontamento excluido com sucesso!" ) )
        .catch( error => console.error.bind( console, `Error ${error}` ) );
    }

}