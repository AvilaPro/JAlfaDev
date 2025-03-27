//Variables para almacenar los precios del dolar.
var dolarOficial;
var dolarParalelo;
var dolarPromedio;
//Obtener los datos del dolar desde dolarapi.com
fetch("https://ve.dolarapi.com/v1/dolares").
then((res) => res.json()).
then((data) => {
    //Almacenar los precios del dolar en las variables
    console.log(data);
    dolarOficial = data[0].promedio;
    dolarParalelo = data[1].promedio;
    //calcular promedio
    dolarPromedio = (dolarOficial + dolarParalelo) / 2;

    console.log(dolarOficial);
    console.log(dolarParalelo);
    console.log(dolarPromedio);
});


window.addEventListener("load", () => {
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
    titulo.setAttribute("style", "text-align: center;")
});
