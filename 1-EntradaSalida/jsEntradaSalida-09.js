/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let aumento;
	let	sueldo;
	let resultado;
	aumento = parseFloat(0.1);

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	resultado = sueldo + (sueldo * aumento);

	document.getElementById("txtIdResultado").value = resultado;

}




