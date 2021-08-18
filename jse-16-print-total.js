/* Suma de valores */

const numeros = [1, 2, 3, 5, 3, 76, 234, 1, 433, 21121, 5, 3, 2, 80, 40, 20];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i];
}
console.log("La suma total es: " + suma);
