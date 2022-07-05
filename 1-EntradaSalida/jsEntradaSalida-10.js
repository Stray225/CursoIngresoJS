/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Se pedirá el importe del descuento por prompt. 
Además se deberá mostrar por alert el siguiente mensaje: 
"Ud obtuvo un descuento de $xx"*/

function mostrarAumento()
{
	let aumento;
	let	sueldo;
	let resultado;
	let mensaje;

	sueldo = parseInt(txtIdImporte.value);

	aumento = prompt("Ingrese un valor para que se le otorgue un descuento: ")
	aumento = parseInt(aumento);

	resultado = sueldo - (sueldo * (aumento / 100));

	mensaje = "Con el descuento aplicado te queda: " + resultado;
	txtIdResultado.value = resultado;

	alert("Se le otorgo un descuento de: " + aumento + "%");

}
