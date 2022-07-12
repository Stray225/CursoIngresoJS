function mostrar()
{
	var numeroRandom;
	var numeroRedondeado;
	var mensaje;

	numeroRandom = Math.random();

	numeroRandom = numeroRandom * 10 + 1;

	numeroRedondeado = Math.floor(numeroRandom);

	mensaje = "Numero random: " + numeroRandom + " Número redondeado: " + numeroRedondeado;

	alert(mensaje);


}