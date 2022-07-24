/*  Denise Du Bois DIV G
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let cantidadAlambre;

    cantidadAlambre=3
    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);

    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    perimetro=((largo*2)+(ancho*2));
    resultado=(perimetro*cantidadAlambre);
    
    alert("Necesita comprar: "+ resultado.toFixed(2) + " metros de alambre");

}
function Circulo () 
{
    let radio;
    let circunferencia;
    let cantidadAlambre;
    let resutado;

    cantidadAlambre=3;
    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);

    circunferencia=2*Math.PI*radio;
    circunferencia=parseFloat(circunferencia);

    resultado=(circunferencia*cantidadAlambre);
    
    alert("Necesita comprar: "+ resultado.toFixed(2) + " metros de alambre");
	
}
function Materiales () 
{
	let ancho;
    let largo;
    let area;
    let cemento;
    let cal;
    let resultadocal;
    let resultadocemento;

    cemento=2;
    cal=3;
    
    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);

    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    area=largo*ancho
    area=parseFloat(area);
    resultadocal=area*cal;
    resultadocemento=area*cemento;
 
    alert("El area total es de: "+ area + " metros. Va a necesitar "+resultadocal.toFixed(0)+ " bolsas de cal y "+resultadocemento.toFixed(0)+" bolsas de cemento.");
    
}