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
        if(localStorage.getItem("game")!== null){
            let auxLocal = JSON.parse(localStorage.getItem("game"));
            this.questions = auxLocal.questions;
        }else{
            this.questions = preguntas;
        }
    }

    chargeQuestions(){
        for (let i = 0; i < this.levels; i++) {
            let q1 = new Question(i);
            this.questions.push(q1);
        }
    }
}

class Question {
    constructor(index) {
        this.question = prompt(`Ingresa la ${index+1}° pregunta : `);
        this.answers = this.createAnswers();
        this.rightAnswer = this.knowRightAnswer();
    }
    createAnswers(){
        let answers = [];
        for (let i=0; i<4; i++){
            let aux = prompt(`Ingrese la ${i+1}° respuesta: `);
            answers.push(aux);
        }
        return answers;
    }
    knowRightAnswer(){
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
            container.children[i].children[j+1].innerHTML = quests[i].answers[j];
        }
    }
}
/**
 * Instanciar un objeto de la clase Game
*/
function startGame(el) {
    if(localStorage.getItem("game") == null){
        play = new Game(prompt("Ingresa tu nombre: "));
        localStorage.setItem("game", JSON.stringify(play));
        showQuestions(play.questions);
        showUsername(play.player.name);
        document.cookie = `username=${play.player.name}`;
    }else{
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
}




