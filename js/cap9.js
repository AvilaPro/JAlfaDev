/**
 * + Crear un algoritmo en javascript que solicite a un usuario los siguientes datos, usando prompt():
+ nombre, edad, fecha de nacimiento, sexo.
+ Manejar los datos de nombre y sexo con los metodos de conversion de la clase String.
+ Validar que el usuario haya el dato correcto. Utilice isNaN(), en especial para la edad y la fecha de nacimiento. (Por el momento solo informar en caso de error con alert(), al conocer los ciclos volvera a solicitar el dato).
+ Para validar la fecha el truco es solicitar el dia, el mes y el año por separado validando cada dato. Luego si todo es valido se cocatena en una variable final.
 */

/**
 * Declaracion de variables
 */
var nombre;
var edad;
var sexo;
var fechaNacimiento;
var dia;
var mes;
var anio;

/**
 * Entradas
*/
//PREMISA: El usuario siempre responde correctamente o en el tipo de dato.

function validarPrompt(x, msg) {
    do {
        x = prompt(msg + ": ");
        if (x == "" || x == null) {
            alert("Debe ingresar un dato para poder continuar!!!");
        }else{
            return x;
        }
    } while (x == "" || x == null);
}

function validarDicotomia(x, a, b, message) {
    do {
        x = validarPrompt(x, message);
        x = x.toUpperCase();
        if (!(x == a || x == b)) {
            alert("Los valores esperados son: " + a + " o " + b);
        }else{
            return x;
        }
    } while ((x != a && x != b));

}

function validarNumberInRank(x, message, a, b) {
    do {
        x = validarPrompt(x, message);
        x = parseInt(x);
        if(isNaN(x)){
            alert("Se esperaba un numero")
        }
        if (x < a || x > b) {
            alert(`valor introducido fuera de rango (${a},${b})`);
        }else{
            return x;
        }
    } while ((x < a || x > b) || isNaN(x));
}

//obtencion del nombre
nombre = validarPrompt(nombre, "Ingresa tu nombre");

//obtencion del sexo
sexo = validarDicotomia(sexo, "M", "F", "Ingrese su sexo(M:Masculino, F:Femenino)");
//manejar el dato obtenido
// sexo = sexo.toUpperCase();

//obtencion de la edad
edad = validarNumberInRank(edad,"Ingresa tu edad", 0, 120);
//convertimos el dato a Number
// edad = parseInt(edad);

//obtencion de la fecha de nacimiento
dia = validarNumberInRank(dia, "Indique el dia de su nacimiento", 1, 31);
mes = validarNumberInRank(mes, "Indique el mes de su nacimiento (en numeros)", 1, 12);
anio = validarNumberInRank(anio, "Indique el año de su nacimiento", 1900, 2024);
//creamos el dato fecha completo
fechaNacimiento = dia + "/" + mes + "/" + anio;

/**
 * Salida
 */
//Mostrar la informacion
alert(`Estimado ${nombre} (${sexo=="M" ? "Masculino" : "Femenino"}), su edad es ${edad} y su fecha de nacimiento es: ${fechaNacimiento}`);