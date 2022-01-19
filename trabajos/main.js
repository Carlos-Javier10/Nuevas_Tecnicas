/*const math = require('./math.js')


console.log(math.suma(2,4));
*/
const http = require('http');
const server = http.createServer(
    function( req, res){
        res.write("El servidor esta levantado");
        res.statusCode=404
        res.end("termina");
    }
).listen(3000)