function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;

	let mensaje;
	let porcentajeDescuento;
	let tarifaInicial;
	let cuentaCalculo;

	tarifaInicial = 15000
	porcentajeDescuento = 1;



	switch(estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					porcentajeDescuento = 1.2;
				break
				case "Cataratas":
				case "Cordoba":
					porcentajeDescuento = 0.1;
				break
				case "Mar del plata":
					porcentajeDescuento = 0.2;
				break
			}		
		break

		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					porcentajeDescuento = 0.2;
				break
				case "Cataratas":
				case "Cordoba":
					porcentajeDescuento = 1.1;
				break
				case "Mar del plata":
					porcentajeDescuento = 1.2;
				break
			}	
		break

		case "Primavera":
		case "Otoño":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentajeDescuento = 1.1;
				break
				default:
					porcentajeDescuento = 1;
				break
			}	
		break


		default:
			mensaje = ("No es ninguna estación");
		break
	}

	if(porcentajeDescuento >= 1)
	{
		cuentaCalculo = tarifaInicial * porcentajeDescuento;
	}
	else
	{
		cuentaCalculo = tarifaInicial - (tarifaInicial * porcentajeDescuento);
	}

	mensaje = cuentaCalculo;
	alert("Su tarifa final es de: " + mensaje + "$");

}

