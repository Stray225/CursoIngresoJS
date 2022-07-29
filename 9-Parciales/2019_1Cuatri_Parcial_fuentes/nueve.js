/* Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. */

function mostrar()
{
    let paisIngresado;
    let cantHabitantes = 0; // en millones 1 - 7000 (validar)
    let tempMinima = 0; // -50 a 50

    let cantTempsPares = 0;
    let paisMenosHabitantes = 0;
    let cantPaisesCalientes = 0; // mayores a 40
    let promedioHabitantesPaises = 0; // promedio entre todos los paises
    let sumaHabitantes = 0;
    let tempPaisMasFrio = 0; // nombre del pais y temperatura
    let contandor = 0;
    let banderaPaisMenorHabitantes = false;
    let banderaPaisMasFrio = false;
    let nombrePaisMasFrio;
    let nombrePaisMenorHabitantes;

    let respuesta = "si";

    while(respuesta == "si")
    {
        paisIngresado = prompt("Ingrese un pais: ");
        cantHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millon: "));
        while(cantHabitantes < 1 || cantHabitantes > 7000)
        {
            cantHabitantes = parseInt(prompt("REEEingrese la cantidad de habitantes en millon: "));
        }
        tempMinima = parseInt(prompt("Ingrese la temperatura minima de su territorio: "));
        while(tempMinima < -50 || tempMinima > 50)
        {
            tempMinima = parseInt(prompt("REEEingrese la temperatura minima de su territorio: "));
        }

        contandor++;

        if ((tempMinima%2) == 0) // temps pares
        {
            cantTempsPares++;
        }

        if (tempMinima > 40) // paises calientes
        {
            cantPaisesCalientes++;
        }

        sumaHabitantes = cantHabitantes + sumaHabitantes;

        if( cantHabitantes<paisMenosHabitantes  || banderaPaisMenorHabitantes == false)
        {
            paisMenosHabitantes = cantHabitantes
            banderaPaisMenorHabitantes = true;
            nombrePaisMenorHabitantes = paisIngresado;
        }

        if( tempMinima<tempPaisMasFrio  || banderaPaisMasFrio == false)
        {
            tempPaisMasFrio = tempMinima;
            banderaPaisMasFrio = true;
            nombrePaisMasFrio = paisIngresado;
        }

        respuesta = prompt("Desea seguir ingresando informacion?: ");
    }
    promedioHabitantesPaises = sumaHabitantes / contandor;


    document.write("Cantidad de temp pares " + cantTempsPares + "<br>");
    document.write("Nombre del pais con menos habitantes " + nombrePaisMenorHabitantes + "<br>");
    document.write("Cantidad de paises >40 grados " + cantPaisesCalientes + "<br>");
    document.write("Promedio de todos los habitantes de todos los paises " + promedioHabitantesPaises + "<br>");
    document.write("Temperatura minima ingresada " + tempPaisMasFrio + " y el pais corresponde a " + nombrePaisMasFrio + "<br>");


}
