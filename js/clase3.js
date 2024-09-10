/**
 * Declaracion de variables
 */
var nombre;
var edad;
var fechaNac;
var diaNac;
var mesNac;
var anioNac;
var sexo;

/**
 * Entradas
 */
// nombre = prompt("Ingrese su nombre");
// edad = prompt("Ingrese su edad");
// diaNac = prompt("Indique su dia de nacimiento");
// mesNac = prompt("Indique su mes de nacimiento");
// anioNac = prompt("Indique su anio de nacimiento");
// sexo = prompt("Ingrese su sexo");

/**
 * Procesamiento de la informacion
 */
// edad = parseInt(edad);
// diaNac = parseInt(diaNac);
// mesNac = parseInt(mesNac);
// anioNac = parseInt(anioNac);

/**
 * Verificar informacion
 */

// if (isNaN(edad)) {
//     alert("El valor de edad ingresado es incorrecto")
// }
// if (isNaN(diaNac)) {
//     alert("El valor de diaNac ingresado es incorrecto")
// }
// if (isNaN(mesNac)) {
//     alert("El valor de mesNac ingresado es incorrecto")
// }
// if (isNaN(anioNac)) {
//     alert("El valor de anioNac ingresado es incorrecto")
// }

fechaNac = diaNac + "/" + mesNac + "/" + anioNac;

/**
 * Salidas
 */
// alert("Su nombre es: " + nombre + ", su edad es: " + edad + ", su fecha de nacimiento es: " + fechaNac + ", su sexo es: " + sexo);

/********
 * 
 * 
 * S: 50000
 * M: 55000
 * L: 60000
 * XL: 65000
 */
var talla; //string, S M L XL
var precioUnitario
var unidades;
var porcDescuento;
var subtotal;
var total;
var descuento;

/**
 * Inicializacion de las variables
 */
porcDescuento = 0;

/**
 * Entradas
 */
do {
    nombre = prompt("Ingrese su nombre");
    if(nombre == "" || nombre == null){
        alert("Debes ingresar un valor");
    }
} while (nombre == "" || nombre == null);

//determinar las unidades
do {
    unidades = parseInt(prompt("Ingrese la cantidad de franelas a llevar"));
    if (isNaN(unidades)) {
        alert("Debe ingresar un numero valido");
    }
} while (isNaN(unidades));

/**
 * Procesos
 */
//Determinacion del precio unitario
//Obtener la talla
let tallaIncorrecta = true;
do {
    talla = prompt("Ingrese la talla de franelas a llevar").toUpperCase();
    if(talla == "" || talla == null){
        alert("Debes ingresar un valor de talla");
    }
    switch (talla) {
        case "S":
            precioUnitario = 50000;
            tallaIncorrecta = false
            break;
        case "M":
            precioUnitario = 55000;
            tallaIncorrecta = false
            break;
        case "L":
            precioUnitario = 60000;
            tallaIncorrecta = false
            break;
        case "XL":
            precioUnitario = 65000;
            tallaIncorrecta = false
            break;
    
        default:
            alert("Talla ingresada incorrecta.");
            break;
    }
} while ((talla == "" || talla == null) || tallaIncorrecta);
//Determinacion del porcentaje de descuento
(unidades >= 6 && unidades <= 11 ) ? porcDescuento = 5 : null;
(unidades >= 12 && unidades <= 24 ) ? porcDescuento = 10 : null;
(unidades > 24 ) ? porcDescuento = 15 : null;

//Determinacion del subtotal
subtotal = precioUnitario * unidades;

//Determinacion del descuento
descuento = subtotal * porcDescuento / 100;

//Determinacion del total
total = subtotal - descuento;

/**
 * Salidas
 */
alert("Estimado " + nombre + ", ha comprado una cantidad " + unidades + " de franelas de la talla " + talla + " cuyo precio unitario es: " + precioUnitario + " por ende el subtotal a pagar es de: " + subtotal + " el porcentaje de descuento es de " + porcDescuento + "%, de lo cual el descuento del subtotal es: " + descuento + " por ende, el total a pagar es: " + total);

for (let i = 5; i > 0; i--) {
    alert(`i: ${i-1}`);
}













