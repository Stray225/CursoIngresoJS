/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		contador++
		acumulador = numeroIngresado + acumulador;
		respuesta = prompt("Desea ingresar un numero? Si/No:");

	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}