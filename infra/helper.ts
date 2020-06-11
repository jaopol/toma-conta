
export default new class Helper{
    
    sendResponse = function( res, statusCode, data ) {
        res.status( statusCode ).json( { result : data } )        
    }

}