/* Denise Du Bois Div G
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado =document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){
		case"Bariloche":
		case "Ushuaia":
			mensaje="Aqui hace frio";
		break;
		case "Cataratas":
		case "Mar del plata":
			mensaje="Aqui hace calor";
		break;
		}
	alert(mensaje);

}//FIN DE LA FUNCIÓN