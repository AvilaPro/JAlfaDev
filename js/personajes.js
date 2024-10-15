/**
 * Declaracion de variables
 */
let personajes;

/**
 * Consultas al API
 * Nos conectaremos con el API de Rick and Morty
 */
fetch("https://rickandmortyapi.com/api/character").
then(res => res.json()).
then(data => {
    console.log(data);
    personajes = data.results;
    console.log(personajes);
})