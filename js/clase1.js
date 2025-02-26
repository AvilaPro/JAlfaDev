let nroIdPolicia;

let arrPolicias = [
    {
        id: 1,
        nombre: "Fulanito",
        cargo: "Sargento",
        telefono: "0412-1234567"
    },
    {
        id: 2,
        nombre: "Menganito",
        cargo: "Capitan",
        telefono: "0412-1234567"
    },
    {
        id: 3,
        nombre: "Sutanito",
        cargo: "Poli",
        telefono: "0412-1234567"
    }
]

let multas = [
    {
        id: 1,
        nombre: "Mal parado",
        costo: 1000,
    },
    {
        id: 2,
        nombre: "Insolvente",
        costo: 2000,
    },
    {
        id: 3,
        nombre: "Cinturon",
        costo: 500,
    }
]

/**
 * Programar una funcion para solicitar el numero de placa y buscarlo en el arreglo.
 * En caso de encontrarlo mostrar en un alert su nombre.
 * En caso de no encontrarlo mostrar en un alert que no se encuentra registrado.
 */
function loginPolicia() {
    //Solicitamos el id del policia
    do {
        nroIdPolicia = prompt("Ingrese su id");
        if (nroIdPolicia == "" || nroIdPolicia == null) {
            alert("Debe ingresar un numero");
        }
    } while (nroIdPolicia == "" || nroIdPolicia == null);

    //Buscamos en el array de policias (generalmente esta busqueda se hace en el servidor web como una query a la base de datos)
    let policiaEncontrado = arrPolicias.filter((p) => p.id == parseInt(nroIdPolicia));

    console.log(policiaEncontrado);

    if (policiaEncontrado.length > 0) {
        alert(`Bienvenido ${policiaEncontrado[0].nombre}`)
    }else{
        alert("No se encuentra registrado");
    }
}

function calcularMulta(idMulta) {
    let multaAPlicar = multas.filter((m) => m.id == idMulta);
    alert(`La multa es: ${multaAPlicar[0].nombre}, por valor: ${multaAPlicar[0].costo}`);
}

let vari;
function prueba(){
    vari = 1;
}
function otraPrueba() {
    prueba();
    console.log(vari);
}
