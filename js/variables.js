"use strict"
//Reglas para declarar variables
// 1. Puedo declarar informalmente variables en JS
// A menos que estemos usando "use strict", que no podremos declarar sin usar una palabra reservada.

/* nombre = ""; */

// 2. Puedo declarar usando palabras reservadas de JS como son var, let y const.
var apellido;
// 3. Las variables pueden declararse sin inicializarse solo cuando se usan palabras reservadas como var o let. Si se usa const debemos dar un valor inicial.
var correo;
let telefono;
// La convención de nombrar variables constantes es que éstas sean escritas en mayúsculas
const CEDULA = 1234567;
// 4. Las variables que no son inicializadas tiene el tipo y valor por defecto undefined.
console.log(apellido);
console.log(typeof(apellido));