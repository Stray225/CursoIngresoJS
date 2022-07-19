function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;
	
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días";
		break
		case "Abril":
		case "Septiembre": 
		case "Noviembre":
		case "Junio":
			mensaje = "Este mes tiene 30 dias";
		break
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 dias";
		break
		default:
			mensaje = "Falta para el invierno";
		break
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN