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

	let banderaDelPrimero = false; // o 0

	respuesta='si';

	while(respuesta == "si")
	{
	numeroIngresado = parseInt(prompt("Ingrese un numero: "));
	if(numeroIngresado > numeroMaximo || banderaDelPrimero == false)
	{
		numeroMaximo = numeroIngresado;
	}
	if(numeroIngresado < numeroMinimo || banderaDelPrimero == false)
	{
		numeroMinimo = numeroIngresado;
		banderaDelPrimero = true;
	}
	respuesta=prompt("desea continuar?");
	}


	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN