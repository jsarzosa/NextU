<?php
  
/*ALMACENA UN EVENTO EN LA BASE DE DATOS*/
	session_start();
	require('conector_bd.php');

	$con = new ConectorBD();

	if ($con->initConexion('agenda')=='OK') {
		$login = $_SESSION["login"];
		$titulo = $_POST['titulo'];
		$start_date = $_POST['start_date'];
		$allDay = $_POST['allDay'];
        $end_date = $_POST['end_date'];
        $end_hour = $_POST['end_hour'];
        $start_hour = $_POST['start_hour'];
						
		$sql = "INSERT INTO evento(id_usuario, title, fecha_inicio, hora_inicio, fecha_fin, hora_fin, dia_completo) VALUES ('";
		$sql = $sql.$login."','".$titulo."','".$start_date."','".$start_hour."','".$end_date."','".$end_hour."','".$allDay."')";
			
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
