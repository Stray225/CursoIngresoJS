/*Debemos realizar la carga de 5(cinco) productos de prevención de 
contagio, de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar 
las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/


function mostrar()
{
let tipo; // barbijo , jabon , alcohol
let precio; // 100 - 300
let cantidad; // 1 - 1000
let marca;
let fabricante;

// Punto A
let masCaroJabon;
let cantidadJabonCaro;
let fabricanteJabonCaro;

//Punto B
let acumuladorJabon;
let acumuladorBarbijo;
let acumuladorAlcohol;
let contadorJabon;
let contadorBarbijo;
let contadorAlcohol;
let promedioPorVenta;

acumuladorAlcohol = 0;
acumuladorBarbijo = 0;
acumuladorJabon = 0;
contadorAlcohol = 0;
contadorBarbijo = 0;
contadorJabon = 0;


for (var i = 0; i < 5; i++)
{
	// Entradas de datos
	tipo = prompt("Ingrese el tipo de articulo:");
	while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
	{
		tipo = prompt("Reingrese el tipo de articulo, no es valido");

	}
	precio = parseFloat(prompt("Ingrese un precio:"));
	while(precio < 100 || precio > 300)
	{
		precio = parseFloat(prompt("Error de precio, ingrese nuevamente:"));
	}
	cantidad = parseInt(prompt("Ingrese una cantidad del producto"));
	while (cantidad < 1 || cantidad > 1000)
	{
		cantidad = parseInt(prompt("Ingrese una cantidad correcta: "));
	}
	marca = prompt("Ingrese la marca: ");
	fabricante = prompt("Ingrese el fabricante: ");

	document.write("<br>**************************<br>" + tipo + " " + 
	precio + " " + cantidad + " " + fabricante + " " + marca);

}

// Punto B 

switch (tipo)
{
	case "barbijo":
		acumuladorBarbijo += cantidad;
		contadorBarbijo++;
	break;
	
	case "alcohol":
		acumuladorAlcohol += cantidad;
		contadorAlcohol++;
	break;

	case "jabon":
		acumuladorJabon += cantidad;
		contadorJabon++;
	break;
}















}
