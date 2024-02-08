/**
 * Una fábrica produce 4 tallas de franelas cuyos precios son: 
Talla Precio (Bs.) [switch] 
S 50000 
M 55000 
L 60000 
XL 65000  
La fábrica tiene la siguiente política de descuento según la cantidad de unidades a comprar: 
[Operadores Logicos && || ! y operador ternario ? ] 
Entre 6 y 11 unidades tendrá un descuento del 5% 
Entre 12 y 24 unidades tendrá un descuento del 10% 
Más de 2 docenas el descuento será del 15%. 
Teniendo los siguientes datos de una operación de compra: nombre del cliente, cantidad de unidades a comprar y talla de franela seleccionada; deben generarse las siguientes salidas: nombre del cliente, cantidad de unidades solicitadas, monto del descuento (incluya el porcentaje) y monto a pagar. NOTA: En una operación de compra sólo se compra una sola talla.
 */

/**
 * Declaracion de variables
 */
var talla;
var cantidad;
var precioUnitario;
var subtotal;
var porcentajeDescuento;
var descuento;
var totalAPagar;

/**
 * Modulos del programa
 */
function validarPrompt(x, msg) {
    do {
        x = prompt(msg + ": ");
        if (x == "" || x == null) {
            alert("Debe ingresar un dato para poder continuar!!!");
        }else{
            return x;
        }
    } while (x == "" || x == null);
}

function validarDicotomia(x, a, b, message) {
    do {
        x = validarPrompt(x, message);
        x = x.toUpperCase();
        if (!(x == a || x == b)) {
            alert("Los valores esperados son: " + a + " o " + b);
        }else{
            return x;
        }
    } while ((x != a && x != b));

}

function validarNumberInRank(x, message, a, b) {
    do {
        x = validarPrompt(x, message);
        x = parseInt(x);
        if(isNaN(x)){
            alert("Se esperaba un numero")
        }
        if (x < a || x > b) {
            alert(`valor introducido fuera de rango (${a},${b})`);
        }else{
            return x;
        }
    } while ((x < a || x > b) || isNaN(x));
}

/**
 * Entradas
 */


//solicitamos la cantidad de franelas a comprar
cantidad = validarNumberInRank(cantidad, "Ingrese la cantidad", 0, 1000);

/**
 * Procesamiento de datos
 */
//convertimos a talla a Mayusculas
// talla = talla.toUpperCase();

//Solicitamos la talla
let tallaValida = false;
do {
    talla = validarPrompt(talla, "Ingrese la talla (S, M, L o XL)");
    talla = talla.toUpperCase();
    //Seleccionamos el precio unitario con el uso de switch
    switch (talla) {
        case "S":
            precioUnitario = 50000;
            tallaValida = true;
            break;
        case "M":
            precioUnitario = 55000;
            tallaValida = true;
            break;
        case "L":
            precioUnitario = 60000;
            tallaValida = true;
            break;
        case "XL":
            precioUnitario = 65000;
            tallaValida = true;
            break;
        default:
            alert("La talla ingresada es incorrecta");
            break;
    }
    console.log(tallaValida);
} while (tallaValida == false);

//obtener el porcentaje de descuento
// cantidad = parseInt(cantidad);
//logica de seleccion de porcentaje de descuento
cantidad >= 6 && cantidad <= 11 ? porcentajeDescuento = 5 : (cantidad >= 12 && cantidad <= 24 ? porcentajeDescuento = 10 : (cantidad > 24 ? porcentajeDescuento = 15 : porcentajeDescuento = 0));

//calcular el subtotal
subtotal = precioUnitario * cantidad;

//calcular el descuento
descuento = subtotal * porcentajeDescuento / 100;

//calcular el total a pagar
totalAPagar = subtotal - descuento;

/**
 * Salidas
 */
alert(`La talla de franelas seleccionada es: ${talla}, el precio unitario es de: ${precioUnitario}, la cantidad de franelas a comprar es: ${cantidad}, recibe un descuento de ${porcentajeDescuento}%. \n El subtotal a pagar es: ${subtotal}, el descuento obtenido es de: ${descuento}. \n El total a pagar es: ${totalAPagar}`);
