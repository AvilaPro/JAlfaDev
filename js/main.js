/**
 * Para la clase hemos decidido crear un juego basado en el juego popular llamado "el ahorcado".
 */

/**
 * Declaraciones globales del juego
 */
var jugador;
var juego;
//URL del API para generar palabras aleatorias
let urlAPI = 'https://clientes.api.greenborn.com.ar/public-random-word';
//El elemento donde se vera la palabra, tanto antes de ser descubierta como mientras la descubrimos.
var palabra = document.getElementById("palabra");
//cantidad de letras que tendra la palabra
var cantidadLetrasPalabra
//elemento html que contiene el numero de fallos
var fallos = document.getElementById("fallos");
//elemento html que contiene la animacion
var animacion = document.getElementById("animacion");
//Objeto JSON de las animaciones
var animaciones = [
  {
    "animacion": 'a1',
    "imagen": 'img/a1.png',
  },
  {
    "animacion": 'a2',
    "imagen": 'img/a2.png',
  },
  {
    "animacion": 'a3',
    "imagen": 'img/a3.png',
  },
  {
    "animacion": 'a4',
    "imagen": 'img/a4.png',
  },
  {
    "animacion": 'a5',
    "imagen": 'img/a5.png',
  },
  {
    "animacion": 'a6',
    "imagen": 'img/a6.png',
  },
  {
    "animacion": 'a7',
    "imagen": 'img/a7.png',
  },
  {
    "animacion": 'a8',
    "imagen": 'img/a8.png',
  },
  {
    "animacion": 'a9',
    "imagen": 'img/a9.png',
  },
  {
    "animacion": 'a10',
    "imagen": 'img/a10.png',
  }
]
var animaciones
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
  this.nroFallos = 0;
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

class Juego {
  //declaracion de atributos
  nivel;
  palabraSecreta;
  animacion;
  //inicializacion de atributos de la clase a traves del constructor de la clase
  constructor() {
    this.nivel = 1;
    this.palabraSecreta = this.buscarPalabra();
    this.animacion = 0;
  }

  buscarPalabra() {
    //logica para buscar la palabra secreta
    //return palabrasSecretas[`${jugador.nivel-1}`][`${Math.round(Math.random()*5)}`];

    fetch(`${urlAPI}`)
      .then(res => res.text())
      .then(data => {
        data = data.slice(2, -2);
        console.log('LaS palabra aleatoria es:', data);
        juego.palabraSecreta = data;
        /**
        * Creacion de los span que contendran los espacios de la palabra secreta
        */
        let palabra = document.getElementById("palabra");
        cantidadLetrasPalabra = juego.palabraSecreta.length;
        let espacio = document.createElement("span");
        for (let i = 0; i < cantidadLetrasPalabra; i++) {
          espacio = document.createElement("span");
          espacio.innerHTML = '___ '
          espacio.id = "espacio" + i;
          espacio.className = "espacio";
          palabra.appendChild(espacio);
        }
      })
      .catch(error => {
        console.error('Error al obtener la palabra:', error);
      });
  }

  testLetra(letra) {
    let auxIdxLetra = this.palabraSecreta.indexOf(letra);
    if (auxIdxLetra != -1) {
      console.log(`letra econtrada (primer indice): ${auxIdxLetra}`);
    }
    return auxIdxLetra;
  }
}

/**
 * Logica para cuando el juego o la pagina recien carga.
 */
//logica para manejo del jugador desde el localStorage
if (localStorage.getItem('player') == undefined) {
  console.log('player no encontrado');
  do {
    var auxName = prompt('Ingrese su nombre...');
    if (auxName == null || auxName == '') {
      alert('DEBE INGRESAR UN NOMBRE DE JUGADOR')
    }
  } while (auxName == null || auxName == '');
  //Instancia del Jugador
  jugador = new Jugador(auxName);
  localStorage.setItem('player', JSON.stringify(jugador));
}else{
  jugador = JSON.parse(localStorage.getItem('player'));
}
// var auxName = 'Eduardo';

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
 * Varificacion de la letra ingresada en el input
 */
var btnSearch = document.getElementById('btnSearchLetter');
btnSearch.addEventListener('click', () => {
  let letra = document.getElementById('letra').value;
  if (juego.testLetra(letra) != -1) {
    /**
     * Logica de cuando la letra es encontrada
     */
    palabra.className = 'col-6 h-75 d-flex align-items-center justify-content-center border-3 border border-primary border-3 rounded-3 bg-success';
    document.getElementById('letra').value = '';
  } else {
    /**
     * Logica del fallo de la letra
     */
    jugador.nroFallos += 1;
    fallos.innerHTML = jugador.nroFallos;
    palabra.className = 'col-6 h-75 d-flex align-items-center justify-content-center border-3 border border-primary border-3 rounded-3 bg-danger';
    document.getElementById('letra').value = '';
    animacion.innerHTML = `<img src='${animaciones[jugador.nroFallos - 1].imagen}'>`
  }
})

/**
 * Practica de cookies
 */
// document.cookie = "userName=Eduardo; expires=Mon, 05 Aug 2024 21:32:00 UTC; path=/;";

/**
 * Metodo para cerrar Sesion
 */
function cerrarSesion(){
  document.getElementById('btnCerrarSesion').style.display = 'none';
  localStorage.removeItem('player');
  h2Jugador.innerHTML = '<button id="btnIniciarSesion" class="btn btn-success" onclick="iniciarSesion()">Iniciar Sesion</button>';
}

function iniciarSesion() {
  do {
    var auxName = prompt('Ingrese su nombre...');
    if (auxName == null || auxName == '') {
      alert('DEBE INGRESAR UN NOMBRE DE JUGADOR')
    }
  } while (auxName == null || auxName == '');
  //Instancia del Jugador
  jugador = new Jugador(auxName);
  localStorage.setItem('player', JSON.stringify(jugador));
  document.getElementById('btnIniciarSesion').style.display = 'none';
  document.getElementById('btnCerrarSesion').style.display = 'block';
  h2Jugador.innerHTML = `Bienvenido ${jugador.nombre} a nuestro juego`;
}