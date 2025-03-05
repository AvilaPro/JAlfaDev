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

function calcularMulta(v) {
    console.log(v);
    let multaAPlicar = multas.filter((m) => m.id == v.target.value);
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


// CLASE 2
let personajes;
let auxSiguienteListaDePersonajes;

// IR a pagina del Intt
function irPaginaIntt() {
    window.location.assign("https://www.intt.gob.ve/INTT/principal.htm");
}

function conocerIdioma(){
    if (window.navigator.language == "es-ES") {
        location.assign("./webES.html");
    }else{
        alert("Estas en ingles")
    }
}

function getAllCharacters() {
    fetch("https://rickandmortyapi.com/api/character").
    then(
        (res) => res.json()
    ).then(
        (data) => {
            console.log(data);
            personajes = data.results;
            console.log(personajes);
            auxSiguienteListaDePersonajes = data.info.next;
        }
    ).
    then(() => {
        mostrarPersonajes(personajes)
    })
}

function obtenerMasPersonajes(url) {
    fetch(url).
    then((res) => res.json()).
    then((data) => {
        console.log(data);
        personajes = data.results;
        auxSiguienteListaDePersonajes = data.info.next;
    }).
    then(() => {
        mostrarPersonajes(personajes);
    })
}

function mostrarPersonajes(arrayPersonajes) {
    let auxCard = '';
    for (const pers of arrayPersonajes) {
        auxCard += `
            <div class="card col-3">
            <img src="${pers.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pers.name}</h5>
                <p class="card-text">Especie: ${pers.species}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        `
    }
    document.getElementById("personajes").innerHTML += auxCard;
}

function scrollInfinito () {
    if (window.scrollY == (document.body.scrollHeight - window.innerHeight)) {
        obtenerMasPersonajes(auxSiguienteListaDePersonajes);
    }
}

function manejarApertura() {
    if(window.opener != null){
        document.body.innerHTML += '\n <button onclick="window.close()" style="background: red; color: white; border: none; padding: 10px; border-radius: 10px;">Cerrar</button><br><button onclick="window.opener.location=`https://www.nintendo.es`" style="background: green; color: white; border: none; padding: 10px; border-radius: 10px;">Cambiar index</button>'
    }
}