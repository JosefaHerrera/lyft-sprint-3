/*VALIDAR CAMPO DE NUMERO DE TELEFONO*/
var numero=document.getElementById('botonn');
numero.addEventListener('click', function(){
	var num=document.getElementById('phone').value;
	if(num.length!=9){
		alert("Debe ingresar un número de 9 dígitos");
	}else{
		var text=document.getElementById('phone');
		alert("Numero ingresado");
	}
});