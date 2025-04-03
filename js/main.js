//Variables para almacenar los precios del dolar.
var nombreValores = ["Dolar Paralelo", "Dolar Promedio", "Dolar Oficial"];
var valoresDolar = [];
let encabezadoTabla = ["fecha", "paralelo", "promedio", "oficial"];
//array de datos fake son objetos con fecha, paralelo, promedio y oficial
let datos = [
    { fecha: "2022-01-01", paralelo: 1.5, promedio: 1.6, oficial: 1.7 },
    { fecha: "2022-01-02", paralelo: 1.6, promedio: 1.7, oficial: 1.8 },
    { fecha: "2022-01-03", paralelo: 1.7, promedio: 1.8, oficial: 1.9 },
    { fecha: "2022-01-04", paralelo: 1.8, promedio: 1.9, oficial: 2.0 },
    { fecha: "2022-01-05", paralelo: 1.9, promedio: 2.0, oficial: 2.1 },
];
/**
 * Bloque principal del codigo
 * Obtener los datos del dolar desde dolarapi.com
 * 
 */
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

        //Llamado de los metodos principales
        renderizado();
        agregarCalculadora();
        cargarHistorial();
    });

/**
 * Metodo para cargarel titulo y la primera lista de precios de cambios
 */
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

/**
 * Metodo para agregar el formulario de nuestra calculadora.
 */
var agregarCalculadora = () => {
    //Seleccion del contenedor
    let app = document.getElementById("app");
    //Creamos el formulario
    let formulario = document.createElement("form");
    formulario.setAttribute("id", "calculadora");
    formulario.setAttribute("method", "GET");
    formulario.setAttribute("action", "#");
    formulario.setAttribute("name", "calculadora");

    //Creamos los elementos que van dentro del formulario
    //Select del formulario
    let select = document.createElement("select");
    //Creamos los options del select
    for (const nombre of nombreValores) {
        let optAux = document.createElement("option");
        optAux.innerText = nombre
        select.appendChild(optAux);
    }

    //Los inputs de la calculadora
    let dolar = document.createElement("input");
    dolar.setAttribute("id", "dolar");
    dolar.value = 1;
    let bs = document.createElement("input");
    bs.setAttribute("id", "bs");
    bs.value = valoresDolar[0];

    //El boton de la calculadora
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.innerHTML = "Calcular";
    btn.setAttribute("onclick", "calcular()");

    formulario.appendChild(select);
    formulario.appendChild(dolar);
    formulario.appendChild(bs);
    formulario.appendChild(btn);

    app.appendChild(formulario);
}

/**
 * Metodo para cargarla tabla de historial
 */
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
    //Agregar logica para agregar un objeto al array datos con nuevos aleatorios como un metodo de un boton que debe agregarse a la pagina


    //con esos datos crear las siguientes filas de la tabla
    for (const dato of datos) {
        let trAux = document.createElement("tr");
        for (const e of encabezadoTabla) {
            let tdAux = document.createElement("td");
            tdAux.innerText = dato[e];
            //agregar logica para eliminar una fila
            tdAux.onclick = function () {
                this.parentNode.setAttribute("class", "warning");
                setTimeout(() => {
                    if (confirm("¿Desea eliminar el elemento?")) {
                        this.parentNode.parentNode.removeChild(this.parentNode);
                    } else {
                        this.parentNode.setAttribute("class", "");
                    }
                }, 50);
            }
            trAux.appendChild(tdAux);
        }
        tabla.appendChild(trAux);
    }
    tabla.appendChild(thead);

    //boton para agregar datos
    let boton = document.createElement("button");
    boton.innerText = "Agregar datos";
    boton.onclick = agregarHistorial;

    //agregamos la tabla
    app.appendChild(tabla);
    //agregamos el boton
    app.appendChild(boton);
}

var agregarHistorial = () => {
    let tabla = document.getElementById("tabla");
    //Crear un objeto con los datos
    let nuevoDato = {
        fecha: "2024-02-20",
        paralelo: "1",
        promedio: "85",
        oficial: "80"
    }
    datos.push(nuevoDato);
    let trAux = document.createElement("tr");
    // crear td con los datos de nuevoDato
    for (const e of encabezadoTabla) {
        let tdAux = document.createElement("td");
        tdAux.innerText = nuevoDato[e];
        //agregar logica para eliminar una fila
        tdAux.onclick = function () {
            this.parentNode.setAttribute("class", "warning");
            setTimeout(() => {
                if (confirm("¿Desea eliminar el elemento?")) {
                    this.parentNode.parentNode.removeChild(this.parentNode);
                } else {
                    this.parentNode.setAttribute("class", "");
                }
            }, 50);
        }
        trAux.appendChild(tdAux);
    }
    tabla.appendChild(trAux);
}

/**
 * Metodo para calcular
 */
function calcular() {
    let dolar = parseFloat(document.getElementById("dolar").value);
    let bs = parseFloat(document.getElementById("bs").value);

    console.log(dolar);
    console.log(bs);

    let valor = dolar * bs;
    console.log(valor);
    alert("El valor es: " + valor);

}