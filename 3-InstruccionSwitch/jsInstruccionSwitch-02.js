function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;
	
	switch(mesDelAño)
	{
		case "Julio":
			mensaje = "Abrigate que hace frio";
		break
		case "Agosto":
			mensaje = "Abrigate que hace frio";
		break
		case "Septiembre":
			mensaje = "Ya paso el frio, ahora hace calor!";
		break
		default:
			mensaje = "Falta para el invierno";
		break
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN