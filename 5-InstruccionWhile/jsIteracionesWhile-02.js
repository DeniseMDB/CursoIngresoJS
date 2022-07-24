/* DENISE DU BOIS DIV G
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	
	let numero;
	let opcion;

	numero=10;
	opcion==true;
	do{
	numero--;
	console.log(numero);
	opcion=confirm("Desea seguir con las iteraciones?")
	
	}while(opcion==true)
}
