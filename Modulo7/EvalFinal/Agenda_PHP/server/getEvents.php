<?php
	/*ESTE PHP RECUPERA LOS EVENTOS DEL USUARIO EN FORMATO JSON */
	session_start();
	require('conector_bd.php');

	$con = new ConectorBD();

	if ($con->initConexion('agenda')=='OK') {
		$login = $_SESSION["login"];
						
		$sql = "select id, title, concat(fecha_inicio, ' ', hora_inicio) as start, concat(fecha_fin, ' ', hora_fin) as end, dia_completo as allDay from evento where id_usuario = '".$login."'";
			
		$resultado = $con->ejecutarQuery($sql);
		if ($resultado){
			$response['msg']= "OK";
		}
		
		$response['eventos']   = array();
		
		while ($fila = $resultado->fetch_assoc()){

			$evento['id'] = $fila['id'];
			$evento['title'] = $fila['title'];
			$evento['start'] = $fila['start'];
			$evento['end'] = $fila['end'];
			$evento['allDay'] = $fila['allDay'];
			
			array_push($response['eventos'], $evento);
		}
		
		$con->cerrarConexion();
		
	} else {
		$response['msg']="ERROR AL CONECTARSE A LA BASE DE DATOS";
	}

	echo json_encode($response); //Devuelve el mensaje en codigo JSON

 ?>


