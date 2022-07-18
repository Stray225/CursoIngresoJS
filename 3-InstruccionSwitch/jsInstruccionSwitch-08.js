function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "FRIO";
		break
		case "Cataratas":
			mensaje = "CALOR";
		break
		case "Mar del plata":
			mensaje = "CALOR";
		break
		case "Ushuaia":
			mensaje = "FRIO";
		break
		default:
			mensaje = "No es ningun destino";
		break
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN