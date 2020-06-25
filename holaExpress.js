var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/saludo',c_saludo);
app.get('/despedida',c_despedida);

function c_inicio(request,response) {
    response.send('Bienvenido EXpress-Utec');
}

function c_saludo(request,response) {
    response.send('Hola jose');
}

function c_despedida(request,response) {
    response.send('Adios jose');
}

function c_server(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Escuchando el puerto http://%s:%s",host,port);
}

var server = app.listen(3000,c_server);