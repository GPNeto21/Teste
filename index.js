const Express = require("express")
const App = Express()
const Handlebars = require("express-handlebars")
const BodyParser = require("body-parser")
const Path = require("path")

//Configurando o handlebars:

	//Template Engine
	App.engine("handlebars", Handlebars({
		defaultLayout: "./main"
	}))
	App.set("view engine", "handlebars")

//Body Parser
App.use(BodyParser.urlencoded({extended: false}))
App.use(BodyParser.json())

App.use(Express.static(Path.join(__dirname, "public")))

App.get("/inicio/:nome/:idade", function(req, res){
	res.render("./Menu", {
		nome: req.params.nome,
		idade: req.params.idade
	})
})

App.get("/Digimon/:nome/:idade", function(req, res){
	res.render("./Digimon", {
		nome: req.params.nome,
		idade: req.params.idade
	})
})

App.get("/Hollow-Knight/:nome/:idade", function(req, res){
	res.render("./HollowKnight", {
		nome: req.params.nome,
		idade: req.params.idade
	})
})

App.listen(8081, function(){
	console.log(
		"Servidor rodando na url: http://localhost:8081/inicio/Geraldo/21"
	)
})