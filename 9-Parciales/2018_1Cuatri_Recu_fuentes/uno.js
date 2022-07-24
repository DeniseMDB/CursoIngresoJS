
/* Denise Du Bois DIV G
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".*/

function mostrar()
{
    let nombre;
    let localidad;
    let mensaje;

    nombre=document.getElementById("elNombre").value;
    localidad=document.getElementById("laLocalidad").value;

    mensaje="Usted es "+nombre;
    mensaje +=" y vive en la localidad de "+localidad;

    alert(mensaje);

}