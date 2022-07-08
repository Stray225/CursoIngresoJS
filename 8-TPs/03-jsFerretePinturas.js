/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function CentigradosFahrenheit () 
{
    let temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    let tempCelsius;

    tempCelsius = (temperatura * 1.8) + 32;

    alert("Su temperatura en Centigrados es de: " + tempCelsius + " grados centigrados");
}

function FahrenheitCentigrados () 
{
    let temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    let tempFaren;

    tempFaren = (temperatura - 32 ) * 0.55;

    alert("Su temperatura en Centigrados es de: " + tempFaren + " grados fahrenheit");
}
