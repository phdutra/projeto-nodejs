var app = require("./config/server");

var routes = require("./app/routes/noticias")(app);
var routeshome = require("./app/routes/home")(app);
var routesformulario = require("./app/routes/formulario_inclusao_noticia")(app);

app.listen(80, function(){
	console.log("Servidor ON")
});