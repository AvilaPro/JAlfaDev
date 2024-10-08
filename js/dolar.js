
fetch('https://ve.dolarapi.com/v1/dolares').
then(res => res.json()).
then(data => {
    console.log(data);
    //Codigo para actualizar el select del formulario con los datos obtenidos del API
    //Option BCV
    document.getElementById('BCV').innerHTML += data[0].promedio;
    document.getElementById('BCV').value = data[0].promedio;
    //Option Paralelo---
})

function calcular() {
    
}