// Dada una lista: 
// 1. Imprimir el último valor. 
// 2. Agregar una nueva mascota al final del array utilizando un método. 
// 3. Imprimir el último valor. 
// a. Si tuviste que modificar el punto 1, se puede mejorar pensando en usar el método .length.

const mascotas = ["Gato", "Perro", "Iguana"];

console.log(mascotas[2]);//Iguana
mascotas.push('Hamster');
console.log (mascotas[3]); //Hamster

console.log(mascotas [mascotas.length - 1]); //Nos da el valor del ultimo elemento del array.

//¿Cúanto da mascotas.length?
//Nos da 4

//¿Cuánto da mascotas en 4?
//Nos da undefined

//¿Cúanto da mascotas en 3?
//Nos da Hamster

//[Mascotas.length - 1] se usa para obtener el último valor del array.