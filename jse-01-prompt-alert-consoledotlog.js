//Imprimo en pantalla
console.log("Funciona todo ok!");

// prompt("Ingrese su nombre");

//Muestro el nombre del usuario como pop-up
let nombre = prompt("Ingrese su nombre");
alert("Hola " + nombre);

//Muestra el tipo de dato, en este caso va a ser string.
console.log(typeof nombre);

let edad = prompt("Ingrese su edad"); //Si el usuario ingresa 38
edad = Number(38);
edad = Number(edad);
console.log(typeof edad); //Devuelve Number

//Playground 2 
let edad = prompt("¿Cuál es tu edad?");
console.log("En 10 años vas a tener " + (edad + 10) + "años");
console.log(typeof edad);
let parsedEdad = parseInt(edad, 10);//Se puede hacer también sin el 10 para parsear, por defecto toma base 10.
console.log("En 10 años vas a tener " + (parsedEdad + 10) + "años");