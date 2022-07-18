/*.Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */


function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let totalSinDescuento;
    let porcentajeDescuento;
    let valorDescuento;
    let precioFinal;
    const PRECIO= 35;

    cantidadLamparas= document.getElementById("txtIdCantidad").value;
    cantidadLamparas= parseInt(cantidadLamparas);
    marca= document.getElementById("Marca").value;

     totalSinDescuento= cantidadLamparas * PRECIO;

    
    switch(5):
    {
        case "ArgentinaLuz":
            porcentajeDescuento = 0.4;
        break;
        default:
            porcentajeDescuento = 0.3;
        break;
    }
    switch(4):
    {
        case "ArgentinaLuz":
            porcentajeDescuento = 0.25;
        break;
        case "FelipeLamparas":
            porcentajeDescuento = 0.25;
        break;
        default:
            porcentajeDescuento = 0.2;
        break;
    }
    switch(3):
    {
        case "ArgentinaLuz":
            porcentajeDescuento = 0.15;
        break;
        case FelipeLamparas":
            porcentajeDescuento = 0.1;
        break;
        default:
            porcentajeDescuento = 0.05;
        break
    }




    if(cantidadLamparas > 5)
    {
        porcentajeDescuento= 0.50;
    }
    else
    {
        if(cantidadLamparas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 0.4;
            }
            else
            {
                porcentajeDescuento = 0.3;
            }
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentajeDescuento = 0.25;
                }
                else
                {
                    porcentajeDescuento = 0.2;
                }
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentajeDescuento = 0.15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentajeDescuento = 0.1;
                        }
                        else
                        {
                            porcentajeDescuento = 0.05;
                        }
                    }
                }
            }
        }
    }

    valorDescuento=  totalSinDescuento * porcentajeDescuento;
    precioFinal= totalSinDescuento - valorDescuento;
    document.getElementById("txtIdprecioDescuento").value= "$" + precioFinal;

}





    


    










/*
entradas: precio de lamparas, marcas, cant de lamparas, 
procesos: condiciones, descuento, precio descuento, 
salidas: precio final
*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 


function CalcularPrecio () 
{

// VARIABLES A USAR

 	let argentinaLuz = 35;
    let felipeLamparas = 35;
    let jeLuz = 35;
    let hazIluminacion = 35;
    let osram = 35;

    let descuento;
    let sumaPrecio;
    let cuentaDescuento;
    let porcentajeDescuento;
    let importeFinalAlto = 120;
    let impuestoImporteFinalAlto = 0.1;
    let cuentaDescuentoImporte;
    let precioMarca

    let cantLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;


// IF SOLO PARA SACAR PRECIO DE LA MARCA (Si cada una tendria el precio diferente, se haria aca abajo, pero como todo es el mismo para no poner 35.)

    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas" || marca == "JeLuz" || marca == "HazIluminacion" || marca == "Osram"){
        precioMarca = 35;
    }

// A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 


    if (cantLamparas > 5){
        descuento = 0.5;
        sumaPrecio = cantLamparas * precioMarca;
        porcentajeDescuento = descuento * 100;
        cuentaDescuento = -(sumaPrecio * descuento) + sumaPrecio
        document.getElementById("txtIdprecioDescuento").value = "Al comprar " + cantLamparas + " lamp, descuento: " + porcentajeDescuento + "%, FINAL: " + cuentaDescuento + "$ " + marca;
    }


// B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.



    if (cantLamparas == 5){
        if (marca == "ArgentinaLuz"){
            descuento = 0.4;
            sumaPrecio = cantLamparas * precioMarca;
            porcentajeDescuento = descuento * 100;
            cuentaDescuento = -(sumaPrecio * descuento) + sumaPrecio;
            document.getElementById("txtIdprecioDescuento").value = "Al comprar " + cantLamparas + " lamp, descuento: " + porcentajeDescuento + "%, FINAL: " + cuentaDescuento + "$ " + marca;
        }
        else{
            descuento = 0.3;
            sumaPrecio = cantLamparas * precioMarca;
            porcentajeDescuento = descuento * 100;
            cuentaDescuento = -(sumaPrecio * descuento) + sumaPrecio;
            document.getElementById("txtIdprecioDescuento").value = "Al comprar " + cantLamparas + " lamp, descuento: " + porcentajeDescuento + "%, FINAL: " + cuentaDescuento + "$ " + marca;
        }
    }

//    C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.


    if (cantLamparas == 4){
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = 0.25;
            sumaPrecio = cantLamparas * precioMarca;
            porcentajeDescuento = descuento * 100;
            cuentaDescuento = -(sumaPrecio * descuento) + sumaPrecio;
            document.getElementById("txtIdprecioDescuento").value = "Al comprar " + cantLamparas + " lamp, descuento: " + porcentajeDescuento + "%, FINAL: " + cuentaDescuento + "$ " + marca;
        }
        else{
            descuento = 0.2;
            sumaPrecio = cantLamparas * precioMarca;
            porcentajeDescuento = descuento * 100;
            cuentaDescuento = -(sumaPrecio * descuento) + sumaPrecio;
            document.getElementById("txtIdprecioDescuento").value = "Al comprar " + cantLamparas + " lamp, descuento: " + porcentajeDescuento + "%, FINAL: " + cuentaDescuento + "$ " + marca;
        }
    }

// D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.


    if (cantLamparas == 3){
        if (marca == "ArgentinaLuz"){
            descuento = 0.15; 
            sumaPrecio = cantLamparas * precioMarca;
            porcentajeDescuento = descuento * 100;
            cuentaDescuento = -(sumaPrecio * descuento) + sumaPrecio;
            document.getElementById("txtIdprecioDescuento").value = "Al comprar " + cantLamparas + " lamp, descuento: " + porcentajeDescuento + "%, FINAL: " + cuentaDescuento + "$ " + marca;
            //alert(porcentajeDescuento + "argentina luz");
        }
        
        if (marca == "FelipeLamparas"){
            descuento = 0.10;
            sumaPrecio = cantLamparas * precioMarca;
            porcentajeDescuento = descuento * 100;
            cuentaDescuento = -(sumaPrecio * descuento) + sumaPrecio;
            document.getElementById("txtIdprecioDescuento").value = "Al comprar " + cantLamparas + " lamp, descuento: " + porcentajeDescuento + "%, FINAL: " + cuentaDescuento + "$ " + marca;
        }

        else if(marca != "ArgentinaLuz" && marca != "FelipeLamparas"){
            descuento = 0.05;
            sumaPrecio = cantLamparas * precioMarca;
            porcentajeDescuento = descuento * 100;
            cuentaDescuento = -(sumaPrecio * descuento) + sumaPrecio;
            document.getElementById("txtIdprecioDescuento").value = "Al comprar " + cantLamparas + " lamp, descuento: " + porcentajeDescuento + "%, FINAL: " + cuentaDescuento + "$ " + marca;
        }
    }

// E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
// ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

    if (cuentaDescuento >= importeFinalAlto){
        cuentaDescuentoImporte = (cuentaDescuento * impuestoImporteFinalAlto);
        cuentaDescuento = cuentaDescuentoImporte + cuentaDescuento;
        alert("Usted pago " + cuentaDescuento + " de IIBB.”, siendo " + cuentaDescuentoImporte + " el impuesto que se pagó.");
    }








*/

