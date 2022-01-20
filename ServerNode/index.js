
const http = require('http');
/*const color = require('colors');*/
const funcionServidor = function(req, res){
        //res.write("El servidor esta levantado");
        res.write('<h1> Hello world </h1>');
        res.end("termina");
    }
const server = http.createServer(funcionServidor);
server.listen(3000, ()=>{console.log('Servidor levantado')});

