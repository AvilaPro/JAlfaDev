var usuarios = ["mauricio", "elianny", "helena", "ronald", "jesus"];

function iniciarSesion() {
    let auxUser;
    do {
        auxUser = prompt("Ingrese su nombre de usuario:");
        if (auxUser == "" || auxUser == null) {
            alert("Debe ingresar un dato!!!")
        }else{
            auxUser = auxUser.toLocaleLowerCase();
            if (usuarios.indexOf(auxUser) != -1) {
                alert(`Bienvenido ${auxUser}`);
            }else{
                alert("El usuario no esta registrado");
            }
        }
    } while (auxUser == "" || auxUser == null);
}

