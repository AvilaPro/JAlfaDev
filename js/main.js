/***
 * Metodos del sistema
 */
function registrar() {
    let info = document.getElementById("info");
    let contenedor = document.getElementById("contenedor");
    let newElement = document.createElement("li");
    // newElement.setAttribute("ondblclick", "eliminarElement(this)");
    // newElement.addEventListener("click", () => {
    //     if (confirm("Deseas eliminarme?")) {
    //         newElement.parentNode.removeChild(newElement);
    //     }
    // });
    newElement.onclick = () => {
        if (confirm("Deseas eliminarme?")) {
            newElement.parentNode.removeChild(newElement);
        }
    }
    let newContent = document.createTextNode(info.value);

    //escribir el contenido dentro del elemento recien creado
    newElement.appendChild(newContent);
    //agrego el elemento recien creado al contenedor
    contenedor.appendChild(newElement);
    //Una vez creado limpiamos al input
    info.value = '';
    info.focus();
}

//metodo que me permita eliminar un elemento, que se elimina a sí mismo.
function eliminarElement(e) {
    console.log(e)
    if (confirm("Deseas elminiar este elemento?")) {
        e.parentNode.removeChild(e);
    }
}

function registrarEnTabla() {
    //variable acumuladora para el total
    let acumulador = 0;
    //variable que toma el input de entrada del nombre
    let info = document.getElementById("info");
    // variable que toma la tabla
    let tabla = document.getElementById("tabla");
    // variable que toma la ultima fila y se crea.
    nuevaFila = tabla.insertRow(-1);
    //insertamos la ultima (en este caso la primera y unica celda) con el nombre
    nuevaFila.insertCell(-1).innerHTML = info.value;
    //ciclo para generar las siguientes celdas con valores aleatorios
    for (let i = 1; i < 3; i++) {
        //local de celda recien creada
        nuevaCelda = nuevaFila.insertCell(-1);
        //asignacion de valor de la celda
        nuevaCelda.innerText = Math.round(Math.random() * 100);
        //acumulamos el valor de la celda para luego usarlo
        acumulador += parseInt(nuevaCelda.innerText);
    }
    //escribimos el valor acumulado en la siguiente celda que corresponde con el total
    nuevaFila.insertCell(-1).innerHTML = acumulador;
    nuevaFila.insertCell(-1).innerHTML = "<button onclick='eliminarFila(this)' class='btn btn-danger text-white'><i class='bi bi-x-circle'></i></button><button class='btn btn-warning'><i class='bi bi-pencil-fill'></i></button>"
}

function eliminarFila(e) {
    if (confirm("Deseas eliminar esa fila?")) {
        let tabla = document.getElementById("tabla");
        let indiceDeLaFila = e.parentNode.parentNode.rowIndex;
        tabla.deleteRow(indiceDeLaFila);
    }
}

/**
 * Recorrido de la tabla
 */
let tabla = document.getElementById("tabla");
for (let i = 0; i < tabla.rows.length; i++) {
    for (let j = 0; j < tabla.rows[i].cells.length; j++) {
        console.log(tabla.rows[i].cells[j].innerHTML);
    }
}

/***
 * CLASE 2
 */
function validarInputsTextForm(form) {
    let regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regExpPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    for (let i = 0; i < form.length; i++) {
        let element = form[i];
        if (element.tagName == 'INPUT' && element.type == 'text') {
            if (element.value == '') {
                element.style.border = 'solid red 2px';
                element.style.boxShadow = '0px 0px 10px red',
                element.nextElementSibling.style.display = 'block';
                element.focus();
                return true;
            } else {
                element.style.border = '';
                element.style.boxShadow = '';
                element.nextElementSibling.style.display = 'none';
            }
        }
        if (element.tagName == 'SELECT') {
            if (element.value == '') {
                element.style.border = 'solid red 2px';
                element.style.boxShadow = '0px 0px 10px red',
                element.nextElementSibling.style.display = 'block';
                element.focus();
                return true;
            } else {
                element.style.border = '';
                element.style.boxShadow = '';
                element.nextElementSibling.style.display = 'none';
            }
        }
        if (element.tagName == 'INPUT' && element.type == 'checkbox') {
            if (!element.checked) {
                element.style.border = 'solid red 2px';
                element.style.boxShadow = '0px 0px 10px red',
                element.nextElementSibling.style.display = 'block';
                element.focus();
                return true;
            } else {
                element.style.border = '';
                element.style.boxShadow = '';
                element.nextElementSibling.style.display = 'none';
            }
        }
        if (element.tagName == 'INPUT' && element.type == 'email') {
            if (element.value == '') {
                element.style.border = 'solid red 2px';
                element.style.boxShadow = '0px 0px 10px red',
                element.nextElementSibling.style.display = 'block';
                element.focus();
                return true;
            } else {
                if (regExpEmail.test(element.value)) {
                    element.style.border = '';
                    element.style.boxShadow = '';
                    element.nextElementSibling.style.display = 'none';
                } else {
                    element.style.border = 'solid red 2px';
                    element.style.boxShadow = '0px 0px 10px red',
                    element.nextElementSibling.style.display = 'block';
                    element.focus();
                    return true
                }

            }
        }
        if (element.tagName == 'INPUT' && element.type == 'password') {
            if (element.value == '') {
                element.style.border = 'solid red 2px';
                element.style.boxShadow = '0px 0px 10px red',
                element.nextElementSibling.style.display = 'block';
                element.focus();
                return true;
            } else {
                if (regExpPassword.test(element.value)) {
                    console.log('pasword correcto');
                    element.style.border = '';
                    element.style.boxShadow = '';
                    element.nextElementSibling.style.display = 'none';
                } else {
                    console.log('pasword incorrecto');
                    element.style.border = 'solid red 2px';
                    element.style.boxShadow = '0px 0px 10px red',
                    element.nextElementSibling.style.display = 'block';
                    element.focus();
                    return true
                }

            }
        }

    }
    return false;
}

function enviarFormulario() {
    loginForm.submit();
}
function manejarEnvio(ev) {
    // ev.preventDefault();
    if (!validarInputsTextForm(loginForm)) {
        return true
    } else {
        return false
    }
}