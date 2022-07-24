/* Denise Du Bois DIV G corregido
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio=prompt("Ingrese el precio");
    precio=parseFloat(precio);

    descuento=prompt("Ingrese el descuento");
    descuento=parseFloat(descuento);

    precioFinal=precio-(precio*(descuento/100));
    document.getElementById("elPrecioFinal").value=precioFinal;
}
