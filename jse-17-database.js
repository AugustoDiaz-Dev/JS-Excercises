// Base de datos y caracteres extraños 
// Tenemos una página web que ofrece cursos para chicos y chicas mayores de 18 años. En el formulario de inscripción de pregunta por la edad del estudiante. Tanto el FrontEnd developer cómo el Backend developer no tomaron los recaudos necesarios para guardar datos limpios en la base de datos. Por tal motivo, ahora la base quedó con datos cómo los siguientes: 
// Tengo 18 años 
// 23
// 18 años 
// 20 años y 30 días 
// 21 años y un poco más 
// 27 años y medio 
// estoy llegando a los 18, me faltan unos meses 
// Tengo 17 pero en unos días cumplo 18 
// Armar una lista con todos estos valores, y armar un programa que devuelva solamente los primeros números contenidos.

/* Base de datos y caracteres extraños */

const edades = ["Tengo 18 años", "25", "18 años", "20 años y 30 días", "21 años y un poco más", "27 años y medio", "estoy llegando a los 18, me faltan unos meses", "Tengo 17 pero en unos días cumplo 18"];

const edadesParseadas = [];
for (let i = 0; i < edades.length; i++) {
  let edad = "";
  for (let j = 0; j < edades[i].length; j++) {
    if (!isNaN(parseInt(edades[i][j], 10))) {
      edad = edad + edades[i][j];
    }
  }
  edadesParseadas.push(edad);
}

for (let i = 0; i < edadesParseadas.length; i++) {
  edadesParseadas[i] = edadesParseadas[i].substring(0, 2);
}

console.log(edadesParseadas);

