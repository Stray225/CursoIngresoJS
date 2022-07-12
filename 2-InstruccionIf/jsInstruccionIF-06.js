function mostrar()
{
	let edad = parseInt(txtIdEdad.value);
	var mensaje;

	if (edad >= 18){
		mensaje = ("Eres mayor de edad");
	}
	else if (edad >= 13 && edad <= 17){
		mensaje = ("Eres un adolescente");
	}
	else{
		mensaje = ("Eres un niño");
	}
}