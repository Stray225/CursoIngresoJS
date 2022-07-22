/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	let sumaPositivos=0;
	let cantPositivos=0;
	let cantNegativos=0;
	let cantCeros=0;
	let cantPares=0;
	let promPositivos=0;
	let promNegativos=0;
	let difPositivoNegativo=0;
	let acumuladorPositivo=0;
	let acumuladorNegativo=0;

	respuesta="si";

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantPositivos = cantPositivos + 1;
			acumuladorPositivo = acumuladorPositivo + 1;
			if(numeroIngresado % 2 == 0)
			{
				cantPares = cantPares + 1;
			}
		}
		else if(numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantNegativos = cantNegativos + 1;
			acumuladorNegativo = acumuladorNegativo +1;
		}
		else
		{
			cantCeros = cantCeros + 1;
		}

		respuesta=prompt("desea continuar?");
		promPositivos = sumaPositivos / cantPositivos;
		promNegativos = sumaNegativos / cantNegativos;
		difPositivoNegativo = sumaPositivos - sumaNegativos;
}

	document.write("la suma de positivos es :"+sumaPositivos);
	document.write("la suma de negativos es :"+sumaNegativos); 
	document.write("la cantidad de positivos es :"+cantPositivos);
	document.write("la cantidad de negativos es :"+cantNegativos);
	document.write("la cantidad de ceros es :"+cantCeros);
	document.write("la cantidad de pares es :"+cantPares);
	document.write("el promedio de los positivos es :"+promPositivos);
	document.write("el promedio de los negativos es :"+promNegativos);
	document.write("la diferencia de positivo a negativo es:"+difPositivoNegativo);	
}