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
    let cantidad = document.getElementById("qty").value;
    let unidad = document.getElementById("unt").value;

    let arrAux = [producto, cantidad, unidad];

    //la tabla
    let tabla = document.getElementById("tabla");
    let elePadre = tabla.tBodies[0];
    
    nuevaFila = elePadre.insertRow(-1);
    nuevaFila.setAttribute("ondblclick", "if(confirm('Deseas eliminar este producto?')){fila = this.rowIndex; tabla.deleteRow(fila);}");
    nuevaFila.setAttribute("onclick", "console.log(this.rowIndex)");

    for (let i = 0; i < arrAux.length; i++) {
    
        nuevaCelda = nuevaFila.insertCell(-1);
        nuevaCelda.innerText = arrAux[i];
        
    }

    //limpiar los campos
    document.getElementById("req").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("unt").value = "";

  }

  
  