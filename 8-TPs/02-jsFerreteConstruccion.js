/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);
    let perimetro;

    perimetro = (largo * 2) + (ancho * 2);

    alert("Se deben comprar " + perimetro + " metros de alambre");
}
function Circulo () 
{
    let radio = parseFloat(document.getElementById("txtIdRadio").value);
    let perimetro;

    perimetro = 2 * 3.14 * radio;

    alert("Se deben comprar " + perimetro + " metros de alambre");
}
function Materiales () 
{
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);
    let area;
    let bolsaCemento;
    let bolsaCal;

    area = largo * ancho;
    bolsaCemento = (area * 2);    
    bolsaCal = (area * 3);

    alert("El area del piso es de: " + area + " metros cuadrados");
    alert("Y se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal");
}