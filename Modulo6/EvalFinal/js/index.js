/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
};


/* Funcion que Carga ciudades */
function cargaciudades(){
			$.ajax({
			url:'recuperaciudades.php',
			dataType: "html",
			success:function(data){
				$("#selectCiudad").append(data);
			}
		});
};

/* Funcion que Carga tipos */
function cargatipos(){
			$.ajax({
			url:'recuperatipos.php',
			dataType: "html",
			success:function(data){
				$("#selectTipo").append(data);
			}
		});
};

cargaciudades();
cargatipos();
inicializarSlider();

$(function(){
	//Inicializar input text materialize
	$(document).ready(function() {
		$('select').material_select();
	});
    
	
    //Funcion para mostrar todos los registros, php devuelve datos en formato JSON
	$('#mostrarTodos').click(function(){
		$("#TablaResult tbody").empty();
		$.ajax({
			url:'mostrar_todos.php',
			dataType: "JSON",
			success:function(data){
				var len = data.length;
				for(var i=0; i<len; i++){
					var id = '<strong>Id: </strong>' + data[i].Id;
                    var direccion = '<strong>Dirección: </strong>' + data[i].Direccion;
					var ciudad = '<strong>Ciudad: </strong>' + data[i].Ciudad;
					var telefono = '<strong>Telefono: </strong>' + data[i].Telefono;
					var cod_postal = '<strong>Cod. Postal: </strong>' + data[i].Codigo_Postal;
					var tipo = '<strong>Tipo: </strong>' + data[i].Tipo;
					var precio = '<strong>Precio: </strong>' + data[i].Precio;
		            
                    var inmueble = id + '<br/>' + direccion + '<br/>' + ciudad + '<br/>' + telefono + '<br/>'
					inmueble = inmueble + cod_postal + '<br/>' + tipo + '<br/>' + precio + '<br/>'
		
					var tr_str = '<tr>'
					             + '<td  class="itemMostrado"><img src="img/home.jpg"></td>'
					             + '<td>' + inmueble + '</td>'
								 + '</tr>';
                	$("#TablaResult tbody").append(tr_str);
				}
			}
		})
	});
	
	//Funcion para mostrar todos los registros filtrados, php devuelve datos en html
	$('#formulario').submit(function(event){
		$("#TablaResult tbody").empty();
		event.preventDefault();
		$.ajax({
			url:'buscador.php',
			type: 'POST',
			data:  $("#formulario").serialize(),
			dataType: "html",
			success:function(data){
                $("#TablaResult tbody").append(data);
			}
         })
	});
});

