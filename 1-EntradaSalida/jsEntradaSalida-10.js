/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let aumento;
	let	sueldo;
	let resultado;
	aumento = parseFloat(0.25);

	sueldo = parseInt(document.getElementById("txtIdImporte").value);

	resultado = sueldo - (sueldo * aumento);

	document.getElementById("txtIdResultado").value = resultado;

}
