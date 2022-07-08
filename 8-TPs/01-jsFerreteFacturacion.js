/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let primerNum = parseInt(document.getElementById("txtIdPrecioUno").value);
    let segundoNum = parseInt(document.getElementById("txtIdPrecioDos").value);
    let tercerNum = parseInt(document.getElementById("txtIdPrecioTres").value);
    let suma;

    suma = primerNum + segundoNum + tercerNum;

    alert("La suma de los tres números es de: " + suma);
}
function Promedio () 
{
    let primerNum = parseInt(document.getElementById("txtIdPrecioUno").value);
    let segundoNum = parseInt(document.getElementById("txtIdPrecioDos").value);
    let tercerNum = parseInt(document.getElementById("txtIdPrecioTres").value);
    let promedio;

    promedio = (primerNum + segundoNum + tercerNum) / 3;

    alert("El promedio de los tres números es de: " + promedio);
}
function PrecioFinal () 
{
    let primerNum = parseInt(document.getElementById("txtIdPrecioUno").value);
    let segundoNum = parseInt(document.getElementById("txtIdPrecioDos").value);
    let tercerNum = parseInt(document.getElementById("txtIdPrecioTres").value);
    let iva;
    let suma;
    suma = (primerNum + segundoNum + tercerNum);


    iva = (suma * 0.21) + suma;

    alert("El precio final de la sumatoria de sus productos es de: " + suma);
    alert("Y con el IVA añadido: " + iva);
}


