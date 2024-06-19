//Declaracion de variables
let seleccionMaquina;
// let miSeleccion;
let jugadorGanador = false;
let opciones = ["piedra", "papel", "tijeras"];
let colorsGame = ["#00B613", "#A3B600", "#AD1403"];
let imgsOptions = ["https://i.ibb.co/Jxn31jS/piedra-removebg-preview.png", "https://i.ibb.co/L8Z8H9M/papel-removebg-preview.png", "https://i.ibb.co/rxkdyq6/tijeras-removebg-preview.png"];
/**
 * Logica del juego
 * 0: Piedra
 * 1: Papel
 * 2: Tijeras
 * 
 * Piedra le gana a tijeras 0 -> 2
 * Papel le gana a Piedra 1 -> 0
 * Tijeras le gana a Papel 2 -> 1
 * 
 * Si son iguales hay empate
 */

function seleccionarJuego(playerSelection) {
    seleccionMaquina = Math.floor(Math.random()*3);   
    console.log(`La seleccion de la maquina es: ${seleccionMaquina}`);

    let miSeleccion = playerSelection;
    console.log(`la seleccion del jugador es: ${miSeleccion}`);

    //Escritura de la seleccion tanto del player como de la computadora
    document.getElementById('opcPlayer').innerHTML = "Opcion: " + opciones[miSeleccion];
    document.getElementById('imgOpcPlayer').src = imgsOptions[miSeleccion];
    document.getElementById('opcMachine').innerHTML = "Opcion: " + opciones[seleccionMaquina];
    document.getElementById('imgOpcMachine').src = imgsOptions[seleccionMaquina];
    
    if ((miSeleccion == 0 && seleccionMaquina == 2) || (miSeleccion == 1 && seleccionMaquina == 0) || (miSeleccion == 2 && seleccionMaquina == 1)) {
        /**
         * Este codigo se ejecuta al ganar
         */
        jugadorGanador = true;
        let msgVictory = `Has ganado!!!. Tú = ${opciones[miSeleccion]}; Máquina = ${opciones[seleccionMaquina]}`;
        document.body.innerHTML += '<h3>' + msgVictory + '</h3>';
        document.getElementById('game').style.background = colorsGame[0];
        document.getElementById('btnReset').style.display = "flex";
        document.getElementById("btnsOpcs").style.display = "none";
        // alert(msgVictory);
    }else{
        if (miSeleccion == seleccionMaquina) {
            /**
             * Este codigo se ejecuta al empatar
             */
            jugadorGanador = false;
            let msgDraw = `Empate. Tú = ${opciones[miSeleccion]}; Máquina = ${opciones[seleccionMaquina]}`;
            document.body.innerHTML += '<h3>' + msgDraw + '</h3>';
            document.getElementById('game').style.background = colorsGame[1];
            // alert(msgDraw);
        }else{
            /**
             * Este codigo se ejecuta al perder
             */
            let msgDefeat = `Has perdido!!!. Tu = ${opciones[miSeleccion]}; Máquina = ${opciones[seleccionMaquina]}`;
            document.body.innerHTML += '<h3>' + msgDefeat + '</h3>';
            document.getElementById('game').style.background = colorsGame[2];
            // alert(msgDefeat);
        }
    }
}

function darBienvenida() {
    alert("Bienvenido, a continuacion selecciona tu opcion, la maquina tomará una opcion aleatoria y se te indicara el resultado")
}

function cambiarColorFondo(e, ev){
    // console.log(e);
    if (jugadorGanador) {
        e.style.background = "lightgreen";
    }
    ev.stopPropagation();
}

function stopPropagation(ev) {
    ev.stopPropagation();
}