/*/*Ejercicio 2 AGUSTIN PAZOS

Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base
a las ventas de sus productos.
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
a) El libro más barato de drama con su importe.
b) Del libro más caro, el título.
c) Porcentaje de libros de cada género
d) La cantidad de libros que sean de ciencia ficción y cuesten menos de $700.
*/


function mostrar()
{
	let tituloIngresado;
	let generoIngresado; // ciencia ficción – Drama – Terror
	let materialIngresado; // rústica – tapa dura
	let importe; // No pueden ser números negativos ni mayor a los 30000

	let libroMasBaratoDrama; // nombre con su importe
	let libroMasCaro; // mostrar el nombre
	let porcentajeLibrosGeneroDrama = 0;
	let porcentajeLibrosGeneroTerror = 0;
	let porcentajeLibrosGeneroCF = 0; 
	let cantLibrosCFBaratos = 0; // La cantidad de libros que sean de ciencia ficción y cuesten menos de $700
	let respuesta = "si";

	let banderaMasBaratoDrama = false;
	let banderaMasCaro = false;
	let importeMasCaro = 0;
	let importeMasBarato = 0;
	let contador = 0;
	let cantLibrosDrama = 0;
	let cantLibrosCF = 0;
	let cantLibrosTerror = 0;
	let importeMasBaratoDrama = 0;

	while(respuesta == "si")
	{
		tituloIngresado = prompt("Ingrese el titulo del libro: ");
		generoIngresado = prompt("Ingrese el genero del titulo: ");
		while(generoIngresado!="ciencia ficcion" && generoIngresado!="drama" && generoIngresado!="terror")
		{
			generoIngresado = prompt("REingrese el genero del titulo POR FAVOR: ");
		}
		materialIngresado = prompt("Ingrese el material del libro: ");
		while(materialIngresado!="rustica" && materialIngresado!="tapa dura")
		{
			materialIngresado = prompt("REingrese el material del libro POR FAVOR: ");
		}
		importe = parseFloat(prompt("Ingrese el importe del titulo: "));
		while(importe < 0 || importe > 30000)
		{
			importe = parseFloat(prompt("REingrese el importe del titulo POR FAVOR: "));
		}

		// mas caro
		if(importe > importeMasCaro || banderaMasCaro == false)
		{
			importeMasCaro = importe;
			libroMasCaro = tituloIngresado;
			importeMasBaratoDrama = importe; // 0 iq
			banderaMasCaro = true;
		}
		// mas barato de drama con importe

		if(generoIngresado == "drama" && importe < importeMasBarato || banderaMasBaratoDrama == false)
		{
			importeMasBarato = importe;
			libroMasBaratoDrama = tituloIngresado;
			banderaMasBaratoDrama = true;
		}
		//  La cantidad de libros que sean de ciencia ficción y cuesten menos de $700
		if(generoIngresado == "ciencia ficcion" && importe < 700)
		{
			cantLibrosCFBaratos++
		}

		//  Porcentaje de libros de cada género
		if(generoIngresado == "drama")
		{
			cantLibrosDrama++
		}
		else if (generoIngresado == "terror")
		{
			cantLibrosTerror++;
		}
		else
		{
			cantLibrosCF++;
		}

		contador++;
		respuesta = prompt("Quiere volver a ingresar un titulo nuevo? si/no: ");
	}
	porcentajeLibrosGeneroDrama = 100 * (cantLibrosDrama / contador);
	porcentajeLibrosGeneroTerror = 100 * (cantLibrosTerror / contador);
	porcentajeLibrosGeneroCF = 100 * (cantLibrosCF / contador);
	
	document.write("El libro más barato de drama con su importe: " + libroMasBaratoDrama + " y su importe es de " + importeMasBaratoDrama + "<br>");
	document.write("Del libro más caro, el título: " + libroMasCaro + "<br>");
	document.write("La cantidad de libros que sean de ciencia ficción y cuesten menos de $700: " + cantLibrosCFBaratos + "<br>");

	document.write("Porcentaje de libros de cada género drama: " + porcentajeLibrosGeneroDrama + "%<br>");
	document.write("Porcentaje de libros de cada género terror: " + porcentajeLibrosGeneroTerror + "%<br>");
	document.write("Porcentaje de libros de cada género CF: " + porcentajeLibrosGeneroCF + "%<br>");

}