/* DENISE DU BOIS DIV G
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let numeroPositivo;
	let numeroNegativo;
	
	numeroPositivo=0;
	numeroNegativo=1;
	opcion=true;

	do{
	
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		opcion=confirm("Desea ingresar otro numero?");
		if(numero>0){
			numeroPositivo=numeroPositivo+numero;
		}
		else{
			numeroNegativo=numeroNegativo*numero;
		}
	}while(opcion==true)
		
	if(numeroNegativo==1){
		numeroNegativo="No se ingresaron numeros negativos"
	}
	document.getElementById("txtIdSuma").value=numeroPositivo;
	document.getElementById("txtIdProducto").value=numeroNegativo;

}//FIN DE LA FUNCIÓN