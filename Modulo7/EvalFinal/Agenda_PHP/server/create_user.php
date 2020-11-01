<?php
	/*ESTE CODIGO INSERTA 3 REGISTROS EN LA TABLA usuario de la base de datos Agenda*/
	require('conector_bd.php');

	$con = new ConectorBD();

	if ($con->initConexion('agenda')=='OK') {
	
		$password = password_hash('Password1', PASSWORD_DEFAULT); //Genera codigo hash del password ingresado por el usuario
		$sql = "insert into usuario (login, nombre, contrasena, fecha_nacimiento) values('jsarzosa@hotmail.com', 'Juan Sarzosa','";
		$sql = $sql.$password."', '1980/01/01')";
        
		if ($con->ejecutarQuery($sql)){
			echo "Se inserto el usuario exitosamente";
		}else echo "Se ha producido un error en la inserción";
		
		$password = password_hash('Password2', PASSWORD_DEFAULT);//Genera codigo hash del password ingresado por el usuario
		$sql = "insert into usuario (login, nombre, contrasena, fecha_nacimiento) values('lnavarrete@hotmail.com', 'Lorena Navarrete','";
		$sql = $sql.$password."', '1980/02/14')";
        
		if ($con->ejecutarQuery($sql)){
			echo "Se inserto el usuario exitosamente";
		}else echo "Se ha producido un error en la inserción";
		
		$password = password_hash('Password3', PASSWORD_DEFAULT);//Genera codigo hash del password ingresado por el usuario
		$sql = "insert into usuario (login, nombre, contrasena, fecha_nacimiento) values('dsarzosa@hotmail.com', 'Daniela Sarzosa','";
		$sql = $sql.$password."', '2003/06/20')";
        
		if ($con->ejecutarQuery($sql)){
			echo "Se inserto el usuario exitosamente";
		}else echo "Se ha producido un error en la inserción";
			
		$con->cerrarConexion();
		
	}else {
		echo "Se presentó un error en la conexión";
	}
 ?>
