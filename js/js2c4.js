document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    console.log(event);
});

let spinner = document.getElementById("spinner");

window.onload = quitarSpinner;  

function quitarSpinner() {
    spinner.style.display = "none";
}

//Distinguir entre funcion clasica, anonima y arrow
//Funcion Clasica
function miFuncionClasica(a, b){
    return a + b ;  // return es opcional en funciones de una sola linea
};
//Funcion Anonima
let miFuncionAnonima = function(a,b){
    return a - b;
};
//Funcion Arrow
let miFuncionArrow = (a,b) => a + b;

console.log('miFuncionClasica', miFuncionClasica(2,2)); //4
console.log('miFuncionAnonima', miFuncionAnonima(3,2)); //1
console.log('miFuncionArrow', miFuncionArrow(10,10)); //20