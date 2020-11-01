var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost/agenda"
insertarRegistro = function(db, callback){
	let coleccion = db.collection("usuario")
	
	coleccion.insertMany([{login: "jsarzosa@hotmail.com", nombre: "Juan Sarzosa", fecha_nacimiento: "1980-01-01", contrasena: "password1"}], (error, result) => {
		console.log ("Resultado de insert: " + result.toString())})
}

MongoClient.connect(url, function(err, db){
	if(err)console.log(err)
	console.log("Conexion establecida con la base de datos")
	insertarRegistro(db, (error, result)=> {
		if(error)console.log("Error insertando los registros: "+error)
	})
})

