/**
 * Analizar el siguiente problema y crear el algoritmo en base al siguiente enunciado: Se tiene de un alumno de bachillerato las notas de cada lapso. Cada nota está comprendida entre 0 y 20 pts. La nota final de grado se obtiene haciendo un promedio de las notas de lapso. Si se tiene como entrada las notas de 1er lapso, 2do lapso y 3er lapso, calcule y muestre: - Nota final del estudiante. - Indicar si el alumno aprobó al obtener una nota final mayor o igual a 10, en caso contrario indicar que reprobó. (Use unicamente Selectiva Simple). - Mostrar un mensaje felicitando al alumno si obtiene una nota de 19 o 20 pts (Emplee únicamente 1 expresión lógica). - Mostrar un mensaje invitándolo a que se esfuerce más si obtiene una nota de 7 o menos.
 */

//Declaracion de variables
var lapso1;
var lapso2;
var lapso3;
var promedio;
//Inicializacion de variables
lapso1 = Math.ceil(Math.random() * 20);
lapso2 = Math.ceil(Math.random() * 20);
lapso3 = Math.ceil(Math.random() * 20);

//Entradas

/**
 * Procesos
 */

promedio = (lapso1+ lapso2 + lapso3) / 3;


/**
 * Salidas
 */
console.log(`Nota del primer lapso: ${lapso1}`);
console.log(`Nota del segundo lapso: ${lapso2}`);
console.log(`Nota del tercer lapso: ${lapso3}`);
console.log(`La nota promedio es: ${promedio}`);

if (promedio >= 10) {
    console.log("Estas APROBADO!!!");
    if (promedio >= 15) {
        console.warn("FELICITACIONES, tu nota es destacada");
    }
} else {
    console.error("Estas REPROBADO!!!")
    if (promedio < 7 ) {
        console.error("Te animamos a esforzarte mas");
    }
}

console.log(`${promedio >= 10 ? "Estas aprobado" : "Estas reprobado"}`);
console.warn(`${promedio > 15 ? "NOTA DESTACADA": null}`);
console.error(`${promedio < 7 ? "DEBES ESFORZARTE MAS" : null}`);