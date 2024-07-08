let lista1 = document.getElementById("lista1");
let lista2 = document.getElementById("lista2");
let tabla = document.getElementById("tablaUsers");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log(users);
    /**
     * Agregar elementos a un contenedor
     */
    users.forEach((user) => {
      //Creamos el element "p" para agregar el "name"
      let parrafo = document.createElement("p");
      //manejador de evento del doble click para controlar el DELETE
      parrafo.addEventListener("dblclick", () =>{
        //preguntamos si deseamos eliminar el elemento
        if (confirm("Deseas eliminar este elemento de la lista?")) {
          parrafo.parentNode.removeChild(parrafo);
        }
      })
      //control del texto a ser agregado al "p"
      let textParrafo = document.createTextNode(`Name: ${user.name}`);
      //agregamos el texto al "p"
      parrafo.appendChild(textParrafo);
      //agregamos el "p" al contenedor
      lista1.appendChild(parrafo);
    });
    /**
    * Fin Agregar elementos a un contenedor
    */

    /**
     * Agregar elementos en una lista ul, ol.
     */
    for (let usuario of users) {
      //elemento li
      let listItem = document.createElement("li");
      //asignacion de clases al li
      listItem.className = "list-group-item list-group-item-info";
      //elemento button para control DELETE
      let btn = document.createElement("button");
      btn.className = "btn btn-danger btn-sm";
      btn.innerHTML = "<i class='bi bi-x-octagon-fill'></i>"
      listItem.innerHTML = `Name: ${usuario.name}`;
      listItem.appendChild(btn);
      lista2.appendChild(listItem);

      //Rutina del DELETE
      btn.setAttribute("onclick", "eliminarLi(this)");
    }
    /**
     * Fin Agregar elementos en una lista ul, ol.
     */

    /**
     * Agregar filas a una tabla.
     */
    for (const user of users) {
      nuevaFila = tabla.tBodies[0].insertRow(-1);
      for (let i = 0; i < 5; i++) {
        nuevaCelda = nuevaFila.insertCell(-1);
        if (i==0) nuevaCelda.innerHTML = `${user.id}`;
        if (i==1) nuevaCelda.innerHTML = `${user.name}`;
        if (i==2) nuevaCelda.innerHTML = `${user.username}`;
        if (i==3) nuevaCelda.innerHTML = `${user.address.city}`;
        if (i==4) {
          let btns = document.createElement("button");
          btns.className = "btn btn-danger btn-sm";
          btns.innerHTML = "<i class='bi bi-x-octagon-fill'></i>"
          nuevaCelda.appendChild(btns);
          //Rutina para eliminar una fila
          btns.setAttribute("onclick", "eliminarTr(this)");
        }
      }
    }
  })

function eliminarLi(el) {
  if (confirm("Deseas eliminar este elemento?")) {
    el.parentNode.parentNode.removeChild(el.parentNode);
  }
}

function eliminarTr(el) {
  if (confirm("Deseas eliminar ésta fila?")) {
    indiceFila = el.parentNode.parentNode.rowIndex;
    tabla.deleteRow(indiceFila);
  }
}
