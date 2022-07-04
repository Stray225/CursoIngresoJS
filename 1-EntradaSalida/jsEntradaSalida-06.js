/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let suma = parseInt;
	let	primerNum;
	let segundoNum;
	
	primerNum = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNum = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = primerNum + segundoNum;
	
	alert ("La suma es de: " + suma);
}
