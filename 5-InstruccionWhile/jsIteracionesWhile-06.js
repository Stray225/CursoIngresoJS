function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=1;
	acumulador=0;

	while (contador <= 5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador++;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}