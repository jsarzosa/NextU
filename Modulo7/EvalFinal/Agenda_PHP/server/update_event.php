<?php
 
	/*ACTUALIZA UN EVENTO EN LA BASE DE DATOS*/
	session_start();
	require('conector_bd.php');

	$con = new ConectorBD();

	if ($con->initConexion('agenda')=='OK') {
		
		$id = $_POST['id'];
		$start_date = $_POST['start_date'];
		$end_date = $_POST['end_date'];
						
		$sql = "UPDATE evento SET fecha_inicio = '".$start_date."', fecha_fin = '".$start_date."'";
		$sql = $sql." where id = ".$id;

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
