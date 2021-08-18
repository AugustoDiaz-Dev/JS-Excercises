// Números pares 
// Dada una lista con números, recorrer la lista e indicar qué número es par y qué número es impar.

/* Solo Números pares */

const numeros = [1, 2, 3, 5, 3, 76, 234, 1, 433, 21121, 5, 3, 2, 80, 40, 20];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(`El número ${numeros[i]} es par`);
  }
}
/* Pares e impares */
const numeros = [1, 2, 3, 5, 3, 76, 234, 1, 433, 21121, 5, 3, 2, 80, 40, 20];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(`El número ${numeros[i]} es par`);
  } else {console.log(`El número ${numeros[i]} es impar`);}
}

