/* Denise Du Bois DIV G
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let aumento;
	
	aumento =prompt("ingrese procentaje");
	aumento=parseInt(aumento);

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo =parseInt (sueldo);

	resultado=sueldo+(sueldo*aumento/100);

	document.getElementById("txtIdResultado").value = resultado
}
