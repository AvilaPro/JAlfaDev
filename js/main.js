//Variables para almacenar los precios del dolar.
var nombreValores = ["Dolar Paralelo", "Dolar Promedio", "Dolar Oficial"];
var valoresDolar = [];
let encabezadoTabla = ["fecha", "paralelo", "promedio", "oficial"];
//Obtener los datos del dolar desde dolarapi.com
fetch("https://ve.dolarapi.com/v1/dolares").
    then((res) => res.json()).
    then((data) => {
        //Almacenar los precios del dolar en las variables
        console.log(data);
        let dolarOficial = data[0].promedio;
        let dolarParalelo = data[1].promedio;
        //calcular promedio
        let dolarPromedio = (dolarOficial + dolarParalelo) / 2;

        valoresDolar.push(dolarParalelo);
        valoresDolar.push(dolarPromedio);
        valoresDolar.push(dolarOficial);

        console.log(valoresDolar);

        renderizado();
        cargarHistorial();
        ;
    });


var renderizado = () => {
    console.log("Todo listo");
    //Seleccion del contenedor
    let app = document.getElementById("app");

    //Titulo de la app
    let titulo = document.createElement("h1");
    let msgTitulo = document.createTextNode("Calculadora Dolar");

    //cargar el texto en el titulo
    titulo.appendChild(msgTitulo);
    app.appendChild(titulo);

    //cambiar atributos de un elemento
    titulo.setAttribute("style", "text-align: center;");

    //Crear la lista de precios del dolar
    let lista = document.createElement("ol");

    //creamos contador utilitario
    let index = 0;
    //Crear los elementos de la lista
    for (const valor of valoresDolar) {
        let auxLi = document.createElement("li");
        auxLi.textContent = nombreValores[index] + ": " + valor;
        //programar un manejador de eventos para el doble click y a traves de un confirm preguntar si deseamos eliminar el elemento.
        auxLi.ondblclick = function () {
            if (confirm("¿Desea eliminar el elemento?")) {
                // lista.removeChild(auxLi);
                this.parentNode.removeChild(this);
            }
        }
        //Agregar los elementos a la lista
        lista.appendChild(auxLi);
        //actualizamos el contador
        index++;
    }

    //Agregamos la lista al app
    app.appendChild(lista);
}

var cargarHistorial = () => {
    //Seleccion del contenedor
    let app = document.getElementById("app");
    //Crear la tabla - fecha, paralelo, promedio, oficial
    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla");
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    for (const e of encabezadoTabla) {
        let thAux = document.createElement("th");
        thAux.innerText = e
        tr.appendChild(thAux);
    }
    thead.appendChild(tr);
    //generar los datos de la tabla
    //array de datos fake son objetos con fecha, paralelo, promedio y oficial
    let datos = [
        { fecha: "2022-01-01", paralelo: 1.5, promedio: 1.6, oficial: 1.7 },
        { fecha: "2022-01-02", paralelo: 1.6, promedio: 1.7, oficial: 1.8 },
        { fecha: "2022-01-03", paralelo: 1.7, promedio: 1.8, oficial: 1.9 },
        { fecha: "2022-01-04", paralelo: 1.8, promedio: 1.9, oficial: 2.0 },
        { fecha: "2022-01-05", paralelo: 1.9, promedio: 2.0, oficial: 2.1 },
    ];
    //Agregar logica para agregar un objeto al array datos con nuevos aleatorios como un metodo de un boton que debe agregarse a la pagina
    

    //con esos datos crear las siguientes filas de la tabla
    for (const dato of datos) {
        let trAux = document.createElement("tr");
        for (const e of encabezadoTabla) {
            let tdAux = document.createElement("td");
            tdAux.innerText = dato[e];
            trAux.appendChild(tdAux);
            //agregar logica para eliminar una fila

        }
        tabla.appendChild(trAux);
    }
    tabla.appendChild(thead);
    app.appendChild(tabla);
}