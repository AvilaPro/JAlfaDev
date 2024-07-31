/**
 * Para la clase hemos decidido crear un juego basado en el juego popular llamado "el ahorcado".
 */

/**
 * Declaraciones globales del juego
 */
var jugador;
var juego;
palabrasSecretas = [
  //palabras de 4 letras
  ['gato',
    'pero',
    'casa',
    'palo',
    'rata',
    'piso',
  ],
  //palabras de 5 letras
  ['libro',
    'calle',
    'silla',
    'piano',
    'celda',
    'manta'
  ],
  //palabras de 6 letras
  [
    'camion',
    'cereal',
    'ataque',
    'sueter',
    'lavado',
    'asador'
  ],
];
/**
 * Describimos el Objeto que define un jugador
 */
/*
var jugador = new Object();
jugador.nombre = "Juan";
jugador.nroIntentos = 10;
jugador.nivel = 1;
*/
/**
 * Otra forma de definir el Objeto "jugador"
 */
function Jugador(name) {
  this.nombre = name;
  this.nroIntentos = 10;
  this.nivel = 1;
}
/**
 * Definicion del Objeto 'Juego' que contendra la informacion de la palabra secreta, nivel del juego y numero de la animacion.
 */
/*
var juego = new Object();
juego.nivel = 1;
juego.palabraSecreta = "gato";
juego.animacion = 0;
*/

//Definicion del 'juego' como clase para la posterior instanciacion del juego.

class Juego{
  //declaracion de atributos
  nivel;
  palabraSecreta;
  animacion;
  //inicializacion de atributos de la clase a traves del constructor de la clase
  constructor(){
    this.nivel = 1;
    this.palabraSecreta = this.buscarPalabra();
    this.animacion = 0;
  }

  buscarPalabra(){
    //logica para buscar la palabra secreta
    return palabrasSecretas[`${jugador.nivel-1}`][`${Math.round(Math.random()*5)}`];
  }
}

/**
 * Logica para cuando el juego o la pagina recien carga.
 */
//obtencion del nombre del jugador
do {
  var auxName = prompt('Ingrese su nombre...');
  if (auxName == null || auxName == '') {
    alert('DEBE INGRESAR UN NOMBRE DE JUGADOR')
  }
} while (auxName == null || auxName == '');
jugador = new Jugador(auxName);
//Mostrar el nombre del jugador en el tablero.
var h2Jugador = document.getElementById('jugador');
h2Jugador.innerHTML = `Bienvenido ${jugador.nombre} a nuestro juego`;
//instanciacion del juego
juego = new Juego();
/**
 * Logica para mostrar el nivel actual
 */
var nivel = document.getElementById('nivel').innerHTML = `Nivel actual: ${juego.nivel}`;


/**
 * Logica para obtener una palabra aleatoria
 */
//Seleccion de la palabra secreta segun el nivel (al iniciar)
//este proceso se lleva a cabo en el constructor de la clase del juego
console.log(juego.palabraSecreta);

/**
 * Creacion de los span que contendran los espacios de la palabra secreta
 */
var palabra = document.getElementById("palabra");
var cantidadLetrasPalabra = juego.palabraSecreta.length;
var espacio = document.createElement("span");
for (var i = 0; i < cantidadLetrasPalabra; i++) {
  espacio = document.createElement("span");
  espacio.innerHTML = '___ '
  espacio.id = "espacio" + i;
  espacio.className = "espacio";
  palabra.appendChild(espacio);
}


