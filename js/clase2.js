/**
 * Declaracion de variables e inicializacion
 */
var nombre;
var cedula;
var sexo = "M";
var nota1 = Math.ceil(Math.random() * (50 - 10) + 10);
var nota2 = Math.round(Math.random() * 40 + 10);
var nota3 = Math.floor(Math.random() * 40 + 10);
var notaFinal = 20;

//Inicializacion  de las variables
cedula = "12345678";

/**
 * Procesos
 */
nombre = prompt("Ingrese el nombre del estudiante");

/**
 * Salidas del programa
 */
if (confirm("Desea ver los resultados?")) {
    alert(`La nota 1 es: ${nota1} puntos`);
    if(nota1 >= 25){
        alert(`Has aprobado con ${nota1} puntos`);
    }
    if (nota1 >= 40) {
        alert(`Felicitaciones tienes una nota destacada.`);
    }
    if (nota1 <= 20) {
        alert("Debes esforzarte mas");
    }
    alert(`La nota 2 es: ${nota2} puntos`);
    alert(`La nota 3 es: ${nota3} puntos`);
    alert(`La nota final es: ${notaFinal} puntos`);
}