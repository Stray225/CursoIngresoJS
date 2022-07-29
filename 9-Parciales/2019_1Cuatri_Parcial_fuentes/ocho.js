/* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el 
usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo. */ 

function mostrar()
{
    let numeroIngresado; // entre -100 y 100
    let letraIngresada; // 
    let cantNumPares = 0;
    let cantNumImpares = 0;
    let cantCeros = 0;
    let promedioPositivos = 0;
    let sumaNegativos = 0;
    let sumaPositivos = 0;
    let numMaximo; // Tiene que ser con su letra
    let numMinimo; // Tiene que ser con su letra
    let contador = 0;
    let respuesta = "si";
    let banderaDelMaximo = false;
    let BanderaDelMinimo = false;
    let letraDelMaximo;
    let letraDelMinimo;

    while(respuesta == "si")
    {
        numeroIngresado = parseInt(prompt("Ingrese un numero: "));
        while(numeroIngresado < -100 || numeroIngresado > 100)
        {
            numeroIngresado = parseInt(prompt("REEIngrese un numero: "));
        }
        letraIngresada = prompt("Ingrese una letra: ");
        contador++;
        
        if((numeroIngresado%2) == 0)
        {
            cantNumPares = cantNumPares + 1;
        }
        else
        {
            cantNumImpares = cantNumImpares + 1;
        }

        if(numeroIngresado == 0)
        {
            cantCeros = cantCeros + 1;
        }

        if(numeroIngresado >= 0)
        {
            sumaPositivos = sumaPositivos + numeroIngresado;
        }
        else
        {
            sumaNegativos = sumaNegativos + numeroIngresado;
        }

        if (numMaximo > numeroIngresado || banderaDelMaximo == false)
        {
            numMaximo = numeroIngresado;
            banderaDelMaximo = true;
            letraDelMaximo = letraIngresada;
        }
        if (numMinimo < numeroIngresado || BanderaDelMinimo == false)
        {
            numMinimo = numeroIngresado;
            BanderaDelMinimo = true;
            letraDelMinimo = letraIngresada;
        }


        respuesta = prompt("Quiere seguir ingresando numeros y letras? si/no: ");
    }

    promedioPositivos = sumaPositivos / contador;

	document.write("Cantidad numeros pares" + cantNumPares + "<br>");
    document.write("Cantidad numeros impares" + cantNumImpares + "<br>");
	document.write("Cantidad de ceros" + cantCeros + "<br>");
    document.write("Promedio de positivos" + promedioPositivos + "<br>");
    document.write("Suma de negativos" + sumaNegativos + "<br>");

    document.write("El numero minimo es " + numMaximo + " y su letra es: " + letraDelMaximo + "<br>");
    document.write("El numero maximo es " + numMinimo + " y su letra es: " + letraDelMinimo + "<br>");





}
