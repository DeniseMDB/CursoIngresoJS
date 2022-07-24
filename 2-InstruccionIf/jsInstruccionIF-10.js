/* Denise Du Bois Div G
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let numero;
	let mensaje;
	numero=Math.floor(Math.random()*10+1)
	if (numero<4)
	{
		mensaje="Tu nota es: "+numero
		mensaje+=". Vamos, la proxima se puede"
	}else if(numero>4 && numero<9)
	{
		mensaje="Tu nota es: "+numero
		mensaje+=". APROBÓ"
	}else
	{
		mensaje="Tu nota es: "+numero
		mensaje+=". EXCELENTE"
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
