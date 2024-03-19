//referencia al div contenedor
var container = document.getElementById("container");
var arrElement = [1, 2, 3]
//los elementos a crearse
for (const el of arrElement) {
    let auxElem = document.createElement("p");
    //programar el metodo para autoeliminarse
    auxElem.setAttribute("onclick", "deleteChild(this)");
    //creacion del texto que va dento de los elementos
    let auxText = document.createTextNode(`elemento ${el}`);
    auxElem.appendChild(auxText);
    container.appendChild(auxElem);
}

function deleteChild(e) {
    if (confirm("Deseas eliminar el elemento")) {
        e.parentNode.removeChild(e);
    }
}

/**
 * Capitulo 2 Manipulacion  de lista
 */
var lista =  document.getElementById("lista");
//Creacion de los elementos
document.getElementById("agregar").addEventListener("click", () => {
    if(document.getElementById("dato").value != ""){
        let auxLi = document.createElement("li");
        let auxTextLi = document.createTextNode(document.getElementById("dato").value);
        //agregar texto al li
        auxLi.appendChild(auxTextLi);
        //agregar el li a la lista
        lista.appendChild(auxLi);
        //limpíar el input
        document.getElementById("dato").value = "";
        auxLi.onclick = function () {
            if (confirm("Deseas eliminar este elementos?")) {
                this.parentNode.removeChild(this);
            }
        }
    }
})
//Limpieza de la lista
document.getElementById("limpiar").addEventListener("click", () => {
    if (confirm("Deseas limpiar la lista?")) {
        while (lista.childNodes.length > 0) {
            lista.removeChild(lista.childNodes[0]);
        }
    }
})

/**
 * Capitulo 3 - Agregar elementos a una tabla
*/
var formUser = document.getElementById("formUser");
var tabla = document.getElementById("tabla");
//Obtener los datos del usuario y agregarlos a la tabla
document.getElementById("addUser").addEventListener("click", () =>{
    let auxtr = document.createElement("tr");
    let arrData = [];
    arrData.push(document.getElementById("nombre").value);
    arrData.push(document.getElementById("telefono").value);
    arrData.push(document.getElementById("correo").value);
    console.log(arrData);
    formUser.reset();
    for (const d of arrData) {
        console.log(d);
        let tdAux = document.createElement("td");
        let auxTextTd = document.createTextNode(d);
        tdAux.appendChild(auxTextTd);
        auxtr.appendChild(tdAux);
    }
    let btnRow = auxtr.insertCell(-1);
    btnRow.innerHTML = "<button class='btn btn-warning' onclick='deleteRow(this, event)'>Eliminar</button>"
    tabla.tBodies[0].appendChild(auxtr);
})
//Metodo para eliminar una fila de la tabla
function deleteRow(e, ev) {
    ev.stopPropagation();
    if(confirm("Deseas eliminar el usuario?")){
        fila = e.parentNode.parentNode.rowIndex;
        console.log(fila);
        tabla.deleteRow(fila);
    }
}