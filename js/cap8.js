/**
 * a.	En un circo, las entradas se venden de acuerdo a la edad. La entrada general tiene un costo de 1000 Bs, pero: 
* Si es un niño menor a 2 años la entrada es gratis. 
* Si es un niño con edad entre 2 y 5 años, le aplica un descuento de 50% 
* Si es un niño de 6 a 10 años tiene un descuento de 20% 
* A partir de 55 años el descuento es de 30% 
Dependiendo si la persona es estudiante o no, el monto del descuento será lo que sea mayor, entre el descuento por edad (si aplica) y el 25% de descuento. 
*El resto de las personas pagan entrada general. Se conoce la edad (verificar que sea mayor o igual que 0) de la persona y si es estudiante. Se pide mostrar cual fue el porcentaje de dscto aplicado, el monto de descto y el monto a pagar por la entrada.
 */

/**Nota: Debe validar todos los datos al solicitarlo. */

//Declaracion de variables
var edad;
var estudiante;
var descuento;
var montoDescuento;
var total;

//Inicializacion de variables
const boleto = 1000;
estudiante = false;
descuento = 0;
montoDescuento = 0;
total = 0;

//Entradas
// prompt
// confirm
edad = prompt("Por favor, ingrese su edad: ");
edad = parseInt(edad);
estudiante = confirm("Es estudiante?");

/**
 * Procesos
 */
if(edad < 3){
    descuento = 100;
} else {
    if (edad < 6) {
        descuento = 50;
    } else {
        if (edad < 11) {
            if(estudiante){
                descuento = 25;
            } else {
                descuento = 20;
            }
        } else {
            descuento = 0;
        }
        if (edad >= 55) {
            descuento = 30;
        }
    }
}

console.log(descuento);

montoDescuento = boleto * descuento / 100;

console.log(montoDescuento);

total = boleto - montoDescuento;

/**
 * Salidas
 */
//alerts
alert(`Su edad es ${edad}, le toca descuento de: ${descuento}%, que significa un monto de descuento de: ${montoDescuento}. El total a pagar es: ${total}`);