/*EVALUACIÓN FINAL MODULO 4*/
/*Realizado por: Juan Francisco Sarzosa Pazmiño*/

var Calculadora = {
  Resultado: 0,
  NumeroActual: "0",
  Operador: "X",

  init: function(){
    document.getElementById("on").onclick = this.encender;
    document.getElementById("0").onclick = this.ingresa_cero;
    document.getElementById("1").onclick = this.ingresa_numero;
    document.getElementById("2").onclick = this.ingresa_numero;
    document.getElementById("3").onclick = this.ingresa_numero;
    document.getElementById("4").onclick = this.ingresa_numero;
    document.getElementById("5").onclick = this.ingresa_numero;
    document.getElementById("6").onclick = this.ingresa_numero;
    document.getElementById("7").onclick = this.ingresa_numero;
    document.getElementById("8").onclick = this.ingresa_numero;
    document.getElementById("9").onclick = this.ingresa_numero;
    document.getElementById("punto").onclick = this.ingresa_punto;
    document.getElementById("mas").onclick = this.sumar;
    document.getElementById("menos").onclick = this.restar;
    document.getElementById("por").onclick = this.multiplicar;
    document.getElementById("dividido").onclick = this.dividir;
    document.getElementById("igual").onclick = this.ObtenerResultado;
    document.getElementById("sign").onclick = this.ingresa_signo;
    this.asignarEventosTecla('tecla');
  },
  encender: function(){
    document.getElementById("display").innerHTML= "0";
    Calculadora.Resultado = 0;
    Calculadora.NumeroActual = 0;
  },

  ingresa_numero: function(event){
    num_actual = Calculadora.NumeroActual.toString();
    if (Calculadora.NumeroActual == '0') {
      num_actual = ''
    };
    if (num_actual.length < 8){
      document.getElementById("display").innerHTML= num_actual.concat('',event.target.id);
      Calculadora.NumeroActual = document.getElementById("display").innerHTML;
    };
  },

  ingresa_cero: function(event){
    num_actual = Calculadora.NumeroActual.toString();
    if (num_actual == '0') {
      num_actual = '';
    }
    else
    {
      if (num_actual.length < 8){
        document.getElementById("display").innerHTML= num_actual.concat('',event.target.id);
        Calculadora.NumeroActual = document.getElementById("display").innerHTML;
      };
    };
  },

  ingresa_punto: function(event){
    num_actual = Calculadora.NumeroActual.toString();
    var n = num_actual.indexOf('.');
    if (n < 0) {
      if (num_actual.length < 8){
        document.getElementById("display").innerHTML= num_actual.concat('','.');
      };
    };
    Calculadora.NumeroActual = document.getElementById("display").innerHTML;
  },

  ingresa_signo: function(event){
    Calculadora.NumeroActual = document.getElementById("display").innerHTML;
    num_actual = parseFloat(Calculadora.NumeroActual);
    num_actual = -1 * num_actual;
    document.getElementById("display").innerHTML= num_actual.toString();
    Calculadora.NumeroActual = document.getElementById("display").innerHTML;
  },

  sumar: function () {
    Calculadora.Resultado = parseFloat(document.getElementById("display").innerHTML);
    Calculadora.Operador = '+';
    Calculadora.NumeroActual = "0";
    document.getElementById("display").innerHTML="";
  },

  restar: function () {
    Calculadora.Resultado = parseFloat(document.getElementById("display").innerHTML);
    Calculadora.Operador = '-';
    Calculadora.NumeroActual = "0";
  },

  multiplicar: function () {
    Calculadora.Resultado = parseFloat(document.getElementById("display").innerHTML);
    Calculadora.Operador = '*';
    Calculadora.NumeroActual = "0";
  },

  dividir: function () {
    Calculadora.Resultado = parseFloat(document.getElementById("display").innerHTML);
    Calculadora.Operador = '/';
    Calculadora.NumeroActual = "0";
  },

  ObtenerResultado: function(){
      if (Calculadora.Operador == "+") {
        Calculadora.Resultado = Calculadora.Resultado + parseFloat(Calculadora.NumeroActual);
      };
      if (Calculadora.Operador == "-") {
        Calculadora.Resultado = Calculadora.Resultado - parseFloat(Calculadora.NumeroActual);
      };
      if (Calculadora.Operador == "*") {
        Calculadora.Resultado = Calculadora.Resultado * parseFloat(Calculadora.NumeroActual);
      };
      if (Calculadora.Operador == "/") {
        Calculadora.Resultado = Calculadora.Resultado / parseFloat(Calculadora.NumeroActual);
      };
      resultado = Calculadora.Resultado.toString();
      if (resultado.length > 8){
        resultado = resultado.substring(0,8);
        document.getElementById("display").innerHTML= resultado;
      }
      else {
        document.getElementById("display").innerHTML= Calculadora.Resultado;
      };
      Calculadora.NumeroActual = "0";
  },

  asignarEventosTecla: function(selector){
    var TeclasPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < TeclasPagina.length; i++) {
      TeclasPagina[i].onmousedown = this.aplasta_boton;
      TeclasPagina[i].onmouseup = this.suelta_boton;
      }
  },

  suelta_boton: function() {
    if (event.target.id != "mas") {
      event.target.style.height ="65px";}
    else {
      event.target.style.width ="80px"
    };
  },
  aplasta_boton: function(){
    if (event.target.id != "mas") {
      event.target.style.height ="61px";}
    else {
      event.target.style.width ="76px"
    }
  }
}
Calculadora.init();
