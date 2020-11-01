<?php

    /*ELIMINA UN EVENTO DE LA BASE DE DATOS*/
	require('conector_bd.php');

	$con = new ConectorBD();

	if ($con->initConexion('agenda')=='OK') {
		$id = $_POST['id'];
						
		$sql = "delete from evento where id = ".$id;
					
		$resultado = $con->ejecutarQuery($sql);
		
		if ($resultado){
			$response['msg']= "OK";
		}
		$con->cerrarConexion();
	} else {
		$response['msg']="ERROR AL CONECTARSE A LA BASE DE DATOS";
	}

	echo json_encode($response); //Devuelve el mensaje en codigo JSON

 ?>
