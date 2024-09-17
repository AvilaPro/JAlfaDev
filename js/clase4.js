var cedula = ["159", "267", "483"];
var users = ["Carlyn", "Moises", "Juan"];
var pass = [123, 456, 789];
var searchId;
var positionId;
var searchPass;
var newPass;
var newName;
var passSus;


//Busqueda en base a un dato suministrado por el usuario
do {
    //Validacion del dato del id, que no sea vacio ni le haya dado a cancelar
    searchId = prompt("Ingrese su cedula: ");
    if (searchId == "" || searchId == null) {
        alert("Debe ingresar un valor!!!");
    }
} while (searchId == "" || searchId == null);
//Buscar el id en el array correspondiente
if (cedula.includes(searchId)) {
    //Logica luego de encontrar el id del usuario
    console.log("Usuario encontrado");
    positionId = cedula.indexOf(searchId);
    //obtencion del password del usuario
    do {
        searchPass = prompt("Ingrese la contraseña");
        if (searchPass == "" || searchPass == null) {
            alert("Debe ingresar un valor!!!");
        }
    } while (searchPass == "" || searchPass == null);
    //Busco el password del usuario
    if (pass[positionId] == searchPass) {
        alert("USUARIO AUTENTICADO")
    }else{
        //En caso de ser incorrecta el password puedo permitirle recuperarla y crear una nueva.
        alert("Contraseña incorrecta");
        if(confirm("Desea recuperar su contraseña?")){
            alert(`Su contraseña es: ${pass[positionId]}`);
            //preguntamos si desea cambiarla
            if(confirm("Desea cambiar su contraseña?")){
                do {
                    //sustitucion de contraseña
                    //pedimos la nueva contraseña
                    passSus = prompt("Ingrese su nueva contraseña: ");
                    if (passSus == "" || passSus == null) {
                        alert("Debe ingresar un valor!!!");
                    }
                } while (passSus == "" || passSus == null);
                pass.splice(positionId, 1, passSus);
                alert("Contraseña actualizada");
            }
        }
    }
}else{
    if (confirm(`El dato ingresado: ${searchId}, no se encuentra registrado, desea registrase?`)) {
        //registramos el id en el array.
        cedula.push(searchId);
        //obtenemos la contraseña del nuevo usuario.
        do {
            //Validacion del nuevo password, que no sea vacio ni le haya dado a cancelar
            newPass = prompt("Ingrese su contraseña: ");
            if (newPass == "" || newPass == null) {
                alert("Debe ingresar un valor!!!");
            }
        } while (newPass == "" || newPass == null);
        //registramos el nuevo password
        pass.push(newPass);
        //obtenemos el nuevo nombre
        do {
            //Validacion del nuevo nombre, que no sea vacio ni le haya dado a cancelar
            newName = prompt("Ingrese su nombre: ");
            if (newName == "" || newName == null) {
                alert("Debe ingresar un valor!!!");
            }
        } while (newName == "" || newName == null);
        //registramos el nuevo nombre
        users.push(newName);
    }
}

for (let i = 0; i < users.length; i++) {
    console.log(`el usuario: ${users[i]} tiene contraseña: ${pass[i]}`);
}