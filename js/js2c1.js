var usuarios = ["mauricio", "elianny", "helena", "ronald", "jesus"];


function iniciarSesion(ev) {
    ev.stopPropagation();
    console.log(ev);
    let auxUser;
    do {
        auxUser = prompt("Ingrese su nombre de usuario:");
        if (vacioONull(auxUser)) {
            alert("Debe ingresar un dato!!!")
        }else{
            auxUser = auxUser.toLocaleLowerCase();
            if (existeEnArray(auxUser, usuarios)) {
                alert(`Bienvenido ${auxUser}`);
            }else{
                alert("El usuario no esta registrado");
            }
        }
    } while (vacioONull(auxUser));
}

function evitarSubmit(e) {
    e.preventDefault();
    console.log(e);
}

