/* Denise Du Bois Div G
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/

function mostrar()
{
    let numeroUno;
    let numeroDos;
    let mensaje;
    let resultado;

    numeroUno=prompt("Ingrese un numero");
    numeroUno=parseInt(numeroUno);

    numeroDos=prompt("Ingrese otro numero");
    numeroDos=parseInt(numeroDos);

    if(numeroUno==numeroDos)
    {       
        mensaje="Los dos numeros son: "+numeroUno.toString()+numeroDos.toString();
        
    }
    else
        {
            if(numeroUno>numeroDos)
            {
                resultado=numeroUno-numeroDos;
                mensaje="La resta de ambos es: "+resultado;
                if(resultado>10)
                {
                    mensaje="la resta es "+resultado+" y superó el 10";
                }
                
            }
            else
            {
                if(numeroUno<numeroDos)
                {
                    resultado=numeroUno+numeroDos;
                    mensaje="La suma de ambos es: "+resultado;
                }
        
            }
        }
    alert(mensaje);   
    
}
