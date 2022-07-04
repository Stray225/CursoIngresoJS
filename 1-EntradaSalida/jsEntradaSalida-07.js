/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{
	let suma;
	let	primerNum;
	let segundoNum;

	primerNum = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNum = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = primerNum + segundoNum;
	alert("La suma es de " + suma);
}

function restar()
{
	let resta;
	let	primerNum;
	let segundoNum;

	primerNum = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNum = parseInt(document.getElementById("txtIdNumeroDos").value);
	resta = primerNum - segundoNum;
	alert("La resta es de " + resta);
}

function multiplicar()
{ 
	let multiplicacion;
	let	primerNum;
	let segundoNum;

	primerNum = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNum = parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicacion = primerNum * segundoNum;
	alert("La multiplicación es de " + multiplicacion);
}

function dividir()
{
	let division;
	let	primerNum;
	let segundoNum;

	primerNum = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundoNum = parseInt(document.getElementById("txtIdNumeroDos").value);

	division = primerNum / segundoNum;
	alert("La división es de " + division);	
}

