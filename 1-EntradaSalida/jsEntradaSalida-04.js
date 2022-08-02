/*Ejercicio 1  AGUSTIN PAZOS

Ingresar el nombre de los 5 candidatos a presidente de CusCús,  la edad de cada uno y la cantidad
de votos (no menor a cero)  que sacó en las elecciones.
Informar: 
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
total de votos emitidos.

*/

function mostrar()
{
	let presidenteIngresado;
	let edadIngresada = 0;
	let cantVotos = 0;

	let candidatoMasVotado;
	let candidatoMenosVotado;
	let promedioEdadesCandidatos;
	let totalVotos = 0;
	let contador = 0;
	let banderaMasVotos = false;
	let banderaMenosVotos = false;
	let sumaEdades = 0;
	let menosVotos = 0;
	let masVotos = 0;

	while(contador < 5)
	{
		presidenteIngresado = prompt("Ingrese el nombre de un presidente de CusCús: ");
		edadIngresada = parseInt(prompt("Ingrese una edad de el presidente ingresado: "));
		cantVotos = parseInt(prompt("Ingrese la cantidad de votos del presidente: "));
		while(cantVotos < 0)
		{
			cantVotos = prompt("REingrese por favor la cantidad de votos del presidente, la cantidad anterior no es valida.: ");
			parseInt(edadIngresada);
		}

		if(cantVotos > masVotos || banderaMasVotos == false)
		{
			masVotos = cantVotos;
			candidatoMasVotado = presidenteIngresado;
			banderaMasVotos = true;
		}
		if(cantVotos < menosVotos || banderaMenosVotos == false)
		{
			menosVotos = cantVotos;
			candidatoMenosVotado = presidenteIngresado;
			banderaMenosVotos = true;
		}

		sumaEdades = edadIngresada + sumaEdades;
		totalVotos = cantVotos + totalVotos;
		contador++;
	}
	promedioEdadesCandidatos = sumaEdades / 5;

	document.write("Candidato con mas votos " + candidatoMasVotado + "<br>");
	document.write("Candidato con menos votos " + candidatoMenosVotado + "<br>");
	document.write("Promedio edades de candidatos " + promedioEdadesCandidatos + "<br>");
	document.write("Total de votos emitidos " + totalVotos + "<br>");

}
