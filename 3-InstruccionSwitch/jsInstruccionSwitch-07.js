function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje = "SUR";
		break
		case "Cataratas":
			mensaje = "NORTE";
		break
		case "Mar del Plata":
			mensaje = "SUR";
		break
		case "Ushuaia":
			mensaje = "SUR";
		break
		default:
			mensaje = "No es ningun destino";
		break
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN