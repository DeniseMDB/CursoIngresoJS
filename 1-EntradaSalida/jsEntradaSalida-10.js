/* Denise Du Bois DIV G
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let descuento;
	
	descuento = prompt("ingrese procentaje");
	desuento =parseInt (descuento);
	
	sueldo = document.getElementById("txtIdImporte").value;
	sueldo =parseInt (sueldo);

	resultado=sueldo-(sueldo*descuento/100);

	document.getElementById("txtIdResultado").value = resultado;
}
