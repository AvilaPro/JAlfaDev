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