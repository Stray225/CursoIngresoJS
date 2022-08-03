/*Para el nuevo videojuego "surviving the UTN admission test" se ha solicitado desarrollar 
el sistema de estadísticas que nos mostrará información sobre los jugadores registrados en el juego.

Para ello por cada jugador, debemos ingresar:
Nombre del jugador,
Tipo de personaje("guerrero", "arquero" o "mago"),
Fuerza de ataque ( 1 a 10 inclusive ),
Resistencia a ataques (1 a 5 inclusive),
Tiene bonificación (si o no). Si tiene bonificación, el ataque y la resistencia  se duplican.

Se nos pide mostrar:

a) Nombre y tipo de personaje del personaje más poderoso y el más débil con y sin bonificación.
b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.
c) Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3.
d) Cual es el promedio de fuerza de ataque de todos los guerreros sin bonificación,
y cual de todos los magos con bonificación.
e) Que porcentaje del total de personajes ingresados representa cada tipo de personaje.
*/

function mostrar()
{
	let nombreIngresado;
	let tipoPersonajeIngresado;
	let fuerzaIngresada = 0;
	let resistenciaIngresada = 0;
	let bonificacionIngresada; //  Si tiene bonificación, el ataque y la resistencia  se duplican.
	let respuesta = "si";
	let bonificacion = 2;
	// a) mas poderoso y mas debil
	let pjMasFuerte;
	let banderaMasFuerte;
	let fuerzaMasFuerte;
	let tipoMasFuerte;
	let tipoMasFuerteBonificacionFuerza;
	let tipoMasFuerteBonificacionResistencia;
	let pjMasDebil;
	let banderaMasDebil;
	let fuerzaMasDebil;
	let tipoMasDebil;
	let tipoMasDebilBonificacionFuerza;
	let tipoMasDebilBonificacionResistencia;
	//b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.
	let contadorPersonajes5y3;
	//c) Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3.
	let arquerosSinBonif;
	//d) Cual es el promedio de fuerza de ataque de todos los guerreros sin bonificación,
	let promedioFuerzaSinBonif;
	let sumaFuerzaSinBonif;
	let contadorFuerzaSinBonif;
	let promedioMagoBonif;
	let sumaMagoBonif;
	let contadorMagoBonif;
	let magoFuerzaBonificacion;
	//e) Que porcentaje del total de personajes ingresados representa cada tipo de personaje.
	let cantidadGuerrero;
	let cantidadArquero;
	let cantidadMago;
	let porcentajeGuerrero;
	let porcentajeArquero;
	let porcentajeMago;
	let contador = 0;

	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese el nombre del jugador: ");
		tipoPersonajeIngresado = prompt("Ingrese el tipo de personaje: ");
		while(tipoPersonajeIngresado!="guerrero" && tipoPersonajeIngresado!="arquero" && tipoPersonajeIngresado!="mago")
		{
			tipoPersonajeIngresado = prompt("REINGRESE el tipo de personaje: ");
		}

		fuerzaIngresada = parseInt(prompt("Ingrese el nivel de fuerza: "));
		while(fuerzaIngresada < 1 || fuerzaIngresada > 10)
		{
			fuerzaIngresada = parseInt(prompt("REINGRESE el nivel de fuerza: "));
		}

		resistenciaIngresada = parseInt(prompt("Ingrese el nivel de resistencia: "));
		while(resistenciaIngresada < 1 || resistenciaIngresada > 5)
		{
			resistenciaIngresada = parseInt(prompt("REINGRESE el nivel de resistencia: "));
		}

		bonificacionIngresada = prompt("Confirme si tiene bonificación o no: ");
		while(bonificacionIngresada != "si" && bonificacionIngresada != "no")
		{
			bonificacionIngresada = prompt("REINGRESE la confirmación si tiene bonificación o no: ");
		}

		//a) Nombre y tipo de personaje del personaje más poderoso y el más débil con y sin bonificación.
		if (fuerzaIngresada > fuerzaMasFuerte || banderaMasFuerte == false)
		{
			pjMasFuerte = nombreIngresado;
			tipoMasFuerte = tipoPersonajeIngresado;
			banderaMasFuerte = true;
			tipoMasFuerteBonificacionFuerza = fuerzaIngresada * 5;
			tipoMasFuerteBonificacionResistencia = resistenciaIngresada * 5;
		}

		if (fuerzaIngresada < fuerzaMasDebil || banderaMasDebil == false)
		{
			pjMasDebil = nombreIngresado;
			tipoMasDebil = tipoPersonajeIngresado;
			banderaMasDebil = true;
			tipoMasDebilBonificacionFuerza = fuerzaIngresada * 5;
			tipoMasDebilBonificacionResistencia = resistenciaIngresada * 5;
		}

		//b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.
		if(fuerzaIngresada > 5 && resistenciaIngresada > 3)
		{
			contadorPersonajes5y3++;
		}
		//c) Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3.
		if(tipoPersonajeIngresado == "arquero" && bonificacionIngresada == "no" && fuerzaIngresada < 3 && resistenciaIngresada > 3)
		{
			arquerosSinBonif++;
		}
		//d) Cual es el promedio de fuerza de ataque de todos los guerreros sin bonificación,
		// y cual de todos los magos con bonificación.
		if(bonificacionIngresada == "no")
		{
			sumaFuerzaSinBonif = sumaFuerzaSinBonif + fuerzaIngresada;
			contadorFuerzaSinBonif++;
			if(tipoPersonajeIngresado == "mago")
			{
				magoFuerzaBonificacion = fuerzaIngresada * 5;
				sumaMagoBonif = sumaMagoBonif + fuerzaIngresada;
				contadorMagoBonif++;
			}
		}
		//e) Que porcentaje del total de personajes ingresados representa cada tipo de personaje.
		switch(tipoPersonajeIngresado)
		{
			case "guerrero":
				cantidadGuerrero++;
			break
			case "arquero":
				cantidadArquero++;
			break
			case "mago":
				cantidadMago++;
			break
		}

		contador++;
		respuesta = prompt("Quiere añadir un nuevo personaje?: ");
	}

	promedioFuerzaSinBonif = sumaFuerzaSinBonif / contadorFuerzaSinBonif;
	promedioMagoBonif = sumaMagoBonif / contadorMagoBonif;
	porcentajeGuerrero = cantidadGuerrero / contador;
	porcentajeArquero = cantidadArquero / contador;
	porcentajeMago =  cantidadMago / contador;

	document.write("a) Nombre y tipo de personaje del personaje más poderoso y el más débil con y sin bonificación: " + libroMasCaro + "<br>");
	document.write("b)Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3: " + libroMasCaro + "<br>");
	document.write("c)Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3: " + libroMasCaro + "<br>");
	document.write("Del libro más caro, el título: " + libroMasCaro + "<br>");
	document.write("Del libro más caro, el título: " + libroMasCaro + "<br>");

}

/*	a) Nombre y tipo de personaje del personaje más poderoso y el más débil con y sin bonificación.
	b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.
	c) Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3.
	d) Cual es el promedio de fuerza de ataque de todos los guerreros sin bonificación,
	y cual de todos los magos con bonificación.
	e) Que porcentaje del total de personajes ingresados representa cada tipo de personaje.
*/
