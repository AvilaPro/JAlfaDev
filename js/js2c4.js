/**
 * Variable globales
 */
var resultado;

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
function miFuncionClasica(a, b) {
  return a + b;  // return es opcional en funciones de una sola linea
};
//Funcion Anonima
let miFuncionAnonima = function (a, b) {
  return a - b;
};
//Funcion Arrow
let miFuncionArrow = (a, b) => a + b;

console.log('miFuncionClasica', miFuncionClasica(2, 2)); //4
console.log('miFuncionAnonima', miFuncionAnonima(3, 2)); //1
console.log('miFuncionArrow', miFuncionArrow(10, 10)); //20

/**
 * Probando map()
 */
const alumnos = [
  { nombre: 'Juan', nota1: 50, nota2: 50 },
  { nombre: 'Pedro', nota1: 78, nota2: 78 },
  { nombre: 'Maria', nota1: 96, nota2: 96 },
]
let promedios = alumnos.map((a) => {
  return ((a.nota1 + a.nota2) / 2).toFixed();
})
console.log(promedios);

/**
 * Conectarse al API de Rick and Morty una vez se han cargado todos los elementos en la pagina
 */
window.addEventListener("DOMContentLoaded", () => {
  fetch("https://rickandmortyapi.com/api/character").
    then(r => r.json()).
    then(data => {
      console.log(data);
      resultado = data.results;
      console.log(resultado);
    }).
    then(() => {
      resultado.forEach((res) => {
        document.getElementById("chars").innerHTML += `
          <div class="card col-3">
            <img src="${res.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${res.name}</h5>
              <p class="card-text">Especie: ${res.species}</p>
              <p class="card-text">Staus: ${res.status}</p>
            </div>
          </div>
        `
      })
    })
})

const botonBusqueda = document.getElementById("btnSearch");
botonBusqueda.addEventListener("click", () => {
  let busqueda = document.getElementById("Input1").value;
  console.log(busqueda);

  let arregloDeNombres = resultado.map((a) => {return a.name;});
  // debugger;
  console.log(arregloDeNombres);

  let a1 = arregloDeNombres.find((a) => a === busqueda);
  console.log(`busqueda con find: ${a1}`);
  let a2 = arregloDeNombres.findIndex((a) => a === busqueda);
  console.log(`busqueda con findIndex: ${a2}`);
  let a3 = arregloDeNombres.some((a) => a == busqueda);
  console.log(`Busqueda con some: ${a3}`);
  let a4 = arregloDeNombres.every((a) => a == busqueda);
  console.log(`Busqueda con every: ${a4}`);
  let a5 = arregloDeNombres.filter((a) => a == busqueda);
  console.log(`Busqueda con filter: ${a5}`);
})