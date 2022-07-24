/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .").toLowerCase;
	while(!(sexoIngresado=="m"||sexoIngresado=="f"))// otra forma while(sexoIngresado!="m"&&sexoIngresado!="f")
	{
		sexoIngresado=prompt("Error. Por favor ingrese f o m").toLowerCase;
	}
	document.getElementById("txtIdSexo").value=sexoIngresado;
}//FIN DE LA FUNCIÓN