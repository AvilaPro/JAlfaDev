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
        this.questions = [];
        this.time = 0;
        //agregamos dentro del juego un atributo que direccione al jugador
        this.player = new Player(name);
        this.chargeQuestions();
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
 * Instanciar un objeto de la clase Game
 */
function startGame() {
    play = new Game(prompt("Ingresa tu nombre: "));
}



