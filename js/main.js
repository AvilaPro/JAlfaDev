//Declaracion de variables globales
let nombres = [
    'franyer',
    'jorge',
    'moises',
    'alexis'
];

var scrY = 0;

var personajes;
var siguientePagina;

/*Ejecucion directa */
if(window.history.length <= 1){
    document.getElementById("btnBack").style.display = 'none';
}else{
    document.getElementById("btnBack").style.display = 'inline-block';
}

//Conectarme con el API de Rick and Morty para generar los primeros elementos de personajes
crearPersonajes('https://rickandmortyapi.com/api/character');

/* Metodos de la aplicacion */
function crearPersonajes(url) {
    fetch(url).
    then(res => res.json()).
    then(data => {
        console.log(data);
        siguientePagina = data.info.next;
        personajes = data.results;
        console.log(personajes);
        for (const personaje of personajes) {
            document.getElementById("personajes").innerHTML += `
            <div class="person">
              <img src='${personaje.image}'>
              <h4>${personaje.name}</h4>
              <p>Specie: ${personaje.species}</p>
              <p>${personaje.status}<p>
              <p>Genero: ${personaje.gender}</p>
            </div>`;
        }
    })
}

function login() {
    var user;
    user = getDatafromPromt("Ingresa tu nombre");
    console.log(user);
    document.getElementById("bienvenida").innerHTML = `Bienvenid@ ${user}`;
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

function navegarEspanol() {
    if (window.navigator.language == 'es-ES') {
        window.location = 'http://localhost:5500/webES.html';
    }
}

function irAtras() {
    window.history.back();
}

function scroll() {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        document.getElementById('btnUp').style.display = 'block';
    }else{
        document.getElementById('btnUp').style.display = 'none';
    }
    
    console.log('scrollY: ' + window.scrollY);
    console.log('alturaBody: ' + document.body.scrollHeight);
    console.log(window.innerHeight);

    //SCROLL INFINITO
    if((scrollY + window.innerHeight) == (document.body.scrollHeight)){
        crearPersonajes(siguientePagina);
    }

    if (window.scrollY > scrY) {
        // console.log('bajando');
        // console.log(window.innerHeight);
        // console.log(window.scrollY);
        // scrY = window.innerHeight;
        // console.log('scrY: ' + scrY);
        // window.scrollBy({top: window.innerHeight, left: 0, behavior: 'smooth'})
    }else{
        // console.log('subiendo');
        // scrY = window.scrollY;
    }
}

function probarOpen() {
    window.open('http://localhost:5500/webES.html', "_blank", "width=200,height=100");
}