//script
/**
 * Declaraciones de variables e inicializacion
 */
//variables implicitas
var nombre;
var cedula = "18185151";
var sexo = "M";
var max = 20;
var min = 0;

// variables explicitas
var nota1 = Math.round(Math.random() * (max - min) + min);
var nota2 = Math.ceil(Math.random() * (max - min) + min);
var nota3 = Math.floor(Math.random() * (max - min) + min);

/**
 * Entradas
 */
//Premisa: el usuario siempre contesta.
nombre = prompt("Ingresa tu nombre");


/**
 * Proceso o logica del algoritmo
 */

var promedio = (nota1 + nota2 + nota3) / 3;

/**
 * Salidas
 */
if (confirm(`${nombre} deseas ver los resultado`)) {
    alert(`la nota final de ${nombre} es: ` + promedio.toFixed(2));
}
console.log(`La nota 1 es: ${nota1}`);
console.log(`La nota 2 es: ${nota2}`);
console.log(`La nota 3 es: ${nota3}`);
console.log(`la nota final de ${nombre} es: ` + promedio.toFixed(2));

if (promedio >= 10) {
    console.log("El alumno ha aprobado")
}
if (promedio < 10) {
    console.log("El alumno ha reprobado")
}
if (promedio >= 15) {
    console.log("FELICITACIONES, ERES EXCELENTE")
}
if (promedio <= 7) {
    console.log("-.- debes dejar de jugar y ver netflix, es decir deja de flojear!!!")
}
