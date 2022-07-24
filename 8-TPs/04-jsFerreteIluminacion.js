/*4. Denise Du Bois Div G
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.  
 */
/*
 function CalcularPrecio ()
 {
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;
    let descuento;
    let precioFinal;
    let impuesto;
    let mensaje;

    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;
    descuento=1;

    if(cantidadLamparas>=6)
    {
        descuento=0.50;
    }
    else
    {
        if(cantidadLamparas==5)
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                descuento=0.60;
            }
           else
            {
                descuento=0.70;
            }
        }   
        else
        {
            if(cantidadLamparas==4)
            {
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
                {
                    descuento=0.75;
                }
                else
                {
                    descuento=0.80;
                }
            }
            else
            {
                if(cantidadLamparas==3)
                {
                    if(marcaLamparas=="ArgentinaLuz")
                    {
                        descuento=0.85;
                    }
                    else
                    {
                     if(marcaLamparas=="FelipeLamparas")
                        {
                        descuento=0.90;
                        }else
                        {
                        descuento=0.95;
                        }
                    }
                }   
            }
        }
        
    }
    
    precioFinal=precioBruto*descuento;
    if(precioFinal>120)
    {
        impuesto=precioFinal*0.1;
        precioFinal=precioFinal+impuesto;
        mensaje="Usted pago $"+impuesto+" de IIBB.";
        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value=precioFinal.toFixed(2);
 }
*/
function CalcularPrecio ()
 {
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;
    let descuento;
    let precioFinal;
    let impuesto;
    let mensaje;

    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;
    
    switch(cantidadLamparas){
        case 1:
        case 2:
            descuento=1;
        break;        
        case 3:
            switch(marcaLamparas){
                case "ArgentinaLuz":
                    descuento=0.85
                break;
                case "FelipeLamparas":
                    descuento=0.90;
                break;
                default:
                    descuento=0.95;
                break;   
            }
        break;
        case 4:
            switch(marcaLamparas){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=0.75;
                break;
                default:
                    descuento=0.80;
                break;
            }
        break;
        case 5:
            switch(marcaLamparas){
                case "ArgentinaLuz":
                    descuento=0.60;
                break;
                default:
                    descuento=0.70;
                break;
            }
        break;
        default:
            descuento=0.50;
    }
    precioFinal=precioBruto*descuento;
    if(precioFinal>120)
    {
        impuesto=precioFinal*0.1;
        precioFinal=precioFinal+impuesto;
        mensaje="Usted pago $"+impuesto+" de IIBB.";
        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value=precioFinal.toFixed(2);

 }


















 