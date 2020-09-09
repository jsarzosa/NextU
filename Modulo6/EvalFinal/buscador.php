<?php
$data = json_decode(file_get_contents("data-1.json"), true);
$NumFilas = count($data);
$Existe= False;

$FiltroCiudad = $_POST['ciudad'];

if ($FiltroCiudad != '') {
	for ($x = 0; $x <= $NumFilas-1; $x++) {
		if ($data[$x]['Ciudad'] == $FiltroCiudad) {
			$datosfiltrados[] = array('Id'=>$data[$x]['Id'],'Direccion'=>$data[$x]['Direccion'],'Ciudad'=>$data[$x]['Ciudad'],'Telefono'=>$data[$x]['Telefono'], 'Codigo_Postal'=>$data[$x]['Codigo_Postal'], 'Tipo'=>$data[$x]['Tipo'], 'Precio'=>$data[$x]['Precio']);
		};
	};
	$data = $datosfiltrados;
};

$NumFilas = count($data);

$FiltroTipo = $_POST['tipo'];

if ($FiltroTipo != '') {
	for ($x = 0; $x <= $NumFilas-1; $x++) {
		if ($data[$x]['Tipo'] == $FiltroTipo) {
			$datosfiltrados2[] = array('Id'=>$data[$x]['Id'],'Direccion'=>$data[$x]['Direccion'],'Ciudad'=>$data[$x]['Ciudad'],'Telefono'=>$data[$x]['Telefono'], 'Codigo_Postal'=>$data[$x]['Codigo_Postal'], 'Tipo'=>$data[$x]['Tipo'], 'Precio'=>$data[$x]['Precio']);
		};
	};
	$data = $datosfiltrados2;
};

$NumFilas = count($data);

$FiltroPrecio = $_POST['precio'];
$Pos = strpos($FiltroPrecio,';');
$PrecioMinimo = substr($FiltroPrecio,0,$Pos);
$PrecioMaximo = floatval(substr($FiltroPrecio,$Pos+1,10));

for ($x = 0; $x <= $NumFilas-1; $x++) {
	$precio = substr($data[$x]['Precio'],1,10);
    $precio = str_replace(',','',$precio);
    $precio = floatval($precio);

	if ($precio >= $PrecioMinimo && $precio <= $PrecioMaximo) {
		$datosfiltrados3[] = array('Id'=>$data[$x]['Id'],'Direccion'=>$data[$x]['Direccion'],'Ciudad'=>$data[$x]['Ciudad'],'Telefono'=>$data[$x]['Telefono'], 'Codigo_Postal'=>$data[$x]['Codigo_Postal'], 'Tipo'=>$data[$x]['Tipo'], 'Precio'=>$data[$x]['Precio']);
	};
};

if (isset($datosfiltrados3)) {$data = $datosfiltrados3;} else {$data = array();};

$NumFilas = count($data);

if ($NumFilas > 0) {
	for ($x = 0; $x <= $NumFilas-1; $x++) {
		$id = $data[$x]['Id'];
		$direccion = $data[$x]['Direccion'];
		$ciudad = $data[$x]['Ciudad'];
		$telefono = $data[$x]['Telefono'];
		$codigo_postal = $data[$x]['Codigo_Postal'];
		$tipo = $data[$x]['Tipo'];
		$precio =$data[$x]['Precio'];
		
		$inmueble = '<strong>Id: </strong>'.$id.'<br/><strong>Direccion: </strong>'.$direccion.'<br/><strong>Ciudad: </strong>'.$ciudad.'<br/><strong>Telefono: </strong>';
		$inmueble = $inmueble.$telefono.'<br/><strong>Codigo Postal: </strong>'.$codigo_postal.'<br/><strong>Tipo: </strong>'.$tipo.'<br/><strong>Precio: </strong>'.$precio.'<br/>';

		$tr_str = '<tr><td class="itemMostrado"><img src="img/home.jpg"></td>.<td>'.$inmueble.'</td></tr>';
		echo $tr_str;
	};
};
	
?>
