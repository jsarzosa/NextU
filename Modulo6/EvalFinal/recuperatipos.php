<?php

//Convertir a array el archivo json
$data = json_decode(file_get_contents("data-1.json"), true);

$NumFilas = count($data);

//Obtener arreglo simple de los tipos
for ($x = 0; $x <= $NumFilas-1; $x++) {
	$Tipo[$x] = $data[$x]['Tipo'];
};

//Obtener arreglo con tipos no repetidos
$Tipo = array_unique($Tipo);

//Generar codigo html
foreach($Tipo as $Valor){ 
echo "<option>".$Valor."</option>";
};
?>

