//El objeto utiliza llaves, tiene que tener una key y un value. Todos los valores se separan con comas salvo el ultimo.

let nombres = ["Juan", "Pedro", "María", "Sofía"];
//nombres[2]; // María

//Objetos
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30
}; //Key + value

//Brackets notation
console.log(persona["nombre"]);
console.log(persona["apellido"]);
console.log(persona["edad"]);

//Dot notation. Es mas usado que bracket notation.
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

//PLAYGROUND 1. 
/*Un blog se compone de posteos.
los posteos por lo general tienen: 
Id: number,
Titulo: string, 
Autor: string,
Categoria: string
Armar un objeto que contenta todas estas propiedades y hacer un console.log de cada propiedad usando DOT NOTATION.
*/

let post = {
  id: 1,
  titulo: "Aprendiendo Processing",
  autor: "Daniel Shiffmann",
  categoria: "Programación",
}

post.titulo = "Lo que sea"; //Va a SOBRESCRIBIR la variable título

console.log(post.id);
console.log(post.titulo);
console.log(post.autor);
console.log(post.categoria);
console.log(post.fecha); // undefined

post.fecha = "26/10/2020";//Va a AGREGAR la fecha
console.log(post);


// [1,2,3,4]
// ["Juan", "Sofía", "Pepe"]
// [{}, {}, {}];

// Array de objetos
const personas = [
  {
    nombre: "Augusto",
    edad: 38
  },
  {
    nombre: "Elena",
    edad: 37
  }
];
// Acceder a las propiedades de un array de objetos. Con el primero accedo al objeto y con el segundo a un valor del mismo.
console.log(personas[0]);
/**
  {
    nombre: "Augusto",
    edad: 38
  },
 */
console.log(personas[1].nombre); // "Elena"