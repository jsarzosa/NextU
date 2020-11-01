const Router = require('express').Router();
var MongoClient = require('mongodb').MongoClient;
var mongodb = require('mongodb');

const client = new MongoClient("mongodb://localhost", {useUnifiedTopology: true});


//Verificar que login y contraseña exista en la BDD
Router.post('/login', function(req, res) {
	login = req.body.user;
	pass = req.body.pass;
	client.connect().then((client)=>{
    var db = client.db('agenda')
    db.collection('usuario').findOne({login: login, contrasena: pass},(function (err, result) {
				if (err) {
					res.status(500)
					res.json(err)
				}
				
				if (result == null) { //No devuelve ningun registro que cumpla el criterio
					res.send("Usuario o contaseña incorrectos");
				} else {
					res.send("Validado");
				}
		}))
	})
})


//Obtener todos los eventos
Router.get('/all', function(req, res) {
	client.connect().then((client)=>{
    var db = client.db('agenda');
    db.collection('evento').find().toArray(function (err, result) {
				if (err) {
					res.status(500)
					res.json(err)
				}
    
		result = JSON.parse(JSON.stringify(result).split('"_id":').join('"id":'));
		res.send(result);
		})
	})
})

//Guardar un nuevo evento
Router.post('/new', function(req, res) {
	titulo = req.body.title;
	fechaInicio = req.body.start;
	fechaFin = req.body.end;
	
	client.connect().then((client)=>{
		var db = client.db('agenda')
		
		db.collection('evento').insertMany([{title: titulo, start: fechaInicio, end: fechaFin}],(err, result) => {
				if (err) {
					res.status(500)
					res.json(err)
				}
				res.send("Se ha registrado el evento correctamente");
		})
	})
})

//Eliminar evento
Router.post('/delete/:id', function(req, res) {
    let eventId = req.params.id;
	client.connect().then((client)=>{
		var db = client.db('agenda');
		var myquery = {"_id": new mongodb.ObjectID(eventId)};
		console.log(myquery);
		db.collection('evento').deleteOne(myquery,(err, result) => {
				if (err) {
					res.status(500)
					res.json(err)
				}
				res.send("Se ha eliminado el evento correctamente");
		})
	})
})

//Actualizar evento
Router.post('/update', function(req, res) {
    let eventId = req.body.id;
	let start = req.body.start;
	
	client.connect().then((client)=>{
		var db = client.db('agenda');
		var myquery = {"_id": new mongodb.ObjectID(eventId)};
		console.log(myquery);
		db.collection('evento').update(myquery, {$set:{"start":start, "end":start}},(err, result) => {
				if (err) {
					res.status(500)
					res.json(err)
				}
				res.send("Se ha actualizado el evento correctamente");
		})
	})
})

module.exports = Router;

