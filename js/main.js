//Declaracion de variables
let seleccionMaquina;
// let miSeleccion;
let jugadorGanador = false;
let opciones = ["piedra", "papel", "tijeras"];
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
    
    if ((miSeleccion == 0 && seleccionMaquina == 2) || (miSeleccion == 1 && seleccionMaquina == 0) || (miSeleccion == 2 && seleccionMaquina == 1)) {
        jugadorGanador = true;
        alert(`Has ganado!!!. Tú = ${opciones[miSeleccion]}; Máquina = ${opciones[seleccionMaquina]}`);
    }else{
        if (miSeleccion == seleccionMaquina) {
            jugadorGanador = false;
            alert(`Empate. Tú = ${opciones[miSeleccion]}; Máquina = ${opciones[seleccionMaquina]}`);
        }else{
            alert(`Has perdido!!!. Tu = ${opciones[miSeleccion]}; Máquina = ${opciones[seleccionMaquina]}`);
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