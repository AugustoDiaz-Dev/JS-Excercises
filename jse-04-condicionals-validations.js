// EJERCICIOS CON CONDICIONALES

// EJERCICIO 1. Pedirle al usuario que ingrese un número y diga si el número es par o impar.
let number = Number(prompt("Ingrese un número: "));
if (number % 2 == 0) {
    alert("Su número es par.");
} else {
    alert("Su número es impar.");
}
//***NOTA: El parseo no es necesario del todo, pero trabajando con números es recomendable.

//VALIDACIÓN DEL EJERCICIO 1 
let number = Number(prompt("Ingrese un número: "));

if (typeof number != "number") {
    alert("Usted no ingreso un número.")
} else {
    if (number % 2 == 0) {
        alert("Su número es par.");
    } else {
        alert("Su número es impar.");
    }
}
//*** Esto se llama anidar condicionales.

//Otra opción de validación, usando el isNAN.
let number = Number(prompt("Ingrese un número: "));

if (isNaN(number)) {
    alert("Usted no ingreso un número.");
} else {
    if (number % 2 == 0) {
        alert("Su número es par.");
    } else {
        alert("Su número es impar.");
    }
}
//https://www.codecademy.com/forum_questions/511e91650ee9bc91f8000d91

//Otra validación pero con operadores lógicos.
let number = Number(prompt("Ingrese un número: "));

if (isNaN(number) || number == 0) {
    alert("Usted no ingreso un número.");
} else {
    if (number % 2 == 0) {
        alert("Su número es par.");
    } else {
        alert("Su número es impar.");
    }
}
//--------------------------------------------------------------------------------------------------
// EJERCICIO 2. Pedirle al usuario que ingrese dos números y diga si el primer número es divisible
// por el segundo.
let number1 = prompt("Ingrese un número: ");
let number2 = prompt("Ingrese otro número: ");
if (number1 % number2 == 0) {
    alert("Su primer número es divisible por el segundo.");
} else {
    alert("Su primer número NO es divisible por el segundo.");
}


//---------------------------------------------------------------------------------------------------
// EJERCICIO 3. Armar un programa que pida un usuario y una contraseña. Si la contraseña es
// correcta, dejarlo pasar, sino decirle que no puede entrar.

const pass = "123123";
let usuario = prompt("Ingrese su nombre de usuario: ");
let password = prompt("Ingrese su contraseña: ");
if (password === pass) {
    alert("Usted puede entrar.");
} else {
    alert("Usted NO puede entrar.");
}

// EJERCICIO 4. Entrada a un bar - sector VIP:
// a. Pedirle la edad al usuario
// b. Si tiene más de 18 años, pedirle la clave
// c. Si la clave es correcta, dejarlo pasar al sector vip
// d. Si la clave es incorrecta no puede pasar al sector vip
// e. Si tiene menos de 18 años no puede pasar.
// 5. Refactorizar el punto 3, usando el operador lógico &&

const clave = "1234";

let edad = Number(prompt("Ingrese su edad: "));

if (edad < 18) {
    prompt("Usted no puede pasar.");
} else {
    let userClave = prompt("Ingrese su clave: ");
    if (clave === userClave) {
        alert("Usted puede pasar al sector vip.");
    } else {
        alert("Usted NO puede pasar al sector vip.");
    }
}
//EL EJERCICIO ANTERIOR ANIDANDO MAS CONDICIONALES.
const clave = "1234";

let edad = Number(prompt("Ingrese su edad: "));

if (isNaN(edad) || edad == 0) {
    alert("Usted no ingresó un número.")
}
else if (edad < 18) {
    alert("Usted NO puede pasar porque es menor de edad.");
} else {
    let userClave = prompt("Ingrese su clave: ");
    if (clave != userClave) {
        alert("Usted NO puede pasar al sector vip, su clave no es correcta.");
    }
    else {
        alert("Usted puede acceder al sector vip.")
        let drink = prompt("Usted desea beber cerveza o alguna otra cosa?");
        if (drink === "cerveza") {
            alert("Usted es un grasa");}
            else {
                let snack = prompt("Usted puede seleccionar un snack gratis. ¿Desea chizitos o palmitos?");
            if (snack == "palmitos") {
                alert("Usted sabe lo que es ser un verdadero dandi.");
            } else {
                alert("Disfrute su noche.")
            }
                
            }

        }
    }



