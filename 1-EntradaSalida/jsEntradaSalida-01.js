/* AGUSTIN PAZOS EJERCICIO 3 PARCIAL
/******************************************************************************
Ejercicio 3

Parador Atalaya
Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro de
la venta diaria de cafés, medialunas y churros, esto durante las siguientes 12 horas.

Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:
Café $100.
Medialunas $60.
Churros $50.

Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informar:

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el producto con más unidades vendidas.
c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
e) Cuál fue el producto menos vendido para poder sacarlo de la venta.
*******************************************************************************/

function mostrar()
{
	// variables
	let nombreClienteIngresado;
	let tipoAlimentoIngresado;
	let cantidadAlimentoIngresada = 0;
	let respuesta = "no";

	let cafe = 100;
	let medialuna = 60;
	let churro = 50;

	let porcentajeDescuento = 0;

	//a) Cuantas Medialunas se compraron durante toda la jornada.
	let cantidadMedialunas = 0;
	let cantidadCafe = 0;
	let cantidadChurro = 0;
	//b) Cuál fue el producto con más unidades vendidas.
	let alimentoMasVendido;
	//c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
	let clienteQueMasCompro;
	let productoMasCompradoPorCliente;
	let banderaClienteQueMasCompro = false;
	//d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
	let precioConDescuento = 0;
	let precioFinal = 0;
	let impuestos = 1.2;
	let precioMedialunaDescuento = 0;
	let precioCafeDescuento = 0;
	let precioChurroDescuento = 0;

	//e) Cuál fue el producto menos vendido para poder sacarlo de la venta.
	let productoMenosVendido;

	
	while(respuesta == "no")
	{
		nombreClienteIngresado = prompt("Ingrese su nombre: ");
		tipoAlimentoIngresado = prompt("Ingrese el alimento que desea llevar: ");
		while(tipoAlimentoIngresado!="cafe" && tipoAlimentoIngresado!="medialuna" && tipoAlimentoIngresado!="churro")
		{
			tipoAlimentoIngresado = prompt("REINGRESE el alimento que desea llevar: ");
		}

		cantidadAlimentoIngresada = parseInt(prompt("Ingrese la cantidad de alimento que desea llevar: "));

		/*
		Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
		Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
		Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
		Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.
		*/

		switch(cantidadAlimentoIngresada)
		{
			case 5:
				if(tipoAlimentoIngresado == "cafe" && (tipoAlimentoIngresado == "medialuna" || tipoAlimentoIngresado == "churro"))
				{
					porcentajeDescuento = 0.05;
				}
			break
			case 10:
				if(tipoAlimentoIngresado == "medialuna" || tipoAlimentoIngresado == "churro")
				{
					porcentajeDescuento = 0.1;
				}
			break
			case 12:
				if(tipoAlimentoIngresado == "medialuna" || tipoAlimentoIngresado == "churro")
				{
					porcentajeDescuento = 0.2;
				}
			break
			case 24:
				if(tipoAlimentoIngresado == "medialuna" || tipoAlimentoIngresado == "churro")
				{
					porcentajeDescuento = 0.3;
				}
			break
		}


		switch(tipoAlimentoIngresado)
		{
			case "medialuna":
				cantidadMedialunas++;
				cantidadMedialunas = cantidadMedialunas * cantidadAlimentoIngresada;
				precioConDescuento = (medialuna * cantidadAlimentoIngresada) * medialuna;
			break
			case "cafe":
				cantidadCafe++;
				cantidadCafe = cantidadCafe * cantidadAlimentoIngresada;
				precioConDescuento = (cafe * cantidadAlimentoIngresada) * cafe;
			break
			case "churro":
				cantidadChurro++;
				cantidadChurro = cantidadChurro * cantidadAlimentoIngresada;
				precioConDescuento = (churro * cantidadAlimentoIngresada) * churro;
			break
		}



		//c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
		if(cantidadAlimentoIngresada > productoMasCompradoPorCliente || banderaClienteQueMasCompro == false)
		{
			clienteQueMasCompro = nombreClienteIngresado;
			productoMasCompradoPorCliente = tipoAlimentoIngresado;
			banderaClienteQueMasCompro = true;
		}
		//d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.

		if(precioConDescuento > 1300)
		{
			precioFinal = precioConDescuento * impuestos;
		}



		respuesta = prompt("Ya termino la jornada?: ");
	}

	//b) Cuál fue el producto con más unidades vendidas.
	if(cantidadMedialunas > cantidadCafe && cantidadMedialunas > cantidadChurro)
	{
		alimentoMasVendido = ("Medialuna");
	}
	else if (cantidadCafe > cantidadMedialunas && cantidadCafe > cantidadChurro)
	{
		alimentoMasVendido = ("Cafe");
	}
	else
	{
		alimentoMasVendido = ("Churro");
	}

	//e) Cuál fue el producto menos vendido para poder sacarlo de la venta.
	if(cantidadMedialunas < cantidadCafe && cantidadMedialunas < cantidadChurro)
	{
		productoMenosVendido = ("Medialuna");
	}
	else if (cantidadCafe < cantidadMedialunas && cantidadCafe < cantidadChurro)
	{
		productoMenosVendido = ("Cafe");
	}
	else
	{
		productoMenosVendido = ("Churro");
	}


	document.write("a)Se compraron: " + cantidadMedialunas + " medialunas.<br>"); 

	document.write("b) El producto con mas unidades vendidas fue: " + alimentoMasVendido + "<br>");

	document.write("c) El producto con mas unidades vendidas fue: " + clienteQueMasCompro + " y lo que compro fue: " + productoMasCompradoPorCliente + "<br>");
	
	document.write("d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos:  " + precioFinal + "<br>");

	document.write("e) Cuál fue el producto menos vendido para poder sacarlo de la venta.: " + productoMenosVendido + "<br>");

}
/*	
Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el producto con más unidades vendidas.
c) ombre del cliente, y tipo de producto con mayor cantidad de compras
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
e) Cuál fue el producto menos vendido para poder sacarlo de la venta.
*/
