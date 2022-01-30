
/*const http = require('http');
const colors = require('colors');
const funcionServidor = function(req, res){
        //res.write("El servidor esta levantado");
        res.write('<h1> Hello world </h1>');
        res.end("termina");
    }
const server = http.createServer(funcionServidor);
server.listen(3000, ()=>{console.log('Servidor levantado')});
*/

const express = require('express');
const server = express();
const morgan = require('morgan');

server.use(express.json());

function logger(req,res,next){
    console.log(`Peticion recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}

server.use(logger);
server.use(morgan('tiny'));
server.set('port', 4000);

server.get('/conParametro/:id',(req,res)=>{
    console.log(req.params)
    res.send("<h1> con parametros </h1>")
})

server.listen(server.get('port'), (req,res)=>{
    console.log("server en el puerto ", server.get('port'))
})

/*server.use(express.json());*/


/*server.get('/:id', function(req,res){
    
    res.json({
        nombre: "Carlos",
        apellido: "Guagrilla",
        edad: 20
    })
})
*/

/*
server.post('/', function(req,res){
    res.send("<h1>POST raiz</h1>");
})
server.put('/', function(req,res){
    res.send("<h1>PUT raiz</h1>");
})
server.delete('/', function(req,res){
    res.send("<h1>DELETE raiz</h1>");
})
//
server.post('/ingresarUsuario', function(req,res){
    console.log(req.body);
    res.send("<h1>POST ingreso de Usuario</h1>");
})
server.put('/actualizarUsuario', function(req,res){
    res.send("<h1>PUT actualizar usuario </h1>");
})
server.delete('/eliminarUsuario', function(req,res){
    res.send("<h1>DELETE eliminar usuario</h1>");
})
*/

