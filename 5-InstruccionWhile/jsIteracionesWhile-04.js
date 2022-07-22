/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	let numeroMostrado = txtIdNumero.value;
	let mensaje;
	
	if(numeroIngresado >= 0 && numeroIngresado <= 9)
	{
		txtIdNumero.value = numeroIngresado;
	}
	else
	{
		txtIdNumero.value = "El número no es valido";
	}

	
}