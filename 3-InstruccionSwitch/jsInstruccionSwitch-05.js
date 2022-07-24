/* Denise Du Bois Div G
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	let horaDelDia;
	let mensaje;

	//tomo la hora
	horaDelDia=document.getElementById("txtIdHora").value;
	horaDelDia=parseInt(horaDelDia);
	switch (horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de manana";
		break;
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN