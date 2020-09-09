<?php

//Convertir a array el archivo json
$data = json_decode(file_get_contents("data-1.json"), true);

$NumFilas = count($data);

//Obtener arreglo simple de las ciudades
for ($x = 0; $x <= $NumFilas-1; $x++) {
	$Ciudad[$x] = $data[$x]['Ciudad'];
};

//Obtener arreglo con ciudades no repetidas
$Ciudad = array_unique($Ciudad);

//Generar código html
foreach($Ciudad as $Valor){ 
echo "<option>".$Valor."</option>";
};
?>

