
/**
 * Manejadores de Eventos
 */
//Agregar la logica para verificar que el input 'cantDolar' no este vacio para permitir hacer click en el.
// document.dolarForm.cantDolar.addEventListener("change", habilitarBoton(document.dolarForm.btnDolarForm, validarInputVacio(document.getElementById('cantDolar'))));
//document.dolarForm.cantDolar.onchange = //callback del evento
// document.getElementById('cantDolar').addEventListener('change', habilitarBoton);
document.getElementById('cantDolar').addEventListener('change', function(){
    console.log('llamado');
    if (document.dolarForm.cantDolar.value == "") {
        document.dolarForm.btnDolarForm.style.display = 'none';
    }else{
        document.dolarForm.btnDolarForm.style.display = 'block';
        
    }
});
// document.getElementById('cantDolar').onkeydown =  habilitarBoton(document.dolarForm.btnDolarForm, validarInputVacio(document.getElementById('cantDolar')))//callback

window.onload = quitarSpinner;
/**
 * Solicitudes Asincronas
 */
fetch('https://ve.dolarapi.com/v1/dolares').
then(res => res.json()).
then(data => {
    console.log(data);
    //Codigo para actualizar el select del formulario con los datos obtenidos del API
    //Option BCV
    document.getElementById('BCV').innerHTML += data[0].promedio;
    document.getElementById('BCV').value = data[0].promedio;
    //Option Paralelo---
    document.getElementById('Paralelo').innerHTML += data[1].promedio;
    document.getElementById('Paralelo').value = data[1].promedio;
})

/**
 * Metodos globales de la aplicacion
 */
function calcular() {
    if (document.dolarForm.cantDolar.value != '') {
        let monto = parseFloat(document.dolarForm.cantDolar.value);
        let tasa = parseFloat(document.dolarForm.tasaBs.value);
    
        let total = monto * tasa;
    
        document.dolarForm.totalDolarABs.value = total;
        document.dolarForm.totalDolarABs.focus();
    }else{
        alert("Debes escribir un monto a convertir");
        document.dolarForm.cantDolar.focus();
    }
}

function validarInputVacio(input) {
    if (input.value == '') {
        alert("El input no debe quedar vacion");
        input.focus();
        return true;
    }else{
        return false;
    }
}

function habilitarBoton() {
    console.log('llamado');
    if (document.dolarForm.cantDolar.value == "") {
        document.dolarForm.btnDolarForm.style.display = 'none';
    }else{
        document.dolarForm.btnDolarForm.style.display = 'block';
        
    }
}

function quitarSpinner() {
    document.getElementById('spinner').style.display = 'none';
}