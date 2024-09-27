let nombres = [
    'franyer',
    'jorge',
    'moises',
    'alexis'
];

function login() {
    var user;
    user = getDatafromPromt("Ingresa tu nombre");
    console.log(user);
    let searchUser = searchInArray(nombres, user);
    console.log(searchUser)
    // do {
    //     user = prompt("Ingresa tu nombre");
    //     if (user === null) {
    //         alert("Has cancelado la operación");
    //     }else if (nombres.indexOf(user) !== -1) {
    //         alert("Bienvenido " + user);
    //     }else if (nombres.indexOf(user) == -1){
    //         alert('No estas registrado');
    //         if (confirm("Deseas registrarte?")) {
    //             let newName = prompt("Ingresa tu nombre nuevamente");
    //             nombres.push(newName);
    //         }
    //     }
    // } while (user === null || user == '');
}

function test(e) {
    console.log(e);
    e.stopPropagation();
    alert("alerta")
}