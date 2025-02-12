

/**
 * Declaracion de variables
 */
let nota1, nota2, nota3, promedio, nombre;

/**
 * Bienvenida
 */
alert("Bienvenido al sistema de carga de informacion");

alert("A continuacion se le pedira los datos de sus notas...");

/**
 * Entradas
 */
//Ingreso del nombre del estudiante
nombre = prompt("Ingrese su nombre:");

nota1 = parseFloat(prompt(`Ok ${nombre}, ingrese la nota 1:`));
nota2 = parseFloat(prompt(`Ok ${nombre}, ingrese la nota 2:`));
nota3 = parseFloat(prompt(`Ok ${nombre}, ingrese la nota 3:`));

/**
 * Procesos
 */
promedio = (nota1 + nota2 + nota3) / 3;

/**
 * Salidas
 */
if (confirm("Desea ver sus notas?")) {
    alert(`Perfecto ${nombre}, tus notas son las siguientes: \n Tu promedio es: ${promedio} \n Nota 1: ${nota1} \n Nota 2: ${nota2} \n Nota 3: ${nota3} \n`)
}

fetch("https://docs.google.com/spreadsheets/d/1gIEzRffF4g8TUP6Z9pP0cuwwz4AC5Ye6NBz5xCsUxrI/gviz/tq?tqx=out:json&gid=0").
    then((res) => {
    res.text().then((data) => {
        console.log(data);
    })
})
