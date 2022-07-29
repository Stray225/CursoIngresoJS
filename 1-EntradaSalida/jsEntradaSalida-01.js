/*Ejercicio 3 AGUSTIN PAZOS

UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar 
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros 
el mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, italia, cancún, japón), 
el precio por asiento es 1500 pesos, informar:
1) la recaudación total bruta del vuelo
2) la cantidad total asientos ocupados
3) la edad promedio por pasajero
4) El precio Final:
Tener en cuenta que:

dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento

según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento
*/

function mostrar()
{
	let nombreIngresado;
	let edadIngresada; // validar 13-85
	let cantAsientos; // los que quiere comprar min 1 - max 5
	let cantKilometros; // min 3000 - max 18000 validar 
	let destino; // validar río de janeiro, italia, cancún, japón
	let precioAsiento = 1500;

	let respuesta = "si";
	let asientosOcupados = 0;
	let edadPromedio = 0;
	let sumaEdades = 0;
	let contador = 0;
	let recaudacionBruta = 0;
	
	let precioFinal = 0;
	let precioFinalVuelo = 0;
	let porcentajeDescuentoDestino = 0;
	let porcentajeDescuentoAsientos = 0;
	let precioFinalAsientos = 0;

	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese su nombre del pasajero: ");
		edadIngresada = parseInt(prompt("Ingrese su edad del pasajero: "));
		while(edadIngresada < 13 || edadIngresada > 85)
		{
			edadIngresada = parseInt(prompt("REingrese su edad POR FAVOR: "));
		}
		cantAsientos = parseInt(prompt("Ingrese la cantidad de asientos que desee reservar: "));
		while(cantAsientos < 1 || cantAsientos > 5)
		{
			cantAsientos = parseInt(prompt("REingrese la cantidad de asientos que desee reservar POR FAVOR: "));
		}
		cantKilometros = parseInt(prompt("Ingrese la cantidad de kilometros de su viaje: "));
		while(cantKilometros < 3000 || cantKilometros > 18000)
		{
			cantKilometros = parseInt(prompt("REingrese la cantidad de kilometros de su viaje POR FAVOR: "));
		}
		destino = prompt("Ingrese su destino a continuación: ");
		while(destino!="rio de janeiro" && destino!="italia" && destino!="cancun" && destino!="japon")
		{
			destino = prompt("REingrese su destino a continuación POR FAVOR: ");
		}
		// 1) la recaudación total bruta del vuelo
		recaudacionBruta = recaudacionBruta + (cantAsientos * precioAsiento);
		// 2) la cantidad total asientos ocupados
		asientosOcupados = asientosOcupados + cantAsientos;
		// 3)
		sumaEdades = sumaEdades + edadIngresada;



		switch(destino)
		{
			case "japon":
				porcentajeDescuentoDestino = 1.4;
			break

			case "rio de janeiro":
				porcentajeDescuentoDestino = 0.1;	
			break

			case "italia":
				porcentajeDescuentoDestino =  1.25;
			break

			case "cancun":
				porcentajeDescuentoDestino = 0.05;
			break
		}

		if (porcentajeDescuentoDestino > 1)
		{
			precioFinal = precioAsiento * porcentajeDescuentoDestino;
		}
		else
		{
			precioFinal = precioAsiento - (precioAsiento * porcentajeDescuentoDestino)
		}

		switch(cantAsientos)
		{
			case 1:
				porcentajeDescuentoAsientos = 0.1;
			break

			case 2:
			case 3:
				porcentajeDescuentoAsientos = 0.15;
			break

			case 4:
			case 5:
				porcentajeDescuentoAsientos = 0.2;
			break
		}

		precioFinalAsientos = precioFinal - (precioFinal * porcentajeDescuentoAsientos)
		precioFinalVuelo = precioFinalVuelo + precioFinalAsientos;

		contador++;
		respuesta = prompt("Desea ingresar un nuevo pasajero? si/no: ");
	}
		edadPromedio = sumaEdades / contador;

	document.write("La recaudación total bruta del vuelo: " + recaudacionBruta + "<br>");
	document.write("La cantidad total asientos ocupados: " + asientosOcupados + "<br>");
	document.write("La edad promedio por pasajero: " + edadPromedio + "<br>");
	document.write("Precio final del vuelo: " + precioFinalVuelo + "<br>");
}