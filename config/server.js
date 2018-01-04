//Busca a blioteca
var express = require("express");

// recupera objeto  
var app = express();

// O engine server para em chegar as view com extensão .ejs
app.set("view engine", "ejs");
app.set("views", "./app/views");

// retorno objeto
module.exports = app;