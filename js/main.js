/** 
 * Creamos los objetos del juego y el jugador
 */
//Deficion del juego
// var game = new Object();
// game.questions = [];
// game.wrongAnswers = [];
// game.rightAnswers = [];
// game.time = 0;

// var player = new Object();
// player.name = "";
// player.score = 0;
// player.level = 0;

/**
 * Reescribimos los objetos con funcion constructora y creamos funcion constructora para las preguntas y las respuestas
 */

// function game() {
//     this.levels = 3
//     this.questions = [];
//     this.wrongAnswers = []
//     this.rightAnswers = []
//     this.time = 0;
// }

// function player(name) {
//     this.name = name;
//     this.score = 0;
//     this.level = 0
// }

// function question(quest) {
//     this.question = quest
// }

// function answerW(ans) {
//     this.answer = ans
// }
// function answerR(ans) {
//     this.answer = ans
// }

/**
 * Reescribimos las funciones como clases
 */

/**
 * Declaracion de variables globales
 */
var play;

/**
 * Definiciones de clases
 */

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.level = 0;
    }
}

class Game {
    constructor(name) {
        this.levels = 3;
        this.time = 0;
        //agregamos dentro del juego un atributo que direccione al jugador
        this.player = new Player(name);
        // this.chargeQuestions();
        if (localStorage.getItem("game") !== null) {
            let auxLocal = JSON.parse(localStorage.getItem("game"));
            this.questions = auxLocal.questions;
        } else {
            this.questions = preguntas;
        }
    }

    chargeQuestions() {
        for (let i = 0; i < this.levels; i++) {
            let q1 = new Question(i);
            this.questions.push(q1);
        }
    }
}

class Question {
    constructor(index) {
        this.question = prompt(`Ingresa la ${index + 1}° pregunta : `);
        this.answers = this.createAnswers();
        this.rightAnswer = this.knowRightAnswer();
    }
    createAnswers() {
        let answers = [];
        for (let i = 0; i < 4; i++) {
            let aux = prompt(`Ingrese la ${i + 1}° respuesta: `);
            answers.push(aux);
        }
        return answers;
    }
    knowRightAnswer() {
        let aux = prompt("Cual es la opcion correcta?");
        aux = parseInt(aux);
        aux--;
        return aux;
    }
}

/**
 * Declaracion de preguntas
 */
var preguntas = [
    {
        question: "Cual es la capital de España?",
        answers: [
            "Madrid",
            "Barcelona",
            "Sevilla",
            "Valencia"
        ],
        rightAnswer: 0
    },
    {
        question: "¿Quién es el autor de la novela Cien años de soledad?",
        answers: [
            "Mario Vargas Llosa",
            "Jorge Luis Borges",
            "Gabriel García Márquez",
            "Pablo Neruda"
        ],
        rightAnswer: 2
    },
    {
        question: "¿Cuál es el río más largo de América del Sur?",
        answers: [
            "Paraná",
            "Amazonas",
            "Orinoco",
            "Magdalena"
        ],
        rightAnswer: 1
    }
]

/**
 * Funciones utilitarias del juego
 */

function showUsername(name) {
    let title = document.getElementById("username");
    title.innerText = `Bienvenido ${name}`;
}
function showQuestions(quests) {
    let container = document.getElementById("questions");
    for (let i = 0; i < quests.length; i++) {
        container.children[i].children[0].innerHTML = quests[i].question;
        for (let j = 0; j < quests[i].answers.length; j++) {
            container.children[i].children[j + 1].innerHTML = quests[i].answers[j];
        }
    }
    contadorTiempo();
}
/**
 * Instanciar un objeto de la clase Game
*/
function startGame(el) {
    if (localStorage.getItem("game") == null) {
        play = new Game(prompt("Ingresa tu nombre: "));
        localStorage.setItem("game", JSON.stringify(play));
        showQuestions(play.questions);
        showUsername(play.player.name);
        document.cookie = `username=${play.player.name}`;
    } else {
        let auxLocal = localStorage.getItem("game");
        auxLocal = JSON.parse(auxLocal);
        document.cookie = `username=${auxLocal.player.name}`;
        showQuestions(auxLocal.questions);
    }
    // document.cookie = `username=${play.player.name}`;
    document.cookie = document.location;
    //agregar la logica para mostrar el username consumiendo la cookie
    console.log(document.cookie);
    console.log(document.cookie.indexOf("username"));

    // showQuestions(play.questions);
    el.style.display = "none";
    document.getElementById("btnFinJuego").style.display = "block";
}

/**
 * Clase 3 - Asincronismo y Sincronismo
 */
//Referencia del banner publicitario
let banner = document.getElementById("banner");
setTimeout(() => {
    banner.style.display = "flex";
}, 3000);
banner.addEventListener("click", () => {
    Swal.fire({
        title: "Quieres cerrar el banner?",
        text: "Aprovecha esta oferta!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cerrar.",
        cancelButtonText: "No, deseo aprovechar la oferta."
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Cerrado",
                text: "Oferta eliminada!.",
                icon: "success"
            }).then(() => {
                banner.style.display = "none";
            });
        }
    });
})

//variable global del cierre de sesion
var timer;
var askSess;
var tiempoJugador = 0;
var countTimerPlayer;
//metodo para cerrar sesion
function timeSession() {
    timer = window.setTimeout(() => {
        let timerInterval;
        Swal.fire({
            title: "Sesion Cerrada!",
            html: "Se cerrará automaticamente en 2 segundos...",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }, 20000);
}

//funcion para impedir el cierre de la sesion
function askSession() {
    askSess = window.setTimeout(() => {
        Swal.fire({
            title: "Deseas mantener la sesion?",
            text: "",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, mantenla!",
            cancelButtonText: "No, cierrala!"
          }).then((result) => {
            if (result.isConfirmed) {
              clearTimeout(timer);
            }
          });
    }, 10000);
}

//Programamos el DOMContentLoaded para llamar a ambos metodos de Sesion
addEventListener("DOMContentLoaded", () => {
    timeSession();
    askSession();
})

//Elemento que muestra el contador
const mostradorConteo = document.getElementById("tiempo");
//Programar el contabilizador del tiempo
function contadorTiempo() {
    countTimerPlayer = window.setInterval(() => {
        tiempoJugador++;
        mostradorConteo.innerText = `Tiempo de ejecucion: ${tiempoJugador}`;
    }, 1000)
}

function quitarContadorTiempo(el) {
    clearInterval(countTimerPlayer);
    el.style.display = "none";
}

/**
 * Clase 4 - Fecha Hora y Promesa
 */

function loginDate() {
    let fecha = new Date();

    let ahora = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} - Hora: ${fecha.getHours()}:${fecha.getMinutes()}`;
    
    if (localStorage.getItem("ultimoLogin") != null) {
        let p = document.getElementById("ultimaConexion");
        p.innerHTML = `Ultima conexion: ${localStorage.getItem("ultimoLogin")}`;
        localStorage.setItem("ultimoLogin", ahora);
    }else{
        //guardar el dato en el localstorage
        localStorage.setItem("ultimoLogin", ahora);
    }

}

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer '
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

async function peticionAsync() {
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
    console.log("ejecucion del asincrono terminado");
}
