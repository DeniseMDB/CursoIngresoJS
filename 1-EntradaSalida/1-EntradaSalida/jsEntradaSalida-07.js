/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);

	alert("La suma es: " + (numeroUno+numeroDos));	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	
	alert("La resta es: " + (numeroUno-numeroDos));
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	
	alert("La multiplicacion es: " + (numeroUno*numeroDos));
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	
	alert("La division es: " + (numeroUno/numeroDos));
}

