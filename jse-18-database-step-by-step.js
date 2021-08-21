const edades = ["Tengo 18 años", "25", "18 años", "20 años y 30 días", "21 años y un poco más", "27 años y medio", "estoy llegando a los 18, me faltan unos meses", "Tengo 17 pero en unos días cumplo 18"];

/* 1. Simplemente recorro un array */

const edadesParseadas = [];
for (let i = 0; i < edades.length; i++) {
  edades[i];
  // "Tengo 18 años"
  // "25"
  // "18 años"
  // "20 años y 30 días"
  // ...
}

/* 2. Simplemente recorro un string */
const valor = "Tengo 18 años";
for (let j = 0; j < valor.length; j++) {
  valor[j]
  // T
  // e
  // n
  // g
  // o
  // 
  // 1
  // 8
  //
  // a
  // ñ
  // o
  // s
}

/* 3. Detecto si cada string es un número o no */
const valor = "Tengo 18 años";
for (let j = 0; j < valor.length; j++) {
  if (isNaN(parseInt(valor[j], 10))) {

  }

  // parseInt(valor[j], 10) = ¿Es un número entero?
  // Esto devuelve un number, o NaN 

  // isNaN(parseInt(valor[j], 10))
  // Si es un Nan, hago algo. Si es un número, no hago nada.
  // Invierto la lógica: Si es un Nan, no hago nada. Si es un número, hago algo


  // T ¿Es un número? -> No -> No hago nada
  // e ¿Es un número? -> No -> No hago nada
  // n ¿Es un número? -> No -> No hago nada
  // g ¿Es un número? -> No -> No hago nada
  // o ¿Es un número? -> No -> No hago nada
  // 
  // 1 ¿Es un número? -> Sí -> Hago algo
  // 8 ¿Es un número? -> Sí -> Hago algo
  //
  // a ¿Es un número? -> No -> No hago nada
  // ñ ¿Es un número? -> No -> No hago nada
  // o ¿Es un número? -> No -> No hago nada
  // s ¿Es un número? -> No -> No hago nada
}

/* 4. Si es un número, lo guardo y voy concatenándolo en una variable */
const valor = "Tengo 18 años";
let edad = "";
for (let j = 0; j < valor.length; j++) {
  if (!isNaN(parseInt(valor[j], 10))) {
    edad = edad + valor[j];
    // edad = "1"
    // edad = 1 + 8 // Edad 18
  }
}

/* 5. Uno todo */
const edadesParseadas = [];
for (let i = 0; i < edades.length; i++) {
  let edad = "";
  for (let j = 0; j < edades[i].length; j++) {
    if (!isNaN(parseInt(edades[i][j], 10))) {
      edad = edad + edades[i][j];
    }
  }
  edadesParseadas.push(edad); // [18, 25, 2030]
}


/* 6. Elimino los úlimos 2 caracteres. Empiezo en el 0 y cuento 2.  */
for (let i = 0; i < edadesParseadas.length; i++) {
  edadesParseadas[i] = edadesParseadas[i].substring(0, 2);
}

console.log(edadesParseadas);