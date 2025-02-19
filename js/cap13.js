//declaracion de variables
let users, passwords;
//inicializar las variables
users = [];
passwords = [];

/**
 * Crear la logica del login y register
 */

//Paso 1. Solicitar el user, que sera la cedula.
let newUser = false;
do {
    let auxUser = prompt("Ingrese su cedula");
    
    if (users.includes(auxUser)) {
        let wrongPassword = true;
        let attemptPassword = 1;
        do {
            //Si se encuentra vamos a solicitar el password.
            let auxPassword = prompt("Ingrese su contraseña");
            //verificamos la contraseña
            if (passwords[users.indexOf(auxUser)] == auxPassword) {
                newUser = true;
                alert("Bienvenido");
                wrongPassword = false;
            }else{
                alert("Contraseña incorrecta");
                attemptPassword++;
            }
        } while (wrongPassword && attemptPassword <= 3);
    }else{
        //Si no se encuentra vamos a preguntarle si desea registrase
        //En caso afirmativo verificar la inexistencia de la cedula.
        //En caso negativo darle salida del sistema e indicarle que no podra hacer uso del mismo.
        //Si no se encuentra vamos a solicitar el password y el user.
        let auxUser = prompt("Ingrese su cedula");
        let auxPassword = prompt("Ingrese su contraseña");
        //agregar el user y password a las listas.
        users.push(auxUser);
        passwords.push(auxPassword);
    }    
} while (!newUser);
