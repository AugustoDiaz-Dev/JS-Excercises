/* Salón de Fiestas */

const invitadxs = ["Juan Perez", "Sofía Venti", "Lucía Quart", "Pedro Terdín"];
let respuesta = prompt("¿Qué desea hacer? 1: Ingresar, 2: Retirar, 3: Salir");
const personasEnElSalon = [];

while (respuesta != "3") {
  if (respuesta == 1) {
    const ingresante = prompt("Ingrese nombre y apellido");
    if (invitadxs.indexOf(ingresante) != -1) {
      if (personasEnElSalon.indexOf(ingresante) != -1) {
        alert("Esta persona ya ingresó");
      } else {
        personasEnElSalon.push(ingresante);
      }
    } else {
      alert("Esta persona no está en la lista");
    }
    console.log('Personas en el salón', personasEnElSalon);
  }

  if (respuesta == 2) {
    const retiro = prompt("Ingrese nombre y apellido");
    if (personasEnElSalon.indexOf(retiro) != -1) {
      const indice = personasEnElSalon.indexOf(retiro);
      personasEnElSalon.splice(indice, 1);
    } else {
      alert("Esta persona no está en el salón");
    }
    console.log('Personas en el salón', personasEnElSalon);
  }
  respuesta = prompt("¿Qué desea hacer? 1: Ingresar, 2: Retirar, 3: Salir");
}
console.log("Usted Salió");
