// Cuarentena y descuentos 
// En esta cuarentena los pedidos online incrementaron en gran medida. Rappi, Glovo, Carrefour, Coto y todas las tiendas que tienen un e-commerce comenzaron a lanzar descuentos para captar más clientes. Ustedes como desarrolladores están a cargo del carrito de compras una vez que el usuario ingresó todos los productos a comprar. El equipo de Marketing, junto al equipo de ventas decide lanzar esta estrategia de promociones: Existen 3 nuevos vouchers - DTO20 aplica el 20% de descuento sobre el total - DTO15 aplica el 15% de descuento sobre el total - DTO10 aplica el 10% de descuento sobre el total Partiendo de una lista (array) de 7 productos en el carrito y otra lista (array) con los precios de los 7 productos. Hacer un programa que: 1. Muestre el nombre de los productos y el precio correspondiente a. Utilizar console log 2. Muestre el precio final a. Precio final = x 3
// 3. Pida al usuario que ingrese un código de descuento a. Usas prompt 4. Mostrar el nuevo precio final.

/* Cuarentena y descuentos Versión 1 */

/*
const productos = ["Harina", "Papas Lays", "Huevos", "Twistos", "Leche", "Levité", "Sal"];
const precios = [150, 170, 85, 120, 60, 160, 50];
let precioFinal = 0;

for (let i = 0; i < productos.length; i++) {
  console.log(`Producto ${productos[i]}. Precio: ${precios[i]}`);
  precioFinal = precioFinal + precios[i];
}
console.log(`El precio final sin el descuento es de ${precioFinal}`);

const codigo = prompt("Ingrese su código de descuento");

let dto = 0;
if (codigo === "DTO10") {
  dto = precioFinal * 10 / 100;
  console.log(`El descuento es de ${dto}. Precio Final ${precioFinal - dto}`);
} else if (codigo === "DTO15") {
  dto = precioFinal * 15 / 100;
  console.log(`El descuento es de ${dto}. Precio Final ${precioFinal - dto}`);
} else if (codigo === "DTO20") {
  dto = precioFinal * 20 / 100;
  console.log(`El descuento es de ${dto}. Precio Final ${precioFinal - dto}`);
} else {
  console.log("El código de descuento no es válido")
}
*/

//----------------------------------------------------------------------------------------


/* Cuarentena y descuentos Versión 2 */
/*
const productos = ["Harina", "Papas Lays", "Huevos", "Twistos", "Leche", "Levité", "Sal"];
const precios = [150, 170, 85, 120, 60, 160, 50];
const descuentos = ["DTO10", "DTO15", "DTO20"];

let precioFinal = 0;
let codigo = "";
let dto = 0;

for (let i = 0; i < productos.length; i++) {
  console.log(`Producto ${productos[i]}. Precio: ${precios[i]}`);
  precioFinal = precioFinal + precios[i];
}

while (codigo === "") {
  codigo = prompt("Ingrese un código").toUpperCase();
}

if (descuentos.indexOf(codigo) >= 0) {
  dto = precioFinal * codigo.substring(3) / 100;
  console.log(`El descuento es de ${dto}. Precio Final ${precioFinal - dto}`);
} else {
  console.log(`Descuento no válido.  Precio Final ${precioFinal - dto}`);
}
*/
