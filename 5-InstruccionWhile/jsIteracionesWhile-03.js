/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	let mensaje;

	if(claveIngresada == "utn750")
	{
		mensaje = "Ingresaste al sistema."
	}
	else
	{
		mensaje = "Contraseña incorrecta"
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN
