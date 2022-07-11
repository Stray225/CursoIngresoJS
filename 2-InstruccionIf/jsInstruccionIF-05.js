function mostrar()
{
	let edad = parseInt(txtIdEdad.value);
	if (edad < 13 || edad > 17){
		alert("NO Sos un adolescente");
	}
}