
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

server.use(express.json());


server.get('/', function(req,res){
    
    res.json({
        nombre: "Carlos",
        apellido: "Guagrilla",
        edad: 20
    })
})
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

server.listen(3000, function(){
    console.log("server en el puerto 300");
})
