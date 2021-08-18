/* Saludo */
/* ¿Se les ocurre como podrían hacer esto en un doble bucle, es decir un while adentro de otro? */

let cont = 0;
while (cont < 3) {
  const nombre = prompt("Ingrese un nombre");
  if (nombre != "") {
    cont++;
    console.log("Hola " + nombre)
  }
}

//----------------------------------------------------------------------------------------------

// Saludo Mediante un prompt ingresar 10 nombres en una lista. 
// Armar un programa que salude a esas 10 personas con un 
// console.log 
// “Hola Juan” 
// “Hola María” 
// “Hola Pedro”

// ['Augusto', 'Elena', 'Yesenia', 'Martin', 'Diego', 'Roberto', 'Carlos', 'Lucas', 'Nancy', 'Alfredo'];


var acumulador = 0;
while (acumulador < 10) {
  var misNombres = prompt('Ingrese su nombre: ');
  misNombres.push(misNombres)
  acumulador++;
  console.log("Hola " + misNombres[acumulador]);
}

