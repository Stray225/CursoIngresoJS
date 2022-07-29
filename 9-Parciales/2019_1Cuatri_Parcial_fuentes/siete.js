/* Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros. */

function mostrar()
{
let altura; // 0 - 250 cm
let sexo; // f - m
let jugadorBasquet; // 5 jugadores DE MAS
let alturaMasBaja; // con su sexo
let mujeresAltas; // mujeres +190cm

let promedioAltura;
let suma;
let banderaDelBajo = false;

suma = 0;
jugadorBasquet = 0; // DE MAS 
mujeresAltas = 0;


    for (var i = 0; i < 5; i++)
    {
        altura = parseInt(prompt("Ingrese una altura: "));
        while (altura < 0 || altura > 250)
        {
            altura = parseInt(prompt("REEingrese una altura: "));
        }
        sexo = prompt("Ingrese su sexo m/f: ");
        while (sexo != "m" && sexo != "f")
        {
            sexo = prompt("REEingrese su sexo: m/f");
        }
        document.write(altura + sexo); // para corroborar
        suma = suma + altura;

        if (altura < alturaMasBaja || banderaDelBajo == false)
        {
            alturaMasBaja = altura;
        }
            banderaDelBajo = true;

        if(altura > 190 && sexo == "f")
        {
            mujeresAltas++
        }
    }

    promedioAltura = suma / 5;
    alert(promedioAltura);
    alert(mujeresAltas);
    alert(alturaMasBaja);

}
