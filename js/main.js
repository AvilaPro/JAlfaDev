function validarInput() {
  let cantidadCaracteres = document.getElementById("req").value.length;
  if (cantidadCaracteres > 1) {
    document.getElementById("btnAdd").disabled = false;
  }else{
    document.getElementById("btnAdd").disabled = true;
  }
}

function agregarProducto() {
  let producto = document.getElementById("req").value;
  let elePadre = document.getElementById("lista");
  let li = document.createElement('li');
  let contentLi = document.createTextNode(producto);
  //agregar clase de item lista de bootstrap
  li.setAttribute('class', 'list-group-item');
  //agregamos manejador de evento del doble click para eliminar
  li.setAttribute('ondblclick', "if (confirm('deseas eliminar este producto')) { this.parentNode.removeChild(this); if(elePadre.childNodes.length > 0){document.getElementById('clearList').style.display='block';}else{document.getElementById('clearList').style.display='none'} }");
  //agregamos contenido al li
  li.appendChild(contentLi);
  //agregamos el li a la lista
  elePadre.appendChild(li);
  //Limpiar el input
  document.getElementById("req").value = "";
  //dar visibilidad al btn de limpiar lista
  document.getElementById("clearList").style.display='block';
}

