/**
 * Obtener informacion
 */
let nombre;
let talla;
let cantidad;
let precio;
let porcentajeDescuento;
let validadorNombre = true;
let validadorCantidad = true;

while (validadorNombre) {
    nombre = prompt("Ingrese su nombre: ")
    switch (nombre) {
        case null:
            alert("Debes indicar tu nombre");
            break;
        case "":
            alert("Debes responde con informacion");
            break;
        default:
            nombre = nombre.toUpperCase();
            validadorNombre = false;
            break;
    }
}

do {
    talla = prompt("Que talla desea (S, M, L, XL): ")
    switch (talla) {
        case null:
            alert("Debes indicar una talla");
            validadorTalla = true;
            break;
        case "":
            alert("Debes responde con informacion");
            validadorTalla = true;
            break;
        default:
            talla = talla.toUpperCase();
            switch (talla) {
                case "S":
                    precio = 50000;
                    validadorTalla = false;
                    break;
                case "M":
                    precio = 55000;
                    validadorTalla = false;
                    break;
                case "L":
                    precio = 60000;
                    validadorTalla = false;
                    break;
                case "XL":
                    precio = 65000;
                    validadorTalla = false;
                    break;
                default:
                    alert("Indico una talla invalida!");
                    validadorTalla = true;
                    break;
            }
            break;
    }
} while (validadorTalla);

while (validadorCantidad) {
    cantidad = prompt("Indique la cantidad a llevar: ");
    switch (cantidad) {
        case null:
            alert("Debes indicar cantidad");
            break;
        case "":
            alert("Debes responde con informacion");
            break;
        default:
            cantidad = parseInt(cantidad);
            if (isNaN(cantidad)) {
               alert("Debe indicar un numero");
            } else {
                if (cantidad < 0){
                    alert("La cantidad Debe ser positivo");
                } else {
                    validadorCantidad = false;
                    if(cantidad < 6){
                        porcentajeDescuento = 0
                    }
                    if(cantidad >= 6 && cantidad <= 11){
                        porcentajeDescuento = 5;
                    }
                    if (cantidad >= 12 && cantidad <= 24) {
                        porcentajeDescuento = 10;
                    }
                    if (cantidad > 24) {
                        porcentajeDescuento = 15;
                    }
                }
            }
            break;
    }
}

//Calculo el subtotal
let subtotal = precio * cantidad;
let descuento = subtotal * porcentajeDescuento / 100;
let total = subtotal - descuento;

/**
 * Informamos
 */
alert(`Estimado ${nombre}, ha comprado ${cantidad} unidades de la talla ${talla}; el subtotal a pagar es: ${subtotal}, aplica un descuento de: ${porcentajeDescuento}%, equivalente a: ${descuento}. Total a pagar: ${total}`);