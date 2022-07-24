/* Denise Du Bois Div G
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/



function mostrar()
{
	let estacionIngresada;
	let destino;
	let mensaje;

	mensaje="No se viaja";
	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	switch (estacionIngresada){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					mensaje="Se viaja";
				break;
			}
		break;
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se viaja";
				break;
			}
		break;
		case "Otoño":
			mensaje="Se viaja";
		break;
		case "Primavera":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					mensaje="Se viaja";
				break;
			}
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN