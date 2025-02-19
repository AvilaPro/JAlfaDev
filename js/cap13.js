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
    let auxUser = prompt("Iniciar Sesion: Ingrese su cedula");
    
    if (users.includes(auxUser)) {
        let wrongPassword = true;
        let attemptPassword = 1;
        do {
            //Si se encuentra vamos a solicitar el password.
            let auxPassword = prompt("Iniciar sesion: Ingrese su contraseña");
            //verificamos la contraseña
            if (passwords[users.indexOf(auxUser)] == auxPassword) {
                newUser = true;
                alert("Bienvenido");
                wrongPassword = false;
            }else{
                alert(`Contraseña incorrecta (Intento numero: ${attemptPassword} / 3)`);
                attemptPassword++;
            }
        } while (wrongPassword && attemptPassword < 3);
        if (attemptPassword == 3) {
            alert("Ha alcanzado el maximo numero de intentos de ingresar la contraseña ");
        }
    }else{
        //Si no se encuentra vamos a preguntarle si desea registrase
        alert(`Al parecer la cedula n° ${auxUser} no se encuentra registrada`);
        if (confirm("Desea registrarse?")) {
            let auxUser = prompt("Registrarse: Ingrese su cedula");
            if (users.includes(auxUser)) {
                alert(`La cedula ${auxUser} ya está registrada, reintenta iniciar sesion`)
            }else{
                //agregar el user y password a los arreglos.
                let auxPassword = prompt("Registrarse: Ingrese su contraseña");
                users.push(auxUser);
                passwords.push(auxPassword);
            }
        }else{
            newUser = true;
            alert("Adios!!!")
        }
    }    
} while (!newUser);
