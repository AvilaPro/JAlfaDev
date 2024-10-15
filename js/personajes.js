/**
 * Declaracion de variables
 */
let personajes;
let Eduardo = "Eduardo";
let precio = 100;
let iva = 16;

let arregloNombres = [Eduardo, "Jorge", "Moises", "Carlyn", 25, true, ()=>{console.log("funcion en el arreglo")}, precio, iva];

/**
 * Consultas al API
 * Nos conectaremos con el API de Rick and Morty
 */
fetch("https://rickandmortyapi.com/api/character", {
    method: 'GET'
}).
then(res => res.json()).
then(data => {
    console.log(data);
    personajes = data.results;
    console.log(personajes);
    //Ciclo para cargar las cards de los personajes
}).
then(() => {
    console.log("luego de cargar los datos")
    let main = document.getElementById("main");
    for (const personaje of personajes) {
        main.innerHTML += `
            <div class='card'>
                <img src='${personaje.image}'>
                <h3>${personaje.name}</h3>
                <span>Genero: ${personaje.gender}</span>
                <span>Especie: ${personaje.species}</span>
                <span>Status: ${personaje.status}</span>
            </div>
        `
    }    
})

document.getElementById("filtrar").onclick = () => {
    let select = document.getElementById("genero").value;
    console.log(select, typeof(select));
    let filtrados = personajes.filter((p) => p.gender == select);
    console.log(filtrados);
    let main = document.getElementById("main");
    main.innerHTML = "";
    filtrados.forEach(el => {
        main.innerHTML += `
                <div class='card'>
                    <img src='${el.image}'>
                    <h3>${el.name}</h3>
                    <span>Genero: ${el.gender}</span>
                    <span>Especie: ${el.species}</span>
                    <span>Status: ${el.status}</span>
                </div>
            `
    });
    // for (const personaje of filtrados) {
    //     main.innerHTML += `
    //         <div class='card'>
    //             <img src='${personaje.image}'>
    //             <h3>${personaje.name}</h3>
    //             <span>Genero: ${personaje.gender}</span>
    //             <span>Especie: ${personaje.species}</span>
    //             <span>Status: ${personaje.status}</span>
    //         </div>
    //     `
    // }   
}