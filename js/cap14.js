/**
 * Desarrollar la logica para cargar datos
 */

var nombres = [];
var desafio1 = [];
var desafio2 = [];

//logica para solicitar datos
// var cantidad = prompt("Ingrese el numero de estudiantes:");
// cantidad = parseInt(cantidad);

// for (let i = 0; i < cantidad; i++) {
    //pedimos los datos y los agregamos
    // let auxNombre = prompt(`Ingrese el ${i+1}° nombre: `);
    // nombres.push(auxNombre);
    //solicitamos las notas
//     let auxnota1 = parseFloat(prompt(`Ingrese la primera nota del estudiante ${i+1}:`));
//     let auxnota2 = parseFloat(prompt(`Ingrese la segunda nota del estudiante ${i+1}:`));

//     desafio1.push(auxnota1);
//     desafio2.push(auxnota2);
// }

// var todosLosDatos = [nombres, desafio1, desafio2];
// console.table(todosLosDatos);

/**
 * Como puedo editar un dato?
 */
//preguntamos en nombre del alumno
// let auxNombre = prompt("Ingrese el nombre a editar");
//buscamos el indice
// let index = nombres.indexOf(auxNombre);
//creamos la logica para editar la nota
// let numeroDesafio = parseInt(prompt("Indique el numero de desafio"));
// let nuevaNota = parseFloat(prompt("indique la nueva nota"));
// if (numeroDesafio == 1) {
//     desafio1.splice(index, 1, nuevaNota);
// }else{
//     desafio2.splice(index, 1, nuevaNota);
// }

//ver el resultado final
// console.table(todosLosDatos);

let datos = [
    "juan", "maria", "lucas"
]
console.log(datos.sort());

console.log(datos.join(" "));

//supongamos que le pides a un usuario informacion y deseas guardar eso en un arreglo, la informacion separado por coma
let auxInfo = prompt("Ingrese los nombres de sus materias, separando con coma");
let materias = auxInfo.split(", ");
console.log(materias);




