function mostrar()
{
	let edad = parseInt(txtIdEdad.value);
	let estadoCivill = estadoCivil.value;
	console.log(estadoCivill);

	if (edad <= 17 && estadoCivill == Soltero);{
		alert("Es muy pequeño para NO ser soltero");
	}
}
