/* Lista infinita. */
/* ¿Se les ocurre como validar que no ingrese texto vacío? */

const productos = [];
while (productos.length < 5) {
  const producto = prompt("Ingrese un producto");
  productos.push(producto);
}
console.log(productos);

//MDN info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
//The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3
//EXAMPLE
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}