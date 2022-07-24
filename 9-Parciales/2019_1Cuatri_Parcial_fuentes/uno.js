/* Denise Du Bois DIV G
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
    let longitud;
    let perimetro;

    longitud=prompt("Ingrese la longitud de un lado del triangulo");
    longitud=parseInt(longitud);

    perimetro=longitud*3;

    alert("El perimetro del triangulo es de: "+perimetro);

}
