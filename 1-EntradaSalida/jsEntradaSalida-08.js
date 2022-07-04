/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/


function SacarResto()
{
	let resto;
	let	primerNum;
	let segundoNum;

	primerNum = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	segundoNum = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = primerNum % segundoNum;
	alert("El resto es de " + resto);	

}
