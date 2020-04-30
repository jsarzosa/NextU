var movimientos;
var puntos, puntosjugada;
var tiempo, intervalo;
var matriz2 = [];
var retorno = false;

for(var i=0; i <= 7; i++) {matriz2[i] = new Array(7)};

function cronometro (){
	var tiempo;
	tiempo = $("#timer").text();
	var minuto = tiempo.substring(1,2);
	var segundo = tiempo.substring(3,6);
	
	if (minuto == "2") {
	   $("#timer").text("01:59");
	};
	if (minuto == "1") {
		minuto = "01";
		if (segundo != "0") {
			segundo = segundo -1;
			if (segundo < 10 && segundo > 0) {segundo = "0" + segundo};
			$("#timer").text(minuto + ":" + segundo);
		}
		else {
        minuto = "00";
		segundo = "60";
		segundo = segundo -1;
		if (segundo < 10 && segundo > 0) {segundo = "0" + segundo};
		$("#timer").text(minuto + ":" + segundo);
		};
	};
	
	if (minuto == "0") {
		minuto = "00";
		segundo = segundo -1;
		if (segundo < 10 && segundo > 0) {segundo = "0" + segundo};
		$("#timer").text(minuto + ":" + segundo);
		};
};

function cambiacolor(){
	$(".main-titulo").animate({
	color: "Blue"}, 2000);
	$(".main-titulo").animate({
	color: "Yellow"}, 2000);
	setTimeout(cambiacolor,4000);
}

function contarmovimientos (){
	movimientos = movimientos +1;
	$("#movimientos-text").text(movimientos);
};

function sumarpuntos() {
	puntos = puntos + puntosjugada;
	$("#score-text").text(puntos);
};
	
function llenarcaramelos(){ //Llena la grilla de caramelos la primera vez
	var i, j, k, imagen, numcarameloscolumna;
	var ElemOrigen, ElemDestino;
    var ImgOrigen, ImgDestino;
	movimientos = 0;
	puntos = 0;
	
    for (i = 1; i <= 7; i++) {
		for (j = 1; j <= 7; j++) {
			k = Math.floor((Math.random() * 4) + 1); 
			imagen = "<div class='fila-" + i + "'><img src='image/" + k.toString() + ".png' class='elemento'/></div>";
			if (j == 1) {$(".col-1").append(imagen)};
			if (j == 2) {$(".col-2").append(imagen)};
			if (j == 3) {$(".col-3").append(imagen)};
	     	if (j == 4) {$(".col-4").append(imagen)};
			if (j == 5) {$(".col-5").append(imagen)};
			if (j == 6) {$(".col-6").append(imagen)};
			if (j == 7) {$(".col-7").append(imagen)};
		};
	};

    //Dar la propiedade Draggable a los caramelos
	$(".elemento").draggable({
	  start: function(event, ui) {
		ElemOrigen = $(this);
		ImgOrigen =  ElemOrigen.attr("src");
	  },
	  containment: ".panel-tablero", scroll: false
	});
	
	$(".elemento").droppable({
      drop: function( event, ui ) {
		ElemDestino = $(this);
		ImgDestino =  ElemDestino.attr("src");
       	
        ElemDestino.attr('src', ImgOrigen);
	   	ElemOrigen.attr('src', ImgDestino);
		
		ElemOrigen.animate({left: 0, top:  0});	  
		contarmovimientos();
		animarcaramelos();
		sumarpuntos();
		setTimeout(eliminarcaramelos, 2000);
		setTimeout(numerarcaramelos, 2100);
	 	setTimeout(rellenarcaramelos, 3000);
		}
	});
	
	animarcaramelos();
	sumarpuntos();
	setTimeout(eliminarcaramelos, 2000);
	setTimeout(numerarcaramelos, 2100);
    setTimeout(rellenarcaramelos, 3000);
}

function rellenarcaramelos(){ //Llena la grilla de caramelos despues de la eliminación
	var i, j, k, imagen, numcarameloscolumna;
	var ElemOrigen, ElemDestino;
    var ImgOrigen, ImgDestino;
    var NumCaramelosCol;
	
    for (i = 1; i <= 7; i++) {
		for (j = 1; j <= 7; j++) {
			k = Math.floor((Math.random() * 4) + 1); 
			
			if (j == 1) {
				NumCaramelosCol = $(".col-1").find("div").length;
				if (NumCaramelosCol < 7) {
					imagen = "<div class='fila-" + (7 - NumCaramelosCol) + "'><img src='image/" + k.toString() + ".png' class='elemento'/></div>";		
					$(".col-1").prepend(imagen)
				};
			};
			if (j == 2) {
				NumCaramelosCol = $(".col-2").find("div").length;
				if (NumCaramelosCol < 7) {
					imagen = "<div class='fila-" + (7 - NumCaramelosCol) + "'><img src='image/" + k.toString() + ".png' class='elemento'/></div>";		
					$(".col-2").prepend(imagen)
				};
			};
			if (j == 3) {
				NumCaramelosCol = $(".col-3").find("div").length;
				if (NumCaramelosCol < 7) {
					imagen = "<div class='fila-" + (7 - NumCaramelosCol) + "'><img src='image/" + k.toString() + ".png' class='elemento'/></div>";		
					$(".col-3").prepend(imagen)
				};
			};
			if (j == 4) {
				NumCaramelosCol = $(".col-4").find("div").length;
				if (NumCaramelosCol < 7) {
					imagen = "<div class='fila-" + (7 - NumCaramelosCol) + "'><img src='image/" + k.toString() + ".png' class='elemento'/></div>";		
					$(".col-4").prepend(imagen)
				};
			};
			if (j == 5) {
				NumCaramelosCol = $(".col-5").find("div").length;
				if (NumCaramelosCol < 7) {
					imagen = "<div class='fila-" + (7 - NumCaramelosCol) + "'><img src='image/" + k.toString() + ".png' class='elemento'/></div>";		
					$(".col-5").prepend(imagen)
				};
			};
			if (j == 6) {
				NumCaramelosCol = $(".col-6").find("div").length;
				if (NumCaramelosCol < 7) {
					imagen = "<div class='fila-" + (7 - NumCaramelosCol) + "'><img src='image/" + k.toString() + ".png' class='elemento'/></div>";		
					$(".col-6").prepend(imagen)
				};
			};
			if (j == 7) {
				NumCaramelosCol = $(".col-7").find("div").length;
				if (NumCaramelosCol < 7) {
					imagen = "<div class='fila-" + (7 - NumCaramelosCol) + "'><img src='image/" + k.toString() + ".png' class='elemento'/></div>";		
					$(".col-7").prepend(imagen)
				};
			};
		};
	};

    //Dar la propiedade Draggable a los caramelos
	$(".elemento").draggable({
	  start: function(event, ui) {
		ElemOrigen = $(this);
		ImgOrigen =  ElemOrigen.attr("src");
	  },
	  containment: ".panel-tablero", scroll: false
	});
	
	$(".elemento").droppable({
      drop: function( event, ui ) {
		ElemDestino = $(this);
		ImgDestino =  ElemDestino.attr("src");
       	
        ElemDestino.attr('src', ImgOrigen);
	   	
		if (typeof ElemOrigen != "undefined"){
			ElemOrigen.attr('src', ImgDestino);
			ElemOrigen.animate({left: 0, top:  0});
     		contarmovimientos();
	    	animarcaramelos();
		    sumarpuntos();
     		setTimeout(eliminarcaramelos, 2000);
	    	setTimeout(numerarcaramelos, 2100);
	 	    setTimeout(rellenarcaramelos, 3000);
		};
	  }
	});
	
	animarcaramelos();
	sumarpuntos();
	setTimeout(eliminarcaramelos, 2000);
	setTimeout(numerarcaramelos, 2100);
	if (retorno == true) {setTimeout(rellenarcaramelos, 3000)};
}

function animarcaramelos(){
	var fila, columna, caramelo;
    var matriz1 = [];
    for(var i=0; i <= 7; i++) {matriz1[i] = new Array(7)};
    
	//Llenar Matriz1 con nombres de imagen
	for (var i=1; i <= 7;i++) {
		fila = ".fila-" + i.toString();
		for (var j=1; j <= 7; j++) {
			columna = ".col-" + j.toString();
			caramelo = $(columna).find(fila).find("img")			
			matriz1[i][j] = caramelo.attr("src");
		}
	};
	
	//Limpiar Matriz2
	for (var i=1; i <= 7;i++) {
		for (var j=1; j <= 7; j++) {
			matriz2[i][j] = ""
		};
	};
	
	//Llenar Matriz2 con caramelos que hacen linea horizontal
	var imagen_anterior, imagen_posterior, contador;
	puntosjugada = 0;
	for (var i=1; i <= 7;i++) {
		contador = 0;
		imagen_anterior = "";
		imagen_posterior = "";
		for (var j=1; j <= 7; j++) {
			imagen_anterior = imagen_posterior;
			imagen_posterior = matriz1[i][j];
			
			if (imagen_anterior == imagen_posterior){
			contador = contador+1;
			}
			else {contador = 0;}
			
			if (contador >= 2) {
				for (var t= 0; t<=contador; t++) {matriz2[i][j-t] = "ELIMINAR"; puntosjugada = puntosjugada + 1};
			}
		}
	}
	
	//Llenar Matriz2 con caramelos que hacen linea vertical
	var imagen_anterior, imagen_posterior, contador;
	for (var j=1; j <= 7; j++) {
		contador = 0;
		imagen_anterior = "";
		imagen_posterior = "";
		for (var i=1; i <= 7; i++) {
			imagen_anterior = imagen_posterior;
			imagen_posterior = matriz1[i][j];
			
			if (imagen_anterior == imagen_posterior){
			contador = contador+1;
			}
			else {contador = 0;}
			
			if (contador >= 2) {
				for (var t= 0; t<=contador; t++) {matriz2[i-t][j] = "ELIMINAR"; puntosjugada = puntosjugada + 1};
			}
		}
	}

	
	//Animar imagenes que se eliminan
	for (var i= 1; i<=7; i++){
		fila = ".fila-" + i.toString();
		for (var j=1; j<=7; j++) {
			if (matriz2[i][j]== "ELIMINAR") {
			columna = ".col-" + j.toString();
			caramelo = $(columna).find(fila).find("img");
			caramelo.animate({opacity: "0.2"},500);
			caramelo.animate({opacity: "2"},500);
			caramelo.animate({opacity: "0.2"},1000);
			}
		}
	}
};

function eliminarcaramelos(){ //Eliminar Caramelos
	var fila, columna, caramelo;
	retorno = false;
	for (var i= 1; i<=7; i++){
		fila = ".fila-" + i.toString();
		for (var j=1; j<=7; j++) {
			if (matriz2[i][j]== "ELIMINAR") {
				columna = ".col-" + j.toString();
				caramelo = $(columna).find(fila);
				caramelo.remove();
				retorno = true;
			}
		}
	}
};

//Funcion que Sirve para actualizar el id fila luego de que se eliminan los caramelos
function numerarcaramelos () { 
	var fila, columna, num_fila, numcarameloscolumna;
	
	for (var j=1; j<=7; j++) {
		columna = ".col-" + j.toString();
		numcarameloscolumna = $(columna).find("div").length;
        num_fila = numcarameloscolumna;
		$(columna).find("div").each(function() {
				fila = "fila-" + (8 - num_fila);
				$(this).attr("class",fila);
				num_fila = num_fila -1;
		});
	}
};

function finalizar () {
	$(".panel-tablero").hide();
	$(".time").hide();
	$(".panel-score").animate({width: "100%"},2000);
};

$(function() {
   //Animación Título
   cambiacolor();

   $(".btn-reinicio").click(function () {
		$(this).text("REINICIAR");   	
		$("#timer").text("02:00");
		clearInterval(intervalo);
		intervalo = setInterval(cronometro, 1000);
		clearTimeout(tiempo);
        tiempo = setTimeout(finalizar, 120000);
		$(".panel-score").animate({width: "25%"});
     	$(".panel-tablero").show();
		$(".time").show();
		$(".fila-1").remove();
		$(".fila-2").remove();
		$(".fila-3").remove();
		$(".fila-4").remove();
		$(".fila-5").remove();
		$(".fila-6").remove();
		$(".fila-7").remove();
		$("#movimientos-text").text("0");
      	$("#score-text").text("0");

		llenarcaramelos();
		
   });
});



