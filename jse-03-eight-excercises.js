// EJERCICIO 01
// Armar un programa que:
// - Pregunte el nombre del usuario
// - Guardar este valor en una variable
// - Pregunte el apellido del usuario
// - Guardar este valor en una variable
// - Mostrar el resultado en un pop up
// Resultado
// Aparezca un pop-up diciendo “Hola [nombre] [apellido]. "Bienvenido a Javascript”

const nombre = prompt("Ingrese su nombre: ");
const apellido = prompt("Ingrese su apellido: ");
alert("Hola " + nombre +" "+ apellido + ". " + "¡Bienvenido a JavaScript!");
//--------------------------------------------------------------------------------------------------

// EJERCICIO 02
// Armar un programa que:
// - Pida al usuario que ingrese un número
// - Guardar este valor en una variable
// - Pida al usuario que ingrese un nuevo número
// - Guardar este valor en una variable
// - Realice la suma de ambos números
// - Lo imprima en pantalla
// Resultado
// Imprimir por pantalla la suma de ambos números.

const num1 = prompt("Ingrese un número: ");
const num2 = prompt("Ingrese otro número: ");
const resultado = Number(num1) + Number(num2);
console.log(resultado);
alert("La suma de los dos números es: " + resultado + ".");
//-----------------------------------------------------------------------------------------------------
        
// EJERCICIO 03
// Armar un programa que:
// - Pida al usuario que ingrese la palabra “Vertical”
// - Guardar este valor en una variable
// - Lo imprima de manera VERTICAL
// ***En el apunte falta la explicacion de los [] para poder hacer el ejercicio numero 3

const vertical = prompt("Ingrese la palabra 'vertical': ");
console.log(vertical[0]);
console.log(vertical[1]);
console.log(vertical[2]);
console.log(vertical[3]);
console.log(vertical[4]);
console.log(vertical[5]);
console.log(vertical[6]);
console.log(vertical[7]);
//--------------------------------------------------------------------------------------------------------

// EJERCICIO 04
// - Crear una variable nombre y darle un valor;
// - Crear una variable nuevoNombre y darle el valor de la variable nombre .
// - Imprimir en pantalla el valor de nombre, ¿Qué valor da?
// Nota: Este programa debe funcionar siempre que cambie el valor de nombre.

let nombre = "Augusto";
let nuevoNombre = nombre;
console.log(nombre);
//-------------------------------------------------------------------------------------------------------

// EJERCICIO 05
// Armar un programa que:
// - Pregunte el nombre de la mascota del usuario
// - Guardar este valor en una variable
// - Imprimir el resultado en mayúscula.

let mascota = prompt("Ingrese el nombre de su mascota: ");
alert(mascota.toUpperCase());
//----------------------------------------------------------------------------------------------------

// EJERCICIO 06
// Armar un programa que:
// - Pregunte la edad del usuario
// - Guardar este valor en una variable
// - Pregunte la cantidad de series promedio que ve por año
// - Guardar este valor en una variable
// - Preguntarle la cantidad de series promedio que ya vió
// - Guardar este valor en una variable
// - Mostrarle un resultado con la cantidad de series promedio que va a haber visto de
// acá a 10 años.

let edad = prompt("Ingrese su edad");
let edadMasDiez = Number(edad) + 10;
let series = prompt("Ingrese la cantidad de series promedio que ve por año");
let seriesVistas = prompt("Ingrese la cantidad de series promedio que usted ya vió");
let resultado = Number(series) *10 + Number(seriesVistas);

alert("A los "+ edadMasDiez + " años usted habrá visto " + resultado + " series.");
//---------------------------------------------------------------------------------------------------

// EJERCICIO 08
// Armar un programa que:
// - Tenga una constante con un precio
// - Preguntarle al usuario cuántas unidades va a llevar
// - Guardar este valor en una variable
// - Decir el monto total que debe pagar.

const precio = 150;
let unidades = Number(prompt("Ingrese la cantidad de unidades que va a llevar: "));
let precioFinal = precio * unidades;
alert("El monto total de su compra es de " + precioFinal + " pesos.");
