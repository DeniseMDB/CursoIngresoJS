/*
Denise Du Bois Div G
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById("txtIdMes").value;
	switch (mesDelAño){
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Tiene 30 dias.";
		break;
		case "Febrero":
			mensaje="Tiene 28 dias.";
		break;
		default:
			mensaje="Tiene 31 dias";
		break;
	}

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN