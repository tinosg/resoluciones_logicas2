//Funciones: bloque de código que ejecuta una tarea específica
// Estructura de una función

function arbitro(tarjetas) {

    //1. Saludar a los jugadores
    console.log("Buenas tardes, soy el árbitro del partido.");

    //2. Sacar una tarjeta roja a un jugador
    console.log("Usted tiene una tarjeta roja, se retira del partido." + tarjetas);

    // 3. Hacer sonar el silbato
    console.log("¡Silbato sonando! " + silbato);

}

// Creamos la variable tarjetas y le asignamos un valor
let tarjetas = "roja";

// Creamos la variable silbato y le asignamos un valor
let silbato = "pitido";

// Llamamos a la función arbitro y le pasamos la variable tarjetas
arbitro(tarjetas);  



