/**
 * Declarar los dos arreglos
 */
let users, passwords;

//matriz de datos de alumnos


users = ["Oscar", "Jorge", "Glenn"];
passwords = [123, 456, 789];

for (let i = 0; i < users.length; i++) {
    console.log(`El usuario ${users[i]} tiene la contraseña: ${passwords[i]}`);
}