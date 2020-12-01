function BuscarProductos(obj){
	var productos = [];
	var num_productos;
	var encuentra;
	var texto_buscar;
	var texto;
	var id_objeto;
	
	texto_buscar = obj.value;
	
	$(".productos" ).each(function(index)
	{
	productos[index] = $(this).attr('id');
	});	
	
	num_productos = productos.length;
	
	for (var i=0; i <= num_productos-1; i++) {
	    texto = productos[i].toString();
		id_objeto = '#'+texto;
		encuentra = texto.indexOf(texto_buscar);
		if (encuentra != -1){
			$(id_objeto).show();
		} else {$(id_objeto).hide();} 
	}
}

function myFunction() {
  var x = document.getElementById("id_producto").value;
}

function llenarDetalle(obj) {
	var txtid = '#'+obj.id;
	var contenedor;
	var htmlContenedor;
	$("#detalle").show();
	contenedor = $(txtid).parent().parent().parent().parent();
	htmlContenedor = contenedor.html();
	htmlContenedor = "<div class='container well col-md-8'>" + htmlContenedor;
	htmlContenedor = htmlContenedor + "<button class='btn btn-success' onclick='ocultarDetalle()'>Atras</button></div>";
	$("#detalle").empty();
	$("#detalle").append(htmlContenedor);
	$("#detalle .d-flex").hide();
	$(".mostrarPrincipal").hide();
}

function ocultarDetalle() {
$(".mostrarPrincipal").show();
$("#detalle").empty();
}

function calcularTotal() {
   console.log ("calcular");
   
   var total;
   total = 0;
   
	$(".subtotal" ).each(function(index) {
		total = total + $(this).attr('text');
		console.log ($(this).attr('text'));
	});
	$("#total" ).text = "Total: $" + total.toString();
}

$(function() {
   setInterval(calcularTotal(),1000);
});
