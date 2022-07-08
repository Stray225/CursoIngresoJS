/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
: Se pedirá el importe del aumento por prompt.*/

function mostrarAumento()
{
	let aumento;
	let	sueldo;
	let resultado;


	aumento = prompt("Ingrese un valor para que se le otorgue un descuento: ")
	aumento = parseInt(aumento);

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	resultado = sueldo + (sueldo * (aumento / 100));

	document.getElementById("txtIdResultado").value = resultado;

}
