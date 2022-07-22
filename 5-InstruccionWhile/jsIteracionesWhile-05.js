/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	let mensaje;

	if (sexoIngresado == "f" || sexoIngresado == "m")
	{
		txtIdSexo.value=sexoIngresado;
	}
	else
	{
		mensaje = "Incorrecto";
		txtIdSexo.value=mensaje;
	}
	
}


/*


//FIN DE LA FUNCIÓN