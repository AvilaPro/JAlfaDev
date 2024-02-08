//Declaracion de variables
var precio;
var cantidad;
var subtotal;
var porcentajeIva;
var iva;
var total;
//Inicializacion de variables
precio = (Math.random() * (100 - 10) + 10).toFixed(0);
cantidad = Math.ceil(Math.random() * 10);
porcentajeIva = 16;

/**
 * Operaciones
 */
subtotal = precio * cantidad;

iva = subtotal * porcentajeIva / 100;

total = subtotal + iva;

/**
 * Salidas
 */

console.log(`El precio unitario del producto es: ${precio}`);
console.log(`La cantidad a llevar del producto es: ${cantidad}`);
console.log(`El subtotal a pagar es: ${subtotal}`);
console.log(`El iva es: ${iva}`);
console.log(`El total a pagar es: ${total}`);

let price = document.getElementById("precio").innerHTML = `El precio unitario del producto es: ${precio}`;
let commentPrice = document.getElementById("comentarioPrecio").innerHTML = `El precio está: ${(precio < 50) ? "barato" : "caro"}`
let qty = document.getElementById("cantidad").innerHTML = "La cantidad es: " + cantidad;
let subt = document.getElementById("subtotal").innerHTML = "El subtotal es " + precio * cantidad;
