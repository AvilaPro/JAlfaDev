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

class Game {
    constructor(name) {
        this.levels = 3;
        this.questions = [];
        this.wrongAnswers = [];
        this.rightAnswers = [];
        this.time = 0;
        //agregamos dentro del juego un atributo que direccione al jugador
        this.player = new Player(name)
    }

    inicializarPreguntas(button, btnStart){
        console.log(button.parentNode.removeChild(button));
        console.log(btnStart.style.display = "block");
        for (let i = 1; i <= this.levels; i++) {
            let q = prompt(`Ingresa la pregunta: ${i}: `);
            let ra = prompt(`Ingresa la respuesta correcta: ${i}: `);
            let wa = prompt(`Ingresa la respuesta incorrect: ${i}: `);
        
            this.questions.push(new Question(q));
            this.rightAnswers.push(new AnswerR(ra));
            this.wrongAnswers.push(new AnswerW(wa));
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.level = 0;
    }
}

class Question {
    constructor(quest) {
        this.question = quest;
    }
}

class AnswerW {
    constructor(ans) {
        this.answer = ans;
    }
}
class AnswerR {
    constructor(ans) {
        this.answer = ans;
    }
}

/**
 * Instanciar un objeto de la clase game
 */
var play = new Game(prompt("Ingresa tu nombre: "));




