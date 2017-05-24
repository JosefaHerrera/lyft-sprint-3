/*VALIDAR CAMPO DE NUMERO DE TELEFONO*/
var numero=document.getElementById("botonn");
numero.addEventListener("click", function(){
	var num=document.getElementById("phone").value;
	if(num.length!=9){
		alert("Debe ingresar un número de 9 dígitos");
	}else{
		var text=document.getElementById("phone");
		alert("Numero ingresado");
	}
});

/*VALIDAR CAMPOS DE JUEGO*/
var juegoCar=document.getElementById("jugar");
juegoCar.addEventListener('click', function(){
	var x = document.getElementById("xauto").value;
	var y = document.getElementById("yauto").value;
	x=parseInt(x);
	y=parseInt(y);
	if (isNaN(x)==true || isNaN(y)==true){
		alert("Debes ingresar números");
	}
	else if(x>10){
		alert ("Para X (número entre el 1 y 10)");
	}else if(y>6){
		alert ("Para Y (número entre 1 y 6)");
	}else{
		alert("valores ingresados correctamente");
	}
});



/*EN EL BORDE DEL COPALSO ! ! !*/



/*
					CODIGO DE BLANCA 
//Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
//Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}*/