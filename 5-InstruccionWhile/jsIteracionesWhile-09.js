/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	respuesta='si';
	let numeroBandera;

	numeroMaximo = 0;
	numeroMinimo = 0;


	numeroBandera = parseInt(prompt("Ingrese el primer numero: "));

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));
		if(numeroIngresado > numeroBandera)
		{
			numeroMaximo = numeroIngresado;
			alert(numeroMaximo);
		}
		else if (numeroIngresado < numeroBandera)
		{
			numeroMinimo = numeroIngresado;
			alert(numeroMinimo);
		}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN