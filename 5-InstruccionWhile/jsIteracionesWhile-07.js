/* DENISE DU BOIS DIV G
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let acumuladorDeNumero;
	let respuesta;

	respuesta=true;
	acumulador=0;
	contador=0
	do{
		
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=confirm("Desea continuar?")
		acumulador=acumulador+numeroIngresado;
		contador++;
	}while(respuesta==true);
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;
}//FIN DE LA FUNCIÓN