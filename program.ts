import StartUp from "./startUp";

const { port } = require( './infra/config' );

StartUp.app.listen( port, function() {
    console.log( `Servidor executando na porta ${port}`  )
} )
