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
ombre del cliente, cantidad de unidades a comprar y talla de franela seleccionada; deben generarse las siguientes salidas: nombre del cliente, cantidad de unidades solicitadas, monto del descuento (incluya el porcentaje) y monto a pagar. PREMISA: En una operación de compra sólo se compra una sola talla.
 */
//Entradas, Proceso y Salidas (EPS)
//Variables
let nombre, unidades, talla, precioUnitario, porcDescuento, subtotal, descuento, montoAPagar;

//Entradas
do {
    nombre = prompt("Ingrese su nombre:");
    //comunico un mensaje en caso de error.
    if (nombre == "" || nombre == null) {
        alert("Debe ingresar un valor y no debe cancelar")
    }
} while (nombre == "" || nombre == null);

alert(`Bienvendio ${nombre} a nuestra tienda de franelas`);

do {
    cantidad = prompt("Ingrese la cantidad de unidades a comprar:");
    if (cantidad == "" || cantidad == null) {
        alert("Debes ingresar un valor de cantidad")
    } else {
        cantidad = parseInt(cantidad);
    }
    //convertimos el valor obtenido
    if (isNaN(cantidad)) {
        alert("Debe ingresar un valor de cantidad numerico");
    }

} while (cantidad == "" || cantidad == null || isNaN(cantidad));

var auxValidateTalla = false;
do {
    auxValidateTalla = false;
    talla = prompt("Ingrese la talla (S, M, L, XL):");
    talla = talla.toUpperCase();
    switch (talla) {
        case "S":
            precioUnitario = 50000;
            break;
        case "M":
            precioUnitario = 55000;
            break;
        case "L":
            precioUnitario = 60000;
            break;
        case "XL":
            precioUnitario = 65000;
            break;
        default:
            alert(`ERROR: Debes ingresar una talla valida (S, M, L, XL) \n El valor ingresado fue: ${talla}`);
            auxValidateTalla = true;
            break;
    }
} while (talla == "" || talla == null || auxValidateTalla);

if (cantidad >= 6 && cantidad <= 11) {
    porcDescuento = 5;
}else if (cantidad >= 12 && cantidad <= 24) {
    porcDescuento = 10;
}else if (cantidad > 24) {
    porcDescuento = 15;
}

subtotal = cantidad * precioUnitario;

descuento = subtotal * porcDescuento / 100;

montoAPagar = subtotal - descuento;

/**
 * Salidas
 */
alert(`La cantidad de productos a comprar es: ${cantidad} \n La talla de los productos es: ${talla} \n El precio unitario de los productos es: $${precioUnitario} \n El subtotal de la compra es: $${subtotal} \n  El porcentaje de descuento aplicado es: ${porcDescuento}%\n El descuento aplicado es: $${descuento} \n El monto a pagar es: $${montoAPagar}`);
