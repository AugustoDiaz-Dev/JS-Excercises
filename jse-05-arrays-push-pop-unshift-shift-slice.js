//Arrays

//--------------------------------------------------
let nombre = ["Augusto", "Elena", "Yesenia"];

//Si quiero hacer una lista puedo usar un array.
//----------------------------------------------------------
let arrayMezclado = ["Augusto", 38, true, undefined, null];

//Un array puede contener vavores de diversos tipos.
//-------------------------------------------------------------
let nombresFamilia = ["Augusto", "Elena", "Yesenia", "Eugenio", "Svetlana"];

nombresFamilia[0];//"Augusto"
nombresFamilia[5];//undefined

console.log(nombresFamilia[2]);//Yesenia
//-------------------------------------------------------------
let nombres = ["Augusto", "Diego", "Lucas"];

console.log(nombres.length);

nombres.push("Carlos");
const nombresEliminados = nombres.pop();
console.log(nombres);
console.log(nombresEliminados);  

nombres.unshift("Jose");
nombres.shift();
console.log(indexOf("Diego"));

//Push y pop. Creaan un nuevo item al final y lo borran, respectivamente. Unshift y shift crean un nuevo item al comienzo y borran el mismo, respectivamente.

let misNombres = ["Pedro", "Pabla", "Natali", "Francisco", "Pablo"];

// let nombres2 = nombres;//Se muta porque hace referencia al primer array.
let nombres2 = misNombres.slice();//Hace una copia del array y por lo tanto no toma la modificacion. 

nombres2.push("Augusto");

console.log("Mis nombres: " + misNombres);
console.log("Nombres2: " + nombres2);

//---------------------------------
let edad = 38;
let edad2 = edad;

edad2++;//El doble ++ suma de a uno.
console.log("Edad: " +  edad);
console.log("Edad2: " + edad2);