function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;
	
	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!";
		break
		case "Marzo":
			mensaje = "A clases!";
		break
		case "Julio":
			mensaje = "Se vienen las vacaciones";
		break
		case "Diciembre":
			mensaje = "Felices fiestas!";
		break
		default:
			mensaje = "Nada que decir";
		break
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN