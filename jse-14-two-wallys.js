// ¿Dónde está Wally II? 
// Dada esta lista:

const nombres = ["Augusto", "Pedro", "Wally", "Andrea", "Amelia", "Wally"];

// Mostrar los índices dónde está Wally

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] == 'Wally'){
        console.log('El índice donde está Wally es: ' + i);
    } 
}

//ESTE EJERCICIO PUEDE AYUDAR A LA COMPREHENSION DE COMO TRABAJA UN FOR.
const nombres = ["Augusto", "Pedro", "Wally", "Andrea", "Amelia", "Wally"]; 

for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
};//Devuelve todos los nombres, uno despues de otro.