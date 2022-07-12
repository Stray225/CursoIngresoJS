function mostrar()
{
	var numeroRandom;
	var numeroRedondeado;
	var mensaje;

	numeroRandom = Math.random();

	numeroRandom = numeroRandom * 10 + 1;

	numeroRedondeado = Math.floor(numeroRandom);

	if (numeroRedondeado == 10 || numeroRedondeado == 9){
		mensaje = mensaje + "Excelente";
	}
	else if(numeroRedondeado >= 4){
		mensaje = mensaje + "Aprobado";
	}
	else{
		mensaje = mensaje + "NT COMO UNA CASA CHAVAL";
	}
	alert("Su nota es: " + numeroRedondeado + mensaje);
}