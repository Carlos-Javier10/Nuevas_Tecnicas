
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

const expres = require('express');
const app = expres();
const morgan = require('morgan');

function logger(req,res,next){
    console.log("Ingresa al sistema"/*`Peticion recibida: ${req.protocolo}://${req.get('host')}${req.originalUrl}`*/)
    next();
}

app.use(logger);
app.use(morgan('tiny'));

/*app.set('port', 3000);*/

app.get('/conParametro/:id',(req,res)=>{
    console.log(req,params)
    res.send("<h1>con parametros</h1>")
})

app.listen(/*app.params('port')*/3000, (req,res)=>{
    console.log("server en el puerto ", app.get('port'))
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

