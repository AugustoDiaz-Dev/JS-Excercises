// // Cantidad de caracteres 
// // Cuando trabajamos del lado del front-end, lo más seguro que pase es que recibamos el contenido de algún servicio. 
// ¿Qué quiere decir esto? 
// Que lo que hay dentro del <h1> o dentro de los <p> no lo escribimos nosotros, sino que viene de una base de datos que cargó la gente de contenido. Nuestro trabajo es ser desarrolladores, no contenidistas. Resulta que armamos un diseño de cards, muy similar al de despegar.com, pero tenemos la limitación de que los <h2> que hay dentro de las cards solamente pueden tener hasta 20 caracteres, sino rompe nuestro diseño. Armar un programa que contenga la lista de los destinos más populares (los nombres de los lugares). Si alguno de estos lugares tiene más de 20 caracteres, arrojar un error diciendo “Se excedió la cantidad de caracteres para el título de las cards”.

const lugares = ["San carlos de Bariloche", "Iruya", "El bolsón", "Santiago de Chile", "Calamuchita"];

for (let i = 0; i < lugares.length; i++) {
  if (lugares[i].length > 20) {
    console.error(`Límite de caracteres excedidos para el título ${lugares[i]}`);
  }
}
//-------------------------------------------------------

//Otra version
const lugares = ["Mar del plata", "Marcelino Escalada", "San Carlos de Bariloche"]; 

for (let i = 0; i < lugares.length; i++)
{ if (lugares[i].length > 20) {console.error("Usted ha sobrepasado el limite de caracteres permitidos")} 
else {console.log(lugares[i])}};

//Recorrer con un FOR el array

for (let i=0; i< lugares.length; i++){
  console.log(lugares[i])
}

//Recorrer con un WHILE el array 

let acumulador = 0; 
while (acumulador < lugares.length) { 
  console.log(lugares[acumulador]), acumulador++
}