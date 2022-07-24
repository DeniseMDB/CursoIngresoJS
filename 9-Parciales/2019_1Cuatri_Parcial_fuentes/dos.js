/* Denise Du Bois DIV G
A una pareja se le pide los datos para mostrar un mensaje
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos,
 que sumados son xx kilos y el promedio de peso xx ".

 */
function mostrar()
{
  let nombreUno;
  let nombreDos;
  let pesoUno;
  let pesoDos;
  let suma;
  let promedio;

  nombreUno=prompt("Ingrese su nombre");
  nombreDos=prompt("Ingrese el nombre de su pareja");

  pesoUno=prompt("Ingrese su peso en kg");
  pesoUno=parseFloat(pesoUno);

  pesoDos=prompt("Ingrese el peso de su pareja en kg");
  pesoDos=parseFloat(pesoDos);

  suma=pesoUno+pesoDos;
  promedio=suma/2;

  alert("Sus nombres son "+ nombreUno+" y "+ nombreDos+" y pesan: "+pesoUno+" kg y "+pesoDos+" kg ,que sumados son "+sumatoFixed(2) +" kg y el promedio de peso es "+promedio.toFixed(2)+ " kg.");


}
