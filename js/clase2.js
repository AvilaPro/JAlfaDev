var xhr = new XMLHttpRequest();

var peticion = document.getElementById("peticion");

var resultado = document.getElementById("resultado");

/**
 * Metodos
 */
//Ajax sin libreria
/*
peticion.onclick = () => {
    console.log("peticion");
    xhr.open("get", "https://rickandmortyapi.com/api/character/2");
    xhr.send();
}
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("respondido");
        console.log(this.responseText);
        respuesta = this.responseText;
        data = JSON.parse(respuesta);
        console.log(data);
        resultado.innerText = data.name;
    }
}
*/
/**
 * Ajax Con JQuery
 */
$("#peticion").click(() => {
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/2",
        type: "GET",
        dataType: "text",
        success: function (a) {
            data = JSON.parse(a);
            console.log(data);
            $("#resultado").text(data.name)
        }
    })
})

/**
 * Ajax load
 */
$("#loadSite").load("./algomas.html #cosa", function(){console.log("LOAD exitoso!!!")});

/**
 * getScript con Ajax
 */
$.getScript("./js/otroScript.js", function () {
    metodoEnElOtro();
});

/**
 * getJSON con AJAX
 */
$.getJSON("./js/datosJSON.json", function (j){
    $("#nombre").text(j[0].name);
    $("#apellido").text(j[0].lastName);
})