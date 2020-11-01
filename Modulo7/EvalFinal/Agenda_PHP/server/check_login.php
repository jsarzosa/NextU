<?php

   /*ESTE PHP VERIFICA QUE EL USUARIO EXISTA Y EL PASSWORD SEA EL CORRECTO, EN CASO POSITIVO DEVEUELVE LA RESPUESTA OK EN CODIGO JSON */
    session_start();
	
	require('conector_bd.php');

	$con = new ConectorBD();

	if ($con->initConexion('agenda')=='OK') {
		$login = $_POST['username'];
		$password = $_POST['password'];
		
		$_SESSION["login"] = $login;

		$sql = "select contrasena from usuario where login = '".$login."'"; //Sentencia SQL
			
		$resultado = $con->ejecutarQuery($sql);
				
		if ($resultado->num_rows == 1) {
			$fila = $resultado->fetch_assoc();
			$password_hashed = $fila["contrasena"];
			if (password_verify($password, $password_hashed)) {  //Sentencia que verifica si el código hash corresponde al password ingresado
				$response['msg']="OK";    
			} else {
				$response['msg']= "Password incorrecto";
			}
		} else $response['msg']= "Usuario no existe";
	
		$con->cerrarConexion();
	} else {
		$response['msg']="ERROR AL CONECTARSE A LA BASE DE DATOS";
	}

	echo json_encode($response); //Devuelve el mensaje en codigo JSON

 ?>
