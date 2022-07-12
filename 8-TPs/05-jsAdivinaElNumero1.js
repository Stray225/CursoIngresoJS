/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
Genero el número RANDOM entre 1 y 100
alert(numeroSecreto );
*/



let numeroSecreto; 
let contadorIntentos;
let random;

function comenzar()
{
  random = (Math.floor(Math.random() * 100) + 1);
  alert(random);
}

function verificar()
{
  if (document.getElementById("txtIdNumero").value == random){
    alert("Usted es un ganador!");
  }
  else if(document.getElementById("txtIdNumero").value < random){
    alert ("estas a X numeros del correcto!");
  }
  else(document.getElementById("txtIdNumero").value > random){
    alert ("te pasaste por X numeros capo");
  }
}	  


txtIdNumero ||  txtIdIntentos
document.getElementById("txtIdNumero").value