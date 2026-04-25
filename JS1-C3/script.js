/**
 * Obtencion de la informacion
 */
let nombre = prompt("Indique su nombre");
if (nombre != null){
    nombre = nombre.toLowerCase();
}
let sexo = prompt("Indique su sexo (M o F)");
if (sexo != null){
    sexo = sexo.toLowerCase();
}

let edad = prompt("Indique su edad: ");
if (edad != null){
    edad = parseInt(edad);
    if (isNaN(edad)) {
        alert("Error de dato en la edad");
    }
}

let dia = prompt("Indique su dia de nacimiento: ");
if (dia != null){
    dia = parseInt(dia);
    if (isNaN(dia)) {
        alert("Error de dato en la dia");
    }
}
let mes = prompt("Indique su mes de nacimiento (en numero): ");
if (mes != null){
    mes = parseInt(mes);
    if (isNaN(mes)) {
        alert("Error de dato en la mes");
    }
}
let anio = prompt("Indique su año de nacimiento: ");
if (anio != null){
    anio = parseInt(anio);
    if (isNaN(anio)) {
        alert("Error de dato en la año");
    }
}

let fechaNacimiento = dia + "/" + mes + "/" + anio;

/**
 * Mensaje Final
 */

alert(`Bienvenid@ al sistema ${nombre}, su sexo es ${sexo}, su fecha de nacimiento es: ${fechaNacimiento} y su edad ${edad}.`);