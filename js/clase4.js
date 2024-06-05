/*Declaracion de variables*/
var reintentarPass = true;
var users = ["Edecio", "Jhon", "Royner"];
var passwords = ["qwe123", "asd456", "zxc789"];

for (let i = 0; i < 3; i++) {
    console.log(`Para el usuario ${users[i]}, su clave es: ${passwords[i]}`) 
}

/**Logica de Login */
function iniciarSesion() {
    do {
        var auxUser = prompt("Ingrese su username: ");
        if (auxUser == '' || auxUser == null) {
            alert("Debe ingresar un dato para continuar")
        }
        //Logica de busqueda en el arreglo
        let indexUser = users.indexOf(auxUser);
        if (indexUser != -1) {
            //Procedimiento de solicitud de contraseña
            do {
                var auxPass = prompt("Ingrese su contraseña: ");
                if (auxPass == '' || auxPass == null) {
                    alert("Debe ingresar un valor para continuar")
                }
                var indexPass = passwords.indexOf(auxPass);
                if (indexPass != -1) {
                    if (indexUser == indexPass) {
                        //el usuario esta correctamente autenticado
                        alert(`Bienvenido ${users[indexUser]}`);
                        reintentarPass = false;
                    }else{
                        alert("Tu contraseña es invalida");
                        reintentarPass = confirm("Deseas reintentar ingresar la contraseña?");
                    }
                }else{
                    reintentarPass = confirm("Deseas reintentar ingresar la contraseña?");
                }
            } while (auxPass == '' || auxPass == null || reintentarPass);
        }else{
            alert("Lamentablemente no te has registrado aun, procede a registrarte.")
            //Logica de registro
            if (confirm("Deseas registrarte?")) {
                do {
                    var auxNewUser = prompt("Ingrese el username con el que se registrará:")
                    if(auxNewUser == '' || auxNewUser == null){
                        alert("Debe ingresar un valor para poder registrarse");
                    }else{
                        //registramos el username en el arreglo users
                        users.unshift(auxNewUser);
                        //solicitamos la contraseña
                        do {
                            var auxNewPass = prompt("Ingrese la contraseña con la que se registrará:")
                            if(auxNewPass == '' || auxNewPass == null){
                                alert("Debe ingresar un valor para poder registrarse");
                            }else{
                                //registramos el password en el arreglo passwords
                                passwords.unshift(auxNewPass);
                                alert("Te has registrado correctamente!!!");
                                iniciarSesion();
                            }
                        } while (auxNewPass == '' || auxNewPass == null);
                    }
                } while (auxNewPass == '' || auxNewPass == null);
            }
        }
    } while (auxUser == '' || auxUser == null);
}
if (confirm("Deseas iniciar sesion?")) {
    iniciarSesion();
}