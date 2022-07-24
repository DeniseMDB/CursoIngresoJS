/* Denise Du Bois Div G
una agencia de viajes debe sacar las tarifas de los viajes ,
se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/


function mostrar()
{
	let estacionIngresada;
	let baseEstadia;
	let destino;
	let descuento;
	let aumento;
	let tarifa;

	descuento=0
	aumento=0
	baseEstadia=15000
	estacionIngresada =document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					aumento=0.2;
				break;
				case "Cordoba":
					descuento=0.1;
				break;
				case "Mar del plata":
					descuento=0.2;
				break;
			}
		break;
		case "Verano":
			switch(destino){
			case "Bariloche":
					descuento=0.2;
			break;
			case "Cordoba":
			case "Cataratas":
					aumento=0.1;
			break;
			case "Mar del plata":
					aumento=0.2;
			break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
					aumento=0.1;
				break;
				case "Cataratas":
					aumento=0.1;
				break;
				case "Mar del plata":
					aumento=0.2;
				break;
			}
		break;

	}
	switch(descuento){
		case 0:
			tarifa=baseEstadia+(baseEstadia*aumento);
		break;
		}
	switch(aumento){
		case 0:
			tarifa=baseEstadia-(baseEstadia*descuento);
		break;
	}
	mensaje="Su tarifa de viaje es de: $"+tarifa;
	mensaje+=". Tuvo un recargo de: "+aumento*100+" % y un descuento de: "+descuento*100+" %.";

	alert(mensaje);

}//FIN DE LA FUNCIÓN