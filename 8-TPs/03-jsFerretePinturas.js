/*3. Denise Du Bois DIV G
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let resultado;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);

    resultado=(temperatura-32)/1.8

    alert(temperatura + "° fahrenheit son "+resultado.toFixed(2)+"° celsius.")

	
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let resultado;

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseFloat(temperatura);

    resultado=(temperatura*1.8)+32

    alert(temperatura + "° celsius son "+resultado.toFixed(2)+"° fahrenheit.")
	
}
