/*
Declaraciones de variables
nombre, edad, fecha de nacimiento, sexo.
*/
var nombre;
var edad;
var fechaNacimiento;
var diaNacimiento;
var mesNacimiento;
var anioNacimiento;
var sexo

/**Entrada*/
nombre = prompt("Ingresa tu nombre");
sexo = prompt("Indica tu sexo (M:Masculino, F: Femenino): ");
edad = prompt("Ingrese su edad: ");
diaNacimiento = prompt("Ingrese el dia de su nacimiento: ");
if (isNaN(parseInt(diaNacimiento))) {
    alert("Dia ingresado incorrecto");
}
mesNacimiento = prompt("Ingrese el mes de su nacimiento (en numeros)");
anioNacimiento = prompt("Ingrese el año de su nacimiento");

if (isNaN(parseInt(mesNacimiento))) {
    alert("Mes ingresado incorrecto");
}
if (isNaN(parseInt(anioNacimiento))) {
    alert("Año ingresado incorrecto");
}
fechaNacimiento = diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento;

/**Salidas */
console.log(`nombre: ${nombre}, sexo: ${sexo}, fecha de nacimiento: ${fechaNacimiento}, y su edad es: ${edad}`);

